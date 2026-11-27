---
name: "adversarial-review"
description: "Skill tiếng Nhật của itoken-lab-jp, đi cặp với cold-read: adversarial-review soi lỗi của thay đổi (code, thiết kế, tài liệu). Agent khác, không biết ý đồ người làm, chỉ nhận diff và điều kiện phải giữ…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Cho agent khác soi lỗi trong thay đổi code mà không biết ý đồ tác giả"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/adversarial-review.md"
origin: "hunted"
market_id: 522
vault_id: 519
status: live
has_content: true
---

# adversarial-review

## Công việc

Cho agent khác soi lỗi trong thay đổi code mà không biết ý đồ tác giả

## Mô tả

Skill tiếng Nhật của itoken-lab-jp, đi cặp với cold-read: adversarial-review soi lỗi của thay đổi (code, thiết kế, tài liệu). Agent khác, không biết ý đồ người làm, chỉ nhận diff và điều kiện phải giữ để tìm lỗi. Mỗi góp ý viết rõ ai, khi nào, khổ vì cái gì, chia Important (sửa trước merge) và Nit (không chặn merge); Nit cần đổi logic thì chuyển sang Issue, dừng vòng sửa khi Important về 0.

## Điểm mạnh

- Tách người review khỏi ý đồ tác giả, soi được lỗi do định kiến lúc làm
- Chia Important/Nit rõ ràng, tránh vòng sửa vô tận
- Góp ý gắn với tình huống người dùng gặp phải

## Từ khóa

adversarial-review, code review, soi lỗi, review đối kháng, pull request

## Đầu vào

Diff hoặc PR cần review, các điều kiện phải giữ nguyên

## Đầu ra

Báo cáo lỗi chia Important/Nit, mỗi lỗi ghi rõ ai gặp, khi nào, khổ vì cái gì

## Giới hạn

Cần agent hỗ trợ subagent; người review không có bối cảnh đầy đủ của dự án

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/adversarial-review.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2018 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
