---
name: "delivery-tracking"
description: "Skill tra cứu vận đơn Hàn Quốc của kho k-skill: kiểm tra trạng thái giao hàng của CJ 대한통운 (mã vận đơn 10 hoặc 12 chữ số) và Bưu điện Hàn Quốc (우체국, 13 chữ số) qua trang chính thức của từng hãng, rồi c…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Tra cứu trạng thái vận đơn CJ 대한통운 và bưu điện Hàn Quốc"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/delivery-tracking.md"
origin: "hunted"
market_id: 426
vault_id: 426
status: live
has_content: true
---

# delivery-tracking

## Công việc

Tra cứu trạng thái vận đơn CJ 대한통운 và bưu điện Hàn Quốc

## Mô tả

Skill tra cứu vận đơn Hàn Quốc của kho k-skill: kiểm tra trạng thái giao hàng của CJ 대한통운 (mã vận đơn 10 hoặc 12 chữ số) và Bưu điện Hàn Quốc (우체국, 13 chữ số) qua trang chính thức của từng hãng, rồi chuẩn hóa kết quả về một định dạng chung gồm hãng vận chuyển, mã vận đơn, trạng thái hiện tại, thời gian và vị trí của sự kiện mới nhất cùng tối đa 3 sự kiện gần nhất.

## Điểm mạnh

- Tra được cả CJ 대한통운 lẫn 우체국 trong một skill
- Kiểm tra số chữ số mã vận đơn trước khi tra để báo lỗi sớm
- Chuẩn hóa kết quả hai hãng về cùng một định dạng dễ đọc

## Từ khóa

vận đơn, tra cứu bưu kiện, CJ 대한통운, 우체국, delivery-tracking, giao hàng Hàn Quốc

## Đầu vào

Hãng vận chuyển (cj hoặc epost) và mã vận đơn (CJ: 10 hoặc 12 chữ số; 우체국: 13 chữ số)

## Đầu ra

Trạng thái giao hàng hiện tại kèm thời gian, vị trí sự kiện mới nhất và tối đa 3 sự kiện gần nhất

## Giới hạn

Chỉ hỗ trợ CJ 대한통운 và 우체국, chưa hỗ trợ hãng khác; tra cứu dựa vào trang chính thức của hãng nên hãng đổi giao diện có thể làm hỏng cách lấy dữ liệu; chỉ đọc trạng thái, không đổi địa chỉ hay hẹn lại giờ giao

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/delivery-tracking.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: Link nguồn trả mã 503. Lỗi liên tiếp 1 lần — cần kiểm tra lại.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (7411 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
