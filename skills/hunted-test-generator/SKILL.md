---
name: "test-generator"
description: "Skill sinh test tự động trong repo claude-code-skills-zh: dựa trên contract thật của code (真实代码契约) để sinh unit test hoặc integration test rồi chạy thử, giúp phủ test cho code mới hoặc code chưa có te…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Sinh và chạy unit test / integration test theo đúng contract của code thật"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/test-generator"
origin: "hunted"
market_id: 494
vault_id: 510
status: live
has_content: true
---

# test-generator

## Công việc

Sinh và chạy unit test / integration test theo đúng contract của code thật

## Mô tả

Skill sinh test tự động trong repo claude-code-skills-zh: dựa trên contract thật của code (真实代码契约) để sinh unit test hoặc integration test rồi chạy thử, giúp phủ test cho code mới hoặc code chưa có test mà không viết tay từng ca.

## Điểm mạnh

- Test sinh theo contract thật của code nên bám đúng hành vi cần kiểm
- Sinh xong chạy luôn để biết test đỗ hay trượt ngay

## Từ khóa

test-generator, unit test, integration test, 生成测试, kiểm thử

## Đầu vào

Code cần viết test và contract/hành vi mong đợi của nó

## Đầu ra

Test case (unit/integration) đã sinh và kết quả chạy test

## Giới hạn

Test chỉ đúng tới mức contract trích từ code là đúng; code có bug sẵn thì test sinh ra có thể khóa luôn hành vi sai; cần người xem lại ca test quan trọng

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/test-generator

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1529 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
