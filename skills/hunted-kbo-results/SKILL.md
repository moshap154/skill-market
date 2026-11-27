---
name: "kbo-results"
description: "Skill tra cứu bóng chày Hàn Quốc của kho k-skill: xem lịch thi đấu và kết quả các trận KBO theo ngày, kèm tỉ số, đội nhà/đội khách và trạng thái trận; có thể lọc chỉ lấy trận của một đội cụ thể. Dữ li…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Xem lịch thi đấu và kết quả bóng chày KBO theo ngày"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/kbo-results.md"
origin: "hunted"
market_id: 427
vault_id: 427
status: live
has_content: true
---

# kbo-results

## Công việc

Xem lịch thi đấu và kết quả bóng chày KBO theo ngày

## Mô tả

Skill tra cứu bóng chày Hàn Quốc của kho k-skill: xem lịch thi đấu và kết quả các trận KBO theo ngày, kèm tỉ số, đội nhà/đội khách và trạng thái trận; có thể lọc chỉ lấy trận của một đội cụ thể. Dữ liệu lấy qua gói npm kbo-game (hàm getGame).

## Điểm mạnh

- Xem được lịch và kết quả KBO theo từng ngày
- Lọc được theo đội bóng yêu thích
- Trả về tỉ số và trạng thái trận dưới dạng dễ đọc

## Từ khóa

KBO, bóng chày Hàn Quốc, kết quả thể thao, kbo-results, lịch thi đấu

## Đầu vào

Ngày cần xem (YYYY-MM-DD) và tên đội cần lọc (tùy chọn)

## Đầu ra

Danh sách trận KBO trong ngày kèm đội nhà, đội khách, tỉ số và trạng thái trận

## Giới hạn

Ngày ngoài mùa giải có thể trả kết quả trống; cần Node.js 18+ và cài gói kbo-game; hàm dùng thực tế là getGame (nhận đối tượng Date), ví dụ getGameInfo trong README gốc không chạy được; ngày tương đối như 'hôm nay/hôm qua' nên đổi sang ngày tuyệt đối trước khi tra

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/kbo-results.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1062 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
