---
name: "korea-weather"
description: "Skill xem thời tiết Hàn Quốc của kho k-skill: lấy dữ liệu từ dịch vụ dự báo ngắn hạn của Cục Khí tượng Hàn Quốc (기상청) qua proxy k-skill-proxy; người dùng không cần tự xin API key. Có ba chế độ: quan t…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Xem thời tiết Hàn Quốc: nhiệt độ, mưa, gió theo giờ"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/korea-weather.md"
origin: "hunted"
market_id: 430
vault_id: 430
status: live
has_content: true
---

# korea-weather

## Công việc

Xem thời tiết Hàn Quốc: nhiệt độ, mưa, gió theo giờ

## Mô tả

Skill xem thời tiết Hàn Quốc của kho k-skill: lấy dữ liệu từ dịch vụ dự báo ngắn hạn của Cục Khí tượng Hàn Quốc (기상청) qua proxy k-skill-proxy; người dùng không cần tự xin API key. Có ba chế độ: quan trắc hiện tại (초단기실황), dự báo siêu ngắn hạn từng giờ tối đa 6 giờ (초단기예보) và dự báo ngắn hạn hôm nay đến +3 ngày (단기예보); nhập theo tọa độ lưới (nx/ny) hoặc vĩ độ/kinh độ.

## Điểm mạnh

- Không cần API key riêng — khóa 기상청 nằm ở proxy
- Có cả quan trắc hiện tại, dự báo từng giờ 6 giờ tới và dự báo 3 ngày
- Tự chọn giờ công bố mới nhất theo giờ chuẩn Hàn Quốc khi không nhập giờ

## Từ khóa

thời tiết Hàn Quốc, 기상청, dự báo thời tiết, korea-weather, nhiệt độ

## Đầu vào

Vị trí cần xem (tọa độ lưới nx/ny hoặc vĩ độ/kinh độ); chế độ xem: hiện tại, siêu ngắn hạn hoặc ngắn hạn

## Đầu ra

Nhiệt độ, trạng thái bầu trời, dạng mưa, xác suất mưa, lượng mưa, độ ẩm, tốc độ và hướng gió theo từng khung giờ/ngày

## Giới hạn

Dự báo theo lưới 5 km nên có thể lệch nhẹ so với ranh giới hành chính; siêu ngắn hạn chỉ tối đa 6 giờ, xa hơn phải dùng dự báo ngắn hạn; ngay sau giờ công bố dữ liệu mới có thể chưa sẵn sàng, cần đợi rồi tra lại

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/korea-weather.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3944 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
