---
name: "Attio Automation"
description: "Skill quản lý workspace CRM Attio qua tích hợp Composio MCP: tìm mờ (fuzzy search) người, công ty, deal theo tên/domain/email/điện thoại; truy vấn nâng cao với bộ lọc phía server, sắp xếp và điều kiện…"
group: "Tự động hoá ứng dụng"
field: "CRM & Bán hàng"
job: "Quản lý CRM Attio bằng ngôn ngữ tự nhiên: tìm kiếm, truy vấn có lọc, xem ghi chú và khám phá cấu trúc dữ liệu quan hệ khách hàng."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/attio-automation/SKILL.md"
origin: "hunted"
market_id: 271
vault_id: 203
status: live
has_content: true
---

# Attio Automation

## Công việc

Quản lý CRM Attio bằng ngôn ngữ tự nhiên: tìm kiếm, truy vấn có lọc, xem ghi chú và khám phá cấu trúc dữ liệu quan hệ khách hàng.

## Mô tả

Skill quản lý workspace CRM Attio qua tích hợp Composio MCP: tìm mờ (fuzzy search) người, công ty, deal theo tên/domain/email/điện thoại; truy vấn nâng cao với bộ lọc phía server, sắp xếp và điều kiện phức tạp ($eq, $contains, $gte, $and, $or); tìm bản ghi theo ID hoặc thuộc tính; liệt kê ghi chú; khám phá schema object và attribute của workspace.

## Điểm mạnh

- Truy vấn lọc phía server mạnh hơn tìm mờ, hỗ trợ toán tử phức tạp và sắp xếp
- Tìm kiếm mờ xuyên object (people, companies, deals) chỉ bằng một chuỗi truy vấn tối đa 256 ký tự
- Khám phá được attribute/slug tuỳ chỉnh của từng workspace trước khi truy vấn

## Từ khóa

Attio, CRM, quản lý quan hệ khách hàng, tìm kiếm, truy vấn, ghi chú

## Đầu vào

Chuỗi tìm kiếm (tối đa 256 ký tự), object slug (people/companies/deals), bộ lọc Attio (filter object), record ID (UUID) hoặc thuộc tính duy nhất, parent object/record để lọc ghi chú.

## Đầu ra

Bản ghi người/công ty/deal phù hợp, danh sách ghi chú, schema object và định nghĩa attribute, danh sách bản ghi theo thứ tự tạo.

## Giới hạn

Cần tài khoản Attio (xác thực OAuth) qua Composio; mọi so sánh thời gian phải dùng chuỗi ISO8601, timestamp Unix gây lỗi; thuộc tính name phải lồng first_name/last_name dưới name; email_addresses không hỗ trợ toán tử $not_empty; "lists" không phải object type; kết quả tìm mờ chỉ nhất quán cuối (eventually consistent) — cần dữ liệu mới nhất thì dùng truy vấn; attribute tuỳ chỉnh khác nhau theo workspace; truy vấn tối đa 500 bản ghi, tìm theo ID tối đa 1000.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/attio-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6272 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
