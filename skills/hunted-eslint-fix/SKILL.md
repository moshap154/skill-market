---
name: "eslint-fix"
description: "Skill sửa lỗi ESLint trong repo claude-code-skills-zh: dùng công cụ mà dự án đã khóa phiên bản (项目锁定工具) để kiểm tra trước (预检), chỉ sửa trong phạm vi được phép (限范围修复) rồi chạy lại để kiểm chứng (复验),…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Sửa lỗi ESLint trong phạm vi cho phép, có kiểm tra trước và kiểm chứng sau"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/eslint-fix"
origin: "hunted"
market_id: 492
vault_id: 490
status: live
has_content: true
---

# eslint-fix

## Công việc

Sửa lỗi ESLint trong phạm vi cho phép, có kiểm tra trước và kiểm chứng sau

## Mô tả

Skill sửa lỗi ESLint trong repo claude-code-skills-zh: dùng công cụ mà dự án đã khóa phiên bản (项目锁定工具) để kiểm tra trước (预检), chỉ sửa trong phạm vi được phép (限范围修复) rồi chạy lại để kiểm chứng (复验), giúp dọn lỗi lint mà không sửa lan man sang code khác.

## Điểm mạnh

- Có bước kiểm tra trước (预检) bằng đúng tool của dự án nên sửa đúng chuẩn lint đang dùng
- Sửa trong phạm vi giới hạn rồi kiểm chứng lại (复验), hạn chế sửa lan và hỏng code

## Từ khóa

eslint-fix, ESLint, sửa lỗi lint, 代码检查, lint

## Đầu vào

Dự án JavaScript/TypeScript có lỗi ESLint và phạm vi được phép sửa

## Đầu ra

Code đã sửa lỗi ESLint trong phạm vi cho phép, kèm kết quả kiểm chứng lại

## Giới hạn

Chỉ sửa trong phạm vi được phép và theo quy tắc ESLint của dự án; lỗi ngoài phạm vi hoặc do cấu hình lint sai thì không tự sửa; cần chạy test lại sau khi sửa

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/eslint-fix

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1741 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
