---
name: "env-manager"
description: "Skill quản lý biến môi trường (环境变量管理) trong repo claude-code-skills-zh: quét file .env, kiểm tra (校验) các biến, rà soát an toàn (安全检查) rồi sinh file mẫu (生成模板), dùng khi dự án có nhiều biến môi trườn…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Quản lý biến môi trường: quét file .env, kiểm tra, rà an toàn và sinh mẫu"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/env-manager"
origin: "hunted"
market_id: 496
vault_id: 489
status: live
has_content: true
---

# env-manager

## Công việc

Quản lý biến môi trường: quét file .env, kiểm tra, rà an toàn và sinh mẫu

## Mô tả

Skill quản lý biến môi trường (环境变量管理) trong repo claude-code-skills-zh: quét file .env, kiểm tra (校验) các biến, rà soát an toàn (安全检查) rồi sinh file mẫu (生成模板), dùng khi dự án có nhiều biến môi trường và cần biết biến nào thiếu, sai hay đang lộ secret.

## Điểm mạnh

- Quét hết file .env để thấy biến thiếu/sai thay vì dò tay
- Có bước rà an toàn và sinh file mẫu để người mới vào dự án cấu hình nhanh

## Từ khóa

env-manager, .env, biến môi trường, 环境变量, secret

## Đầu vào

File .env và cấu hình môi trường của dự án

## Đầu ra

Kết quả kiểm tra biến môi trường, cảnh báo an toàn và file .env mẫu

## Giới hạn

Chỉ kiểm tra theo nội dung file .env được cung cấp; không tự sửa giá trị secret thật; file .env chứa secret thật tuyệt đối không commit lên Git

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/env-manager

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2431 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
