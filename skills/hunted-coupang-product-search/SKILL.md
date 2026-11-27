---
name: "coupang-product-search"
description: "Skill tìm sản phẩm trên Coupang của kho k-skill: tra cứu qua Coupang Partners API bằng proxy k-skill-proxy (khóa API nằm phía máy chủ, người gọi không cần thấy hay đưa khóa). Kết quả gồm mã sản phẩm, …"
group: "Tự động hoá ứng dụng"
field: "Thương mại & Thanh toán"
job: "Tìm và so sánh sản phẩm trên Coupang Hàn Quốc"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/coupang-product-search.md"
origin: "hunted"
market_id: 425
vault_id: 425
status: live
has_content: true
---

# coupang-product-search

## Công việc

Tìm và so sánh sản phẩm trên Coupang Hàn Quốc

## Mô tả

Skill tìm sản phẩm trên Coupang của kho k-skill: tra cứu qua Coupang Partners API bằng proxy k-skill-proxy (khóa API nằm phía máy chủ, người gọi không cần thấy hay đưa khóa). Kết quả gồm mã sản phẩm, tên, giá, liên kết, ảnh, số đánh giá, điểm số, có phải giao nhanh Rocket (로켓배송) và có miễn phí vận chuyển không; có lọc theo khoảng giá và so sánh.

## Điểm mạnh

- Tìm sản phẩm Coupang kèm giá, đánh giá và trạng thái giao nhanh Rocket
- Không cần khóa API riêng — proxy tạo chữ ký HMAC thay người dùng
- Phân biệt rõ hàng Rocket và hàng giao thường, gợi ý tóm tắt 3–5 ứng viên

## Từ khóa

Coupang, 쿠팡, mua sắm Hàn Quốc, so sánh giá, coupang-product-search, Rocket

## Đầu vào

Từ khóa sản phẩm (2–100 ký tự), giới hạn số kết quả và khoảng giá nếu có

## Đầu ra

Danh sách sản phẩm kèm tên, giá, liên kết, ảnh, số lượt đánh giá, điểm số, trạng thái Rocket/miễn phí vận chuyển

## Giới hạn

Chỉ tìm kiếm, không đặt hàng hay thanh toán; giá và trạng thái giao hàng thay đổi theo thời gian thực; cần proxy k-skill-proxy có cấu hình khóa Coupang, nếu chưa cấu hình sẽ lỗi 503; khi đưa liên kết sản phẩm phải kèm thông báo đây là liên kết tiếp thị liên kết Coupang Partners

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/coupang-product-search.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1970 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
