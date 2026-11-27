---
name: "Ahrefs Automation"
description: "Skill chạy Ahrefs SEO analytics trực tiếp từ Claude Code qua tích hợp Composio (Rube MCP): phân tích hồ sơ backlink, nghiên cứu từ khoá, theo dõi lịch sử chỉ số domain (Domain Rating), kiểm tra từ kho…"
group: "Kinh doanh & Marketing"
field: "SEO & Tăng trưởng"
job: "Tự động hoá nghiên cứu SEO bằng Ahrefs ngay trong Claude Code: phân tích backlink, nghiên cứu từ khoá, theo dõi chỉ số domain và kiểm tra thứ hạng organic."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/ahrefs-automation/SKILL.md"
origin: "hunted"
market_id: 267
vault_id: 356
status: live
has_content: true
---

# Ahrefs Automation

## Công việc

Tự động hoá nghiên cứu SEO bằng Ahrefs ngay trong Claude Code: phân tích backlink, nghiên cứu từ khoá, theo dõi chỉ số domain và kiểm tra thứ hạng organic.

## Mô tả

Skill chạy Ahrefs SEO analytics trực tiếp từ Claude Code qua tích hợp Composio (Rube MCP): phân tích hồ sơ backlink, nghiên cứu từ khoá, theo dõi lịch sử chỉ số domain (Domain Rating), kiểm tra từ khoá organic và phân tích hàng loạt tối đa 100 URL/domain cùng lúc; hầu hết tool cần tham số target (domain/URL), mã quốc gia ISO và ngày dạng YYYY-MM-DD, nhiều tool bắt buộc chọn cột select.

## Điểm mạnh

- Phân tích hàng loạt tới 100 URL để so sánh đối thủ cùng lúc
- Theo dõi lịch sử Domain Rating và chỉ số SEO theo ngày/tuần/tháng để phân tích xu hướng
- Lọc backlink mạnh mẽ theo dofollow, anchor text, domain rating nguồn

## Từ khóa

Ahrefs, SEO, backlink, keyword research, Domain Rating, phân tích đối thủ

## Đầu vào

Domain hoặc URL cần phân tích (target), mã quốc gia ISO, ngày (YYYY-MM-DD), danh sách từ khoá, tối đa 100 URL cho phân tích hàng loạt.

## Đầu ra

Chỉ số Site Explorer (backlink, referring domain, traffic ước tính), danh sách backlink kèm anchor text, chỉ số từ khoá (volume, difficulty, CPC), thứ hạng organic và lịch sử Domain Rating.

## Giới hạn

Cần tài khoản Ahrefs đã kết nối qua Composio/Rube MCP; chi phí API tính theo unit và khác nhau theo cột (các cột traffic, difficulty tốn nhiều unit); phân tích hàng loạt giới hạn 100 target/lần; tham số select bắt buộc với hầu hết tool; biểu thức lọc where dùng cú pháp riêng của Ahrefs, không phải SQL chuẩn.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/ahrefs-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (7858 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
