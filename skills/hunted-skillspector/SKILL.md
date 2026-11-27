---
name: "SkillSpector"
description: "Công cụ quét bảo mật mã nguồn mở của NVIDIA cho skill AI: phát hiện lỗ hổng, mẫu độc hại và rủi ro bảo mật trong skill của Claude Code, Codex, MCP trước khi cài. 71 mẫu trên 17 nhóm: prompt injection,…"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Quét bảo mật skill AI trước khi cài: prompt injection, rò dữ liệu, chuỗi cung ứng"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/NVIDIA/SkillSpector"
origin: "hunted"
market_id: 252
vault_id: 313
status: live
has_content: true
---

# SkillSpector

## Công việc

Quét bảo mật skill AI trước khi cài: prompt injection, rò dữ liệu, chuỗi cung ứng

## Mô tả

Công cụ quét bảo mật mã nguồn mở của NVIDIA cho skill AI: phát hiện lỗ hổng, mẫu độc hại và rủi ro bảo mật trong skill của Claude Code, Codex, MCP trước khi cài. 71 mẫu trên 17 nhóm: prompt injection, chống từ chối, rò rỉ dữ liệu, leo thang đặc quyền, chuỗi cung ứng, lạm dụng quyền, xử lý output, rò rỉ system prompt, nhiễm độc bộ nhớ, lạm dụng tool, agent giả mạo, lạm dụng trigger, phân tích AST, theo dõi taint, chữ ký YARA, đặc quyền tối thiểu MCP và nhiễm độc tool MCP. Phân tích tĩnh nhanh + phân tích ngữ nghĩa bằng LLM (tùy chọn), tra cứu CVE trực tiếp từ OSV.dev, chấm điểm rủi ro 0–100, xuất báo cáo terminal/JSON/Markdown/SARIF, quét được repo Git, URL, file zip, thư mục hoặc file lẻ; có cả skill skill-inspector đi kèm. Apache 2.0.

## Điểm mạnh

- 71 mẫu trên 17 nhóm rủi ro, bao quát từ prompt injection tới nhiễm độc tool MCP
- Chấm điểm rủi ro 0–100 kèm mức nghiêm trọng và khuyến nghị, dùng được làm cổng chặn trước khi cài skill
- Quét được cả repo, URL, zip và thư mục; xuất JSON/SARIF để gắn vào CI/CD

## Từ khóa

bảo mật, quét skill, prompt injection, supply chain, mcp, rủi ro

## Đầu vào

Đường dẫn skill cần quét: thư mục, file SKILL.md, repo Git, URL hoặc file zip

## Đầu ra

Báo cáo rủi ro 0–100 kèm danh sách phát hiện theo mức nghiêm trọng (terminal/JSON/Markdown/SARIF)

## Giới hạn

Phân tích LLM cần API key và có thể tốn phí; quét tĩnh có thể báo sai (false positive) — có cơ chế baseline để bỏ qua các phát hiện đã chấp nhận

## Nguồn

https://github.com/NVIDIA/SkillSpector

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (70611 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
