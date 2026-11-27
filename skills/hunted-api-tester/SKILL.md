---
name: "api-tester"
description: "Skill gốc của kho Claude Code Skills 中文精选集: dựa trên hợp đồng API thật (OpenAPI hoặc định nghĩa route) để tạo test API và chạy kiểm chứng, nhưng chỉ làm sau khi đã xác nhận môi trường test và quyền tr…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Tạo và kiểm chứng test API theo đúng hợp đồng thật"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/api-tester"
origin: "hunted"
market_id: 366
vault_id: 195
status: live
has_content: true
---

# api-tester

## Công việc

Tạo và kiểm chứng test API theo đúng hợp đồng thật

## Mô tả

Skill gốc của kho Claude Code Skills 中文精选集: dựa trên hợp đồng API thật (OpenAPI hoặc định nghĩa route) để tạo test API và chạy kiểm chứng, nhưng chỉ làm sau khi đã xác nhận môi trường test và quyền truy cập. Một trong 5 skill gốc được kho khuyên cài đầu tiên.

## Điểm mạnh

- Test bám đúng contract thật, không bịa endpoint hay dữ liệu
- Có bước xác nhận môi trường và quyền trước khi chạy test
- Tạo test và chạy kiểm chứng trong cùng một luồng

## Từ khóa

api-tester, API测试, test API, kiểm thử API, OpenAPI, contract

## Đầu vào

Hợp đồng API (OpenAPI/route) và môi trường test đã xác nhận quyền truy cập

## Đầu ra

Bộ test API theo contract kèm kết quả chạy kiểm chứng

## Giới hạn

Chỉ chạy khi môi trường test và quyền đã được xác nhận; không dùng để test trên môi trường production; cần công cụ hỗ trợ SKILL.md.

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/api-tester

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2453 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
