---
name: "requesting-code-review"
description: "Gửi sub-agent review code để bắt lỗi trước khi lỗi lan rộng: lấy SHA git đầu–cuối, giao cho reviewer mẫu code-reviewer.md với mô tả ngắn, yêu cầu và phạm vi commit — không đưa toàn bộ lịch sử phiên là…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Nhờ sub-agent review code trước khi merge"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md"
origin: "hunted"
market_id: 218
vault_id: 258
status: live
has_content: true
---

# requesting-code-review

## Công việc

Nhờ sub-agent review code trước khi merge

## Mô tả

Gửi sub-agent review code để bắt lỗi trước khi lỗi lan rộng: lấy SHA git đầu–cuối, giao cho reviewer mẫu code-reviewer.md với mô tả ngắn, yêu cầu và phạm vi commit — không đưa toàn bộ lịch sử phiên làm việc. Bắt buộc sau mỗi task trong phát triển bằng sub-agent, sau tính năng lớn và trước khi merge; xử lý phản hồi theo mức Critical/Important/Minor.

## Điểm mạnh

- Reviewer chỉ nhận đúng bối cảnh cần thiết, không tốn bối cảnh phiên chính
- Quy tắc review sớm, review thường xuyên — sau mỗi task, không đợi cuối nhánh
- Phân loại phản hồi rõ ràng: Critical sửa ngay, Important sửa trước khi tiếp tục, Minor ghi lại sau

## Từ khóa

code review, review code, sub-agent, merge, chất lượng code

## Đầu vào

Thay đổi code cần review (SHA git đầu–cuối) + mô tả và yêu cầu

## Đầu ra

Báo cáo review phân loại Critical/Important/Minor kèm đánh giá có nên tiếp tục

## Giới hạn

Cần công cụ sub-agent; reviewer chỉ thấy diff và bối cảnh được giao, không thấy toàn bộ phiên làm việc

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2969 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
