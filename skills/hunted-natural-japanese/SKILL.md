---
name: "natural-japanese"
description: "Skill tiếng Nhật của coji (repo natural-japanese, giấy phép MIT, hơn 2.000 star) sửa văn bản tiếng Nhật công việc do AI viết — biên bản, báo cáo, bài kỹ thuật, mô tả PR — cho đọc tự nhiên, dễ hiểu: đổ…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Sửa văn bản tiếng Nhật do AI viết cho tự nhiên, không thêm sự thật hay mức chắc chắn mới"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/coji/natural-japanese"
origin: "hunted"
market_id: 403
vault_id: 403
status: live
has_content: true
---

# natural-japanese

## Công việc

Sửa văn bản tiếng Nhật do AI viết cho tự nhiên, không thêm sự thật hay mức chắc chắn mới

## Mô tả

Skill tiếng Nhật của coji (repo natural-japanese, giấy phép MIT, hơn 2.000 star) sửa văn bản tiếng Nhật công việc do AI viết — biên bản, báo cáo, bài kỹ thuật, mô tả PR — cho đọc tự nhiên, dễ hiểu: đổi cách nói khó hiểu thành lời thường dùng, không thêm sự thật, số liệu, ý kiến hay mức độ chắc chắn mà bản gốc không có, và không lạm dụng in đậm. Cơ chế: script lint.py dùng phân tích hình thái (sudachipy) để phát hiện chỗ nghi ngờ, còn việc có sửa hay không do agent xem ngữ cảnh quyết định; lệnh /natural-japanese score cho điểm tự nhiên 0–100 kèm lý do mà không sửa. Theo tác giả, số chỗ in đậm giảm từ 551 chỗ (25 bản không skill) xuống 13 chỗ (25 bản có skill).

## Điểm mạnh

- Không thêm sự thật hay mức chắc chắn mới — đối chiếu bản sửa với bản gốc để kiểm tra
- Máy phát hiện chỗ nghi ngờ bằng sudachipy, agent quyết định theo ngữ cảnh, tránh sửa máy móc
- Có chế độ chỉ chấm điểm tự nhiên 0–100 mà không sửa, tiện kiểm tra nhanh

## Từ khóa

natural-japanese, tiếng Nhật, sửa văn bản, AIっぽい, sudachipy, viết tự nhiên

## Đầu vào

Bản nháp tiếng Nhật (biên bản, báo cáo, bài kỹ thuật, mô tả PR…)

## Đầu ra

Văn bản tiếng Nhật đã sửa cho tự nhiên, hoặc điểm tự nhiên 0–100 kèm lý do

## Giới hạn

Bỏ sót khoảng một nửa các cụm dịch từng từ từ tiếng Anh và cách nói gom động từ thành danh từ; giảm effort (lượng suy luận) của model sẽ làm tăng số chỗ bỏ sót.

## Nguồn

https://github.com/coji/natural-japanese

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6331 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
