---
name: "verification-before-completion"
description: "Luật kiểm chứng trước khi tuyên bố hoàn thành: trước bất kỳ khẳng định 'xong', 'đã sửa', 'test đã qua' nào, phải xác định lệnh kiểm chứng, chạy lại đầy đủ, đọc toàn bộ kết quả và mã thoát rồi mới được…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Kiểm chứng bằng lệnh thật trước khi tuyên bố xong việc"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md"
origin: "hunted"
market_id: 215
vault_id: 371
status: live
has_content: true
---

# verification-before-completion

## Công việc

Kiểm chứng bằng lệnh thật trước khi tuyên bố xong việc

## Mô tả

Luật kiểm chứng trước khi tuyên bố hoàn thành: trước bất kỳ khẳng định 'xong', 'đã sửa', 'test đã qua' nào, phải xác định lệnh kiểm chứng, chạy lại đầy đủ, đọc toàn bộ kết quả và mã thoát rồi mới được tuyên bố kèm bằng chứng. Áp dụng cho test, lint, build, sửa lỗi, kiểm tra hồi quy và cả trước khi commit hay tạo PR.

## Điểm mạnh

- Bằng chứng trước khẳng định — không còn 'chắc là được' hay 'trông có vẻ đúng'
- Có bảng đối chiếu cụ thể cho từng loại tuyên bố: test qua, lint sạch, build thành công, lỗi đã sửa
- Ngăn cả việc tin báo cáo thành công của sub-agent mà không tự kiểm tra lại

## Từ khóa

kiểm chứng, xác minh, test, hoàn thành, bằng chứng, chất lượng

## Đầu vào

Công việc sắp tuyên bố hoàn thành + lệnh kiểm chứng tương ứng

## Đầu ra

Tuyên bố hoàn thành kèm bằng chứng từ kết quả lệnh vừa chạy, hoặc trạng thái thực tế nếu chưa đạt

## Giới hạn

Chỉ áp dụng cho tuyên bố về trạng thái công việc, không thay việc sửa lỗi; cần chạy lệnh kiểm chứng thật trong phiên hiện tại

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3597 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
