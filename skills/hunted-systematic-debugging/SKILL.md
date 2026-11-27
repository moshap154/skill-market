---
name: "systematic-debugging"
description: "Quy trình gỡ lỗi 4 giai đoạn bắt buộc cho mọi lỗi, test hỏng hay hành vi bất ngờ: (1) điều tra nguyên nhân gốc — đọc kỹ lỗi, tái hiện, xem thay đổi gần đây, thu thập bằng chứng ở từng ranh giới hệ thố…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Gỡ lỗi có hệ thống: tìm nguyên nhân gốc trước khi sửa"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md"
origin: "hunted"
market_id: 214
vault_id: 278
status: live
has_content: true
---

# systematic-debugging

## Công việc

Gỡ lỗi có hệ thống: tìm nguyên nhân gốc trước khi sửa

## Mô tả

Quy trình gỡ lỗi 4 giai đoạn bắt buộc cho mọi lỗi, test hỏng hay hành vi bất ngờ: (1) điều tra nguyên nhân gốc — đọc kỹ lỗi, tái hiện, xem thay đổi gần đây, thu thập bằng chứng ở từng ranh giới hệ thống; (2) phân tích mẫu — so với code đang chạy tốt; (3) đặt một giả thuyết và kiểm tra với thay đổi nhỏ nhất; (4) viết test lỗi rồi mới sửa đúng nguyên nhân. Luật sắt: không sửa khi chưa điều tra nguyên nhân; sau 3 lần sửa thất bại phải xem lại kiến trúc.

## Điểm mạnh

- Cấm sửa theo cảm tính — mọi bản sửa đều phải có nguyên nhân gốc đã xác minh
- Có kỹ thuật truy vết ngược và phòng thủ nhiều lớp cho hệ thống nhiều thành phần
- Sau 3 lần sửa thất bại thì dừng và đặt câu hỏi về kiến trúc thay vì sửa lần thứ 4

## Từ khóa

debug, gỡ lỗi, nguyên nhân gốc, root cause, test, sự cố

## Đầu vào

Lỗi, test hỏng hoặc hành vi bất ngờ cần gỡ

## Đầu ra

Nguyên nhân gốc đã xác minh + bản sửa kèm test tái hiện lỗi

## Giới hạn

Đòi hỏi làm đủ 4 giai đoạn, không bỏ qua dù lỗi có vẻ đơn giản; cần tái hiện được lỗi mới điều tra hiệu quả

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (9505 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
