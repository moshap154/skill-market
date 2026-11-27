/* Chợ Skill — HomeTechVN. Thuần JS, không phụ thuộc ngoài.
   Đọc data/meta.json + data/skills.json, lọc/tìm kiếm tại chỗ,
   mở chi tiết bằng cách tải file SKILL.md tương ứng rồi render markdown. */
(function () {
  "use strict";

  var ISSUE_REPO = "https://github.com/moshap154/skill-market/issues/new";
  var skills = [];
  var meta = null;

  var els = {
    grid: document.getElementById("grid"),
    stats: document.getElementById("stats"),
    updatedAt: document.getElementById("updated-at"),
    resultCount: document.getElementById("result-count"),
    search: document.getElementById("search"),
    group: document.getElementById("filter-group"),
    region: document.getElementById("filter-region"),
    status: document.getElementById("filter-status"),
    sort: document.getElementById("sort"),
    modal: document.getElementById("modal"),
    modalContent: document.getElementById("modal-content"),
    modalClose: document.getElementById("modal-close"),
    modalBackdrop: document.getElementById("modal-backdrop"),
    issueForm: document.getElementById("issue-form")
  };

  /* ---------- tiện ích ---------- */
  function norm(s) {
    return (s || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function fmtDate(s) {
    // "2026-11-27 13:36:20 +07" -> "27/11/2026"
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || "");
    return m ? m[3] + "/" + m[2] + "/" + m[1] : (s || "");
  }

  /* ---------- render markdown tối thiểu ---------- */
  function inlineMd(s) {
    var out = esc(s);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    return out;
  }
  function renderMarkdown(md) {
    // Bỏ frontmatter nếu còn sót
    md = md.replace(/^---\n[\s\S]*?\n---\n/, "");
    var lines = md.split("\n");
    var html = [], i = 0, para = [];
    function flushPara() {
      if (para.length) { html.push("<p>" + inlineMd(para.join(" ")) + "</p>"); para = []; }
    }
    while (i < lines.length) {
      var line = lines[i];
      if (line.indexOf("```") === 0) {
        flushPara();
        var code = [];
        i++;
        while (i < lines.length && lines[i].indexOf("```") !== 0) { code.push(lines[i]); i++; }
        html.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
        i++;
        continue;
      }
      var h2 = line.match(/^##\s+(.*)$/);
      var h3 = line.match(/^###\s+(.*)$/);
      var h1 = line.match(/^#\s+(.*)$/);
      if (h1 || h2 || h3) {
        flushPara();
        if (h1) html.push("<h1>" + inlineMd(h1[1]) + "</h1>");
        else if (h2) html.push("<h2>" + inlineMd(h2[1]) + "</h2>");
        else html.push("<h3>" + inlineMd(h3[1]) + "</h3>");
        i++;
        continue;
      }
      if (/^\s*[-*]\s+/.test(line)) {
        flushPara();
        var items = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          items.push("<li>" + inlineMd(lines[i].replace(/^\s*[-*]\s+/, "")) + "</li>");
          i++;
        }
        html.push("<ul>" + items.join("") + "</ul>");
        continue;
      }
      if (/^\s*\d+[.)]\s+/.test(line)) {
        flushPara();
        var nums = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
          nums.push("<li>" + inlineMd(lines[i].replace(/^\s*\d+[.)]\s+/, "")) + "</li>");
          i++;
        }
        html.push("<ol>" + nums.join("") + "</ol>");
        continue;
      }
      if (/^---+$/.test(line.trim())) { flushPara(); html.push("<hr>"); i++; continue; }
      if (line.trim() === "") { flushPara(); i++; continue; }
      para.push(line.trim());
      i++;
    }
    flushPara();
    return html.join("\n");
  }

  /* ---------- thẻ skill ---------- */
  function cardHtml(s) {
    var strengths = (s.strengths || []).slice(0, 2).map(function (x) {
      return "<li>" + esc(x) + "</li>";
    }).join("");
    var kws = (s.keywords || []).slice(0, 4).map(function (k) {
      return '<span class="chip">' + esc(k) + "</span>";
    }).join("");
    var badges = '<span class="chip region">' + esc(s.region) + "</span>";
    if (s.status === "archived") badges += ' <span class="chip archived">Đã lưu trữ</span>';
    if (s.has_content) badges += ' <span class="chip">Có nội dung đầy đủ</span>';
    return '<button class="card" data-slug="' + esc(s.slug) + '">' +
      "<h3>" + esc(s.name) + "</h3>" +
      '<p class="meta">' + esc(s.group) + " • " + esc(s.field) + "</p>" +
      (strengths ? "<ul>" + strengths + "</ul>" : "") +
      '<div class="chips">' + badges + kws + "</div>" +
      '<p class="uses">' + (s.uses ? "Đã dùng " + s.uses + " lần" : "Chưa ghi nhận lượt dùng") + "</p>" +
      "</button>";
  }

  function currentFiltered() {
    var q = norm(els.search.value.trim());
    var g = els.group.value, r = els.region.value, st = els.status.value;
    var list = skills.filter(function (s) {
      if (g && s.group !== g) return false;
      if (r && s.region !== r) return false;
      if (st && s.status !== st) return false;
      if (q) {
        var hay = norm([s.name, s.description, s.job, (s.keywords || []).join(" "),
                        s.group, s.field].join(" "));
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    if (els.sort.value === "uses") {
      list.sort(function (a, b) { return (b.uses || 0) - (a.uses || 0) || a.name.localeCompare(b.name); });
    } else {
      list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    return list;
  }

  function render() {
    var list = currentFiltered();
    els.resultCount.textContent = "Hiển thị " + list.length + " / " + skills.length + " skill";
    if (!list.length) {
      els.grid.innerHTML = "<p>Không tìm thấy skill nào phù hợp. Thử đổi từ khóa hoặc bộ lọc.</p>";
      return;
    }
    els.grid.innerHTML = list.map(cardHtml).join("");
  }

  function fillFilters() {
    var groups = [], regions = [];
    skills.forEach(function (s) {
      if (groups.indexOf(s.group) === -1) groups.push(s.group);
      if (regions.indexOf(s.region) === -1) regions.push(s.region);
    });
    groups.sort(); regions.sort();
    groups.forEach(function (g) {
      els.group.insertAdjacentHTML("beforeend", '<option value="' + esc(g) + '">' + esc(g) + "</option>");
    });
    regions.forEach(function (r) {
      els.region.insertAdjacentHTML("beforeend", '<option value="' + esc(r) + '">' + esc(r) + "</option>");
    });
  }

  /* ---------- chi tiết (modal) ---------- */
  function openDetail(slug) {
    var s = null;
    for (var i = 0; i < skills.length; i++) if (skills[i].slug === slug) { s = skills[i]; break; }
    if (!s) return;
    els.modalContent.innerHTML = "<p>Đang tải nội dung…</p>";
    els.modal.hidden = false;
    document.body.style.overflow = "hidden";
    fetch(s.path).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    }).then(function (md) {
      var note = s.has_content
        ? '<div class="detail-note">✓ Có nội dung đầy đủ trong kho — skill này vẫn dùng được ngay cả khi link nguồn không còn mở được.</div>'
        : '<div class="detail-note">Kho chưa lưu nội dung gốc đầy đủ cho skill này (chỉ có mô tả tóm tắt).</div>';
      var src = s.source_url
        ? '<p class="detail-source">Nguồn: <a href="' + esc(s.source_url) + '" target="_blank" rel="noopener">' + esc(s.source_url) + "</a></p>"
        : "";
      els.modalContent.innerHTML =
        "<h1 id=\"modal-title\">" + esc(s.name) + "</h1>" +
        '<p class="detail-meta">' + esc(s.group) + " • " + esc(s.field) + " • " + esc(s.region) +
        " • " + (s.status === "archived" ? "Đã lưu trữ" : "Đang có") + "</p>" +
        note + renderMarkdown(md) + src;
    }).catch(function () {
      els.modalContent.innerHTML = "<h1>" + esc(s.name) + "</h1><p>Không tải được file nội dung chi tiết.</p>" +
        "<p>" + esc(s.description) + "</p>";
    });
  }
  function closeDetail() {
    els.modal.hidden = true;
    document.body.style.overflow = "";
    els.modalContent.innerHTML = "";
  }

  /* ---------- form đóng góp ---------- */
  els.issueForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = document.getElementById("f-name").value.trim();
    var desc = document.getElementById("f-desc").value.trim();
    var src = document.getElementById("f-source").value.trim();
    var grp = document.getElementById("f-group").value;
    var title = "Đề xuất skill mới: " + name;
    var body = "## Tên skill\n\n" + name + "\n\n## Mô tả\n\n" + desc +
      "\n\n## Link nguồn\n\n" + (src || "(không có)") +
      "\n\n## Nhóm đề xuất\n\n" + grp +
      "\n\n---\n_Gửi từ trang Chợ Skill — HomeTechVN._";
    var url = ISSUE_REPO + "?title=" + encodeURIComponent(title) +
      "&body=" + encodeURIComponent(body);
    window.open(url, "_blank", "noopener");
  });

  /* ---------- sự kiện ---------- */
  ["input", "change"].forEach(function (evt) {
    els.search.addEventListener(evt, render);
    els.group.addEventListener(evt, render);
    els.region.addEventListener(evt, render);
    els.status.addEventListener(evt, render);
    els.sort.addEventListener(evt, render);
  });
  els.grid.addEventListener("click", function (ev) {
    var card = ev.target.closest ? ev.target.closest(".card") : null;
    if (card) openDetail(card.getAttribute("data-slug"));
  });
  els.modalClose.addEventListener("click", closeDetail);
  els.modalBackdrop.addEventListener("click", closeDetail);
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !els.modal.hidden) closeDetail();
  });

  /* ---------- tải dữ liệu ---------- */
  Promise.all([
    fetch("data/meta.json").then(function (r) { return r.json(); }),
    fetch("data/skills.json").then(function (r) { return r.json(); })
  ]).then(function (res) {
    meta = res[0]; skills = res[1];
    var live = meta.live != null ? meta.live : skills.filter(function (s) { return s.status === "live"; }).length;
    var groups = meta.groups != null ? meta.groups : new Set(skills.map(function (s) { return s.group; })).size;
    var regions = new Set(skills.map(function (s) { return s.region; })).size;
    els.stats.textContent = live + " skill đang có • " + skills.length + " skill tất cả • " +
      groups + " nhóm • " + regions + " vùng • Cập nhật " + fmtDate(meta.generated_at);
    els.updatedAt.textContent = fmtDate(meta.generated_at);
    fillFilters();
    render();
  }).catch(function () {
    els.stats.textContent = "Không tải được dữ liệu chợ. Vui lòng thử tải lại trang.";
    els.grid.innerHTML = "<p>Không tải được dữ liệu. Kiểm tra lại kết nối rồi tải lại trang.</p>";
  });
})();
