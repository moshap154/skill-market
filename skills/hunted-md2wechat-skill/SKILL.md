---
name: "md2wechat-skill"
description: "CLI hướng tới AI Agent để sáng tạo và phát hành bài trên tài khoản công khai WeChat (微信公众号): viết Markdown, chuyển thành HTML排版 cho WeChat, tạo ảnh bìa và ảnh minh hoạ, xem trước kiểm tra rồi tạo bản …"
group: "Tự động hoá ứng dụng"
field: "Mạng xã hội"
job: "Viết Markdown rồi trình bày thành bài WeChat, tạo bìa, đẩy thẳng vào hộp nháp"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/geekjourneyx/md2wechat-skill"
origin: "hunted"
market_id: 374
vault_id: 63
status: live
has_content: true
---

# md2wechat-skill

## Công việc

Viết Markdown rồi trình bày thành bài WeChat, tạo bìa, đẩy thẳng vào hộp nháp

## Mô tả

CLI hướng tới AI Agent để sáng tạo và phát hành bài trên tài khoản công khai WeChat (微信公众号): viết Markdown, chuyển thành HTML排版 cho WeChat, tạo ảnh bìa và ảnh minh hoạ, xem trước kiểm tra rồi tạo bản nháp trong hộp nháp; hỗ trợ 48 chủ đề chuyên nghiệp và 59 cú pháp排版 cao cấp ở chế độ API, các lệnh discovery cho Agent (capabilities, doctor, inspect, themes, layout), lệnh humanize gọt văn AI, gợi ý tiêu đề, và chuẩn bị bản nháp đa nền tảng (Zhihu, CSDN, Toutiao) qua trình duyệt đã đăng nhập. Hỗ trợ Claude Code, Codex, Kimi Work, Hermes Agent, OpenClaw.

## Điểm mạnh

- Chuỗi trọn gói Markdown → trình bày → bìa → kiểm tra → hộp nháp WeChat
- 48 chủ đề và 59 cú pháp trình bày cao cấp, có kiểm tra readiness trước khi phát hành
- Có lệnh discovery cho Agent và chế độ AI miễn phí để tự xử lý tiếp

## Từ khóa

md2wechat-skill, 微信公众号, WeChat, Markdown, 公众号排版, 排版, 草稿箱

## Đầu vào

Bài viết Markdown (và ảnh bìa nếu có) cần đăng lên tài khoản công khai WeChat

## Đầu ra

Bài HTML đã trình bày cho WeChat, ảnh bìa/minh hoạ, và bản nháp trong hộp nháp WeChat

## Giới hạn

Chế độ API chuyên nghiệp là dịch vụ trả phí, cần API Key — chế độ AI miễn phí chỉ tạo prompt để LLM khác xử lý tiếp, không trả HTML cuối; tạo nháp cần tài khoản WeChat và cấu hình credential/IP whitelist; giấy phép Source Available — dùng thương mại/SaaS cần xin phép.

## Nguồn

https://github.com/geekjourneyx/md2wechat-skill

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (10274 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
