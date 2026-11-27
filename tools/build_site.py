#!/usr/bin/env python3
"""Build site tĩnh công khai cho Chợ Skill từ dữ liệu đã xuất sẵn.

Nguồn (chỉ đọc): ~/workspace/skill-market/
Đích: ~/workspace/skill-market-site/
Chỉ dùng thư viện chuẩn. Chạy: python3 tools/build_site.py
"""
import json
import re
import shutil
from pathlib import Path

HOME = Path.home()
SRC = HOME / "workspace" / "skill-market"
OUT = HOME / "workspace" / "skill-market-site"


def parse_frontmatter(text):
    """Trả về (dict frontmatter, phần thân sau frontmatter)."""
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}, text
    fm = {}
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        key, _, val = line.partition(":")
        key = key.strip()
        val = val.strip()
        if len(val) >= 2 and val[0] == '"' and val[-1] == '"':
            val = val[1:-1]
        elif val == "true":
            val = True
        elif val == "false":
            val = False
        elif re.fullmatch(r"-?\d+", val):
            val = int(val)
        fm[key] = val
    return fm, text[m.end():]


def parse_sections(body):
    """Tách thân markdown thành dict {tên mục: nội dung thô}."""
    sections = {}
    current = None
    buf = []
    for line in body.splitlines():
        hm = re.match(r"^##\s+(.+?)\s*$", line)
        if hm:
            if current is not None:
                sections[current] = "\n".join(buf).strip()
            current = hm.group(1).strip()
            buf = []
        elif re.match(r"^#\s+", line):
            continue  # bỏ tiêu đề H1 (tên skill đã có ở frontmatter)
        else:
            buf.append(line)
    if current is not None:
        sections[current] = "\n".join(buf).strip()
    return sections


def bullets(text):
    return [ln[1:].strip() for ln in text.splitlines()
            if ln.strip().startswith("- ") and ln[1:].strip()]


def main():
    index = json.loads((SRC / "index.json").read_text(encoding="utf-8"))
    sync = json.loads((SRC / "sync-state.json").read_text(encoding="utf-8"))

    records = []
    missing = []
    for item in index:
        path = SRC / item["path"]
        if not path.exists():
            missing.append(item["path"])
            continue
        raw = path.read_text(encoding="utf-8")
        fm, body = parse_frontmatter(raw)
        sec = parse_sections(body)
        strengths = bullets(sec.get("Điểm mạnh", ""))[:3]
        keywords = [k.strip() for k in sec.get("Từ khóa", "").split(",") if k.strip()]
        records.append({
            "id": item.get("id"),
            "slug": item["slug"],
            "name": fm.get("name") or item["name"],
            "description": fm.get("description") or sec.get("Mô tả", ""),
            "job": fm.get("job") or sec.get("Công việc", ""),
            "group": item["group"],
            "field": item["field"],
            "region": item["region"],
            "language": item["language"],
            "source_url": item.get("source_url") or "",
            "origin": item.get("origin") or "",
            "status": item["status"],
            "has_content": bool(item.get("has_content")),
            "uses": item.get("uses", 0),
            "xp": item.get("xp", 0),
            "rating": item.get("rating"),
            "strengths": strengths,
            "keywords": keywords,
            "inputs": sec.get("Đầu vào", ""),
            "outputs": sec.get("Đầu ra", ""),
            "limits": sec.get("Giới hạn", ""),
            "path": item["path"],
        })

    # Thư mục đích: chỉ ghi đè data + skills/archived, giữ nguyên file gốc của site.
    (OUT / "data").mkdir(parents=True, exist_ok=True)
    (OUT / "data" / "skills.json").write_text(
        json.dumps(records, ensure_ascii=False, indent=1), encoding="utf-8")
    meta = {
        "generated_at": sync.get("exported_at"),
        "exported_at": sync.get("exported_at"),
        "live": sync.get("live"),
        "archived": sync.get("archived"),
        "total": sync.get("total"),
        "groups": sync.get("groups"),
        "skills_in_json": len(records),
    }
    (OUT / "data" / "meta.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=1), encoding="utf-8")

    # Copy SKILL.md + source.md (chỉ file .md) sang site để trang chi tiết tải được.
    # GitHub secret scanning chặn push nếu file chứa URL webhook mẫu đúng định dạng
    # secret (vd skill hunted-trendradar có ví dụ Slack webhook giả). Ghi đè bằng
    # placeholder khi copy sang site; bản gốc trong kho export giữ nguyên.
    # LƯU Ý: không được ghi URL giả nguyên văn vào đây — chính nó cũng bị chặn
    # khi push file này lên GitHub; dùng regex khớp dạng URL thay vì chuỗi cụ thể.
    slack_webhook_re = re.compile(
        r"https://hooks\.slack\.com/services/T[0-9A-Z]+/B[0-9A-Z]+/[A-Za-z0-9]+")
    slack_webhook_placeholder = (
        "https://hooks.slack.com/services/<team-id>/<app-id>/<webhook-token>")
    copied = 0
    for sub in ("skills", "archived"):
        for src_file in sorted((SRC / sub).rglob("*.md")):
            rel = src_file.relative_to(SRC)
            dst = OUT / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            text = src_file.read_text(encoding="utf-8")
            text = slack_webhook_re.sub(slack_webhook_placeholder, text)
            dst.write_text(text, encoding="utf-8")
            copied += 1

    live_n = sum(1 for r in records if r["status"] == "live")
    arch_n = sum(1 for r in records if r["status"] == "archived")
    bad = [r["slug"] for r in records
           if not r["name"] or not r["slug"] or not r["group"]]
    print(f"index: {len(index)} skill | records: {len(records)} "
          f"(live {live_n}, archived {arch_n})")
    print(f"file .md đã copy: {copied}")
    print(f"meta: {meta}")
    print(f"thiếu file nguồn: {missing if missing else 'không có'}")
    print(f"bản ghi thiếu name/slug/group: {bad if bad else 'không có'}")
    if missing or bad or len(records) != len(index):
        raise SystemExit("BUILD CÓ LỖI — xem các dòng trên")


if __name__ == "__main__":
    main()
