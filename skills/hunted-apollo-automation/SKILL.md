---
name: "Apollo Automation"
description: "Skill tăng tốc prospecting bán hàng với Apollo.io: tìm công ty theo tên, vị trí, quy mô nhân sự, ngành nghề; tìm người theo chức danh, cấp bậc, vị trí; làm giàu (enrich) dữ liệu liên hệ gồm email, số …"
group: "Tự động hoá ứng dụng"
field: "CRM & Bán hàng"
job: "Tự động hoá tìm kiếm và làm giàu dữ liệu khách hàng tiềm năng (lead) bằng Apollo.io qua lệnh ngôn ngữ tự nhiên."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/apollo-automation/SKILL.md"
origin: "hunted"
market_id: 268
vault_id: 362
status: live
has_content: true
---

# Apollo Automation

## Công việc

Tự động hoá tìm kiếm và làm giàu dữ liệu khách hàng tiềm năng (lead) bằng Apollo.io qua lệnh ngôn ngữ tự nhiên.

## Mô tả

Skill tăng tốc prospecting bán hàng với Apollo.io: tìm công ty theo tên, vị trí, quy mô nhân sự, ngành nghề; tìm người theo chức danh, cấp bậc, vị trí; làm giàu (enrich) dữ liệu liên hệ gồm email, số điện thoại, LinkedIn; quản lý các giai đoạn (stage) của liên hệ trong pipeline; tạo và tìm kiếm liên hệ đã lưu — tất cả qua tích hợp Composio MCP.

## Điểm mạnh

- Tìm và làm giàu hàng loạt tối đa 10 người/lần
- Lọc chi tiết theo chức danh, cấp bậc, trạng thái email (verified/likely to engage)
- Quản lý pipeline ngay trong Apollo bằng cách chuyển liên hệ qua các stage

## Từ khóa

Apollo.io, lead generation, prospecting, sales, enrich, tìm khách hàng tiềm năng

## Đầu vào

Tiêu chí tìm công ty (tên, vị trí, số nhân viên, ngành), tiêu chí tìm người (chức danh, cấp bậc), email/LinkedIn URL/tên + công ty để enrich, ID liên hệ và stage để cập nhật pipeline.

## Đầu ra

Danh sách công ty và người phù hợp tiêu chí, dữ liệu liên hệ đã làm giàu (email, điện thoại, LinkedIn, thông tin công ty), danh sách stage và trạng thái pipeline đã cập nhật.

## Giới hạn

Cần tài khoản Apollo.io (xác thực API key) qua Composio; kết quả tìm người có thể bị che (chỉ cờ has_email/has_direct_phone) — phải enrich mới có đầy đủ; enrich hàng loạt tối đa 10 người/lần; tạo liên hệ không tự khử trùng; lấy số điện thoại cần webhook_url; email cá nhân có thể tốn thêm credit; lỗi HTTP 403 nghĩa là lỗi cấu hình/khoá API hoặc gói, không nên thử lại.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/apollo-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (7072 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
