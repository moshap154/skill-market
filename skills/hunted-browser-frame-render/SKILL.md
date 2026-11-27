---
name: "browser-frame-render"
description: "Skill tiếng Nhật của tomotto1296 (repo ai-animation-skills) render animation trình duyệt (Canvas/WebGL) từng khung hình một cách xác định (deterministic frame-by-frame) bằng Playwright, kèm danh sách …"
group: "Sáng tạo & Media"
field: "Video & Hoạt hình"
job: "Render animation trình duyệt từng khung hình một cách xác định bằng Playwright"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/tomotto1296/ai-animation-skills/blob/main/skills/browser-frame-render"
origin: "hunted"
market_id: 400
vault_id: 400
status: live
has_content: true
---

# browser-frame-render

## Công việc

Render animation trình duyệt từng khung hình một cách xác định bằng Playwright

## Mô tả

Skill tiếng Nhật của tomotto1296 (repo ai-animation-skills) render animation trình duyệt (Canvas/WebGL) từng khung hình một cách xác định (deterministic frame-by-frame) bằng Playwright, kèm danh sách lỗi thường gặp (pitfalls) và mẫu trang (page template). Cùng bộ với animation-qc-selfreview: render xong thì đưa qua QC tự động trước khi gọi là xong. Thân skill viết bằng tiếng Nhật (phần description bằng tiếng Anh); lần đầu dùng, skill bảo Claude chạy scripts/doctor.py để kiểm tra ffmpeg, Node.js, trình duyệt và cài playwright-core.

## Điểm mạnh

- Render từng khung hình xác định nên kết quả lặp lại được, không phụ thuộc tốc độ máy
- Kèm danh sách lỗi thường gặp và mẫu trang, tránh lỗi render hay mắc
- Nối thẳng vào bước QC tự động của cùng bộ skill để kiểm tra trước khi giao

## Từ khóa

browser-frame-render, Playwright, Canvas, WebGL, render, animation trình duyệt

## Đầu vào

Trang animation trình duyệt (Canvas/WebGL) cần render

## Đầu ra

Các khung hình đã render (và video ghép từ đó)

## Giới hạn

Cần Node.js 18+, Microsoft Edge hoặc Google Chrome; playwright-core do doctor.py cài; script viết trên Windows 11, có thể lệch trên hệ khác.

## Nguồn

https://github.com/tomotto1296/ai-animation-skills/blob/main/skills/browser-frame-render

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6424 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
