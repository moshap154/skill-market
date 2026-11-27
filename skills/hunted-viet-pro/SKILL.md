---
name: "viet-pro"
description: "Viết Pro (viet-pro v6.2.0) là skill/plugin giúp trợ lý AI viết và biên tập tiếng Việt tự nhiên, đúng dữ kiện, đúng chuẩn từng kênh (blog, SEO, LinkedIn, Facebook, Zalo, newsletter, thread X, kịch bản …"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Viết và biên tập tiếng Việt tự nhiên, giữ đúng dữ kiện, đúng chuẩn từng kênh đăng bài"
region: "Việt Nam"
language: "vi"
source_url: "https://github.com/abm-dungtq/viet-pro-codex"
origin: "hunted"
market_id: 276
vault_id: 379
status: live
has_content: true
---

# viet-pro

## Công việc

Viết và biên tập tiếng Việt tự nhiên, giữ đúng dữ kiện, đúng chuẩn từng kênh đăng bài

## Mô tả

Viết Pro (viet-pro v6.2.0) là skill/plugin giúp trợ lý AI viết và biên tập tiếng Việt tự nhiên, đúng dữ kiện, đúng chuẩn từng kênh (blog, SEO, LinkedIn, Facebook, Zalo, newsletter, thread X, kịch bản video). Chạy trên Claude Code, OpenAI Codex, Google Antigravity và AgentKit, kiến trúc CLI-first với cổng kiểm duyệt một lệnh 'viet-pro gate' kèm tem băm SHA-256, chấm điểm dấu hiệu AI 0–100, kiểm tra On-Page SEO & GEO, lọc 46 nhóm lỗi diễn đạt tiếng Việt và đối chiếu dữ kiện hai chiều để chặn rớt số liệu, đổi ngày tháng hay đảo cực tính quanh con số; có Runtime Hooks chặn xuất bản bản thảo chưa qua cổng.

## Điểm mạnh

- Giữ nguyên số liệu, ngày tháng và trích dẫn gốc khi biên tập — chặn đảo cực tính như 'giảm tối đa' thành 'giảm tối thiểu'
- Cổng kiểm duyệt 'viet-pro gate' một lệnh, cấp tem SHA-256 cho bản thảo đã qua kiểm tra
- Hỗ trợ 12 hồ sơ kênh xuất bản, SEO/GEO, 8 thể loại công việc và cả sáng tác lời bài hát cho Suno AI

## Từ khóa

viet-pro, Viết Pro, viết tiếng Việt, biên tập, humanize, kiểm tra dữ kiện

## Đầu vào

Bản thảo tiếng Việt cần viết/biên tập; yêu cầu về kênh đăng (blog, Facebook, Zalo, LinkedIn...); dữ kiện gốc để đối chiếu (số liệu, ngày tháng, trích dẫn)

## Đầu ra

Bản thảo tiếng Việt đã biên tập, tự nhiên như người Việt viết; báo cáo cổng gate (đạt/không đạt, lỗi dữ kiện, điểm AI 0–100); tem SHA-256 xác nhận bản thảo đã qua kiểm tra

## Giới hạn

Cần cài CLI viet-pro và chạy trên Claude Code, Codex, Antigravity hoặc AgentKit; chấm nhịp biên tập cần khóa GEMINI_API_KEY, nếu thiếu sẽ bỏ qua bước này; skill không phải công cụ phát hiện văn bản AI — chỉ giúp bài viết tự nhiên hơn.

## Nguồn

https://github.com/abm-dungtq/viet-pro-codex

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (40641 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
