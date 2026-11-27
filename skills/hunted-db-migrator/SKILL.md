---
name: "db-migrator"
description: "Skill hỗ trợ migration cơ sở dữ liệu (数据库迁移助手) trong repo claude-code-skills-zh: so sánh schema (Schema diff) giữa các phiên bản cơ sở dữ liệu rồi sinh script migration để đồng bộ, dùng khi thay đổi c…"
group: "Tự động hoá ứng dụng"
field: "Bảng tính & CSDL"
job: "Hỗ trợ migration cơ sở dữ liệu bằng schema diff và script migration"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/db-migrator"
origin: "hunted"
market_id: 489
vault_id: 486
status: live
has_content: true
---

# db-migrator

## Công việc

Hỗ trợ migration cơ sở dữ liệu bằng schema diff và script migration

## Mô tả

Skill hỗ trợ migration cơ sở dữ liệu (数据库迁移助手) trong repo claude-code-skills-zh: so sánh schema (Schema diff) giữa các phiên bản cơ sở dữ liệu rồi sinh script migration để đồng bộ, dùng khi thay đổi cấu trúc bảng, cột hay ràng buộc.

## Điểm mạnh

- So sánh schema để thấy đúng chỗ khác nhau trước khi viết migration
- Sinh sẵn script migration, khỏi viết tay từng câu lệnh đổi cấu trúc

## Từ khóa

db-migrator, migration, Schema diff, cơ sở dữ liệu, 数据库迁移

## Đầu vào

Schema cơ sở dữ liệu hiện tại và schema đích (hoặc mô tả thay đổi cần làm)

## Đầu ra

Script migration đồng bộ schema

## Giới hạn

Script sinh ra cần xem lại và thử trên môi trường test trước khi chạy lên dữ liệu thật; migration sai có thể làm mất hoặc hỏng dữ liệu

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/db-migrator

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2705 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
