---
name: "Apify Automation"
description: "Skill chạy các Actor thu thập dữ liệu web của Apify trực tiếp từ Claude Code: chạy Actor đồng bộ (lấy kết quả ngay) hoặc bất đồng bộ cho tác vụ dài, lấy dữ liệu có cấu trúc từ dataset, tạo task tái sử…"
group: "Tự động hoá ứng dụng"
field: "Nền tảng tự động hoá"
job: "Tự động hoá thu thập dữ liệu web (web scraping) bằng cách chạy các Actor của Apify và quản lý dataset ngay trong Claude Code."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/apify-automation/SKILL.md"
origin: "hunted"
market_id: 269
vault_id: 361
status: live
has_content: true
---

# Apify Automation

## Công việc

Tự động hoá thu thập dữ liệu web (web scraping) bằng cách chạy các Actor của Apify và quản lý dataset ngay trong Claude Code.

## Mô tả

Skill chạy các Actor thu thập dữ liệu web của Apify trực tiếp từ Claude Code: chạy Actor đồng bộ (lấy kết quả ngay) hoặc bất đồng bộ cho tác vụ dài, lấy dữ liệu có cấu trúc từ dataset, tạo task tái sử dụng với input preset, xem chi tiết Actor, liệt kê các lần chạy và đọc log — qua tích hợp Composio.

## Điểm mạnh

- Chạy đồng bộ lấy kết quả ngay hoặc bất đồng bộ cho job dài (chờ tối đa 300 giây ở chế độ đồng bộ)
- Định dạng kết quả linh hoạt JSON/CSV/JSONL/XLSX/XML
- Tạo task tái sử dụng cho các job thu thập định kỳ

## Từ khóa

Apify, web scraping, Actor, dataset, thu thập dữ liệu web, crawler

## Đầu vào

ID Actor (dạng username/actor-name), input JSON theo đúng schema của từng Actor, datasetId để lấy kết quả, giới hạn/offset phân trang, định dạng xuất.

## Đầu ra

Dữ liệu có cấu trúc từ dataset (JSON/CSV/XLSX…), metadata Actor và input schema, danh sách lần chạy, log thực thi, task đã tạo.

## Giới hạn

Cần tài khoản Apify đã kết nối qua Composio; mỗi Actor có schema input riêng — dùng sai tên trường sẽ bị từ chối, phải tra trang Actor trên apify.com/store; lấy dataset tối đa 1000 item/lần gọi; chạy đồng bộ chờ tối đa 300 giây; dataset lớn tốn chi phí và có thể gây timeout — nên lấy theo từng phần vừa phải.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/apify-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6822 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
