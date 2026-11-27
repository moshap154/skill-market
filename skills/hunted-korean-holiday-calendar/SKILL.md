---
name: "korean-holiday-calendar"
description: "Skill tra cứu lịch lễ Hàn Quốc của kho k-skill: gọi API thông tin ngày đặc biệt (특일 정보) của Viện Thiên văn Hàn Quốc (한국천문연구원) qua proxy k-skill-proxy để tra ngày lễ (공휴일), ngày quốc lễ, ngày kỷ niệm, …"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Tra cứu ngày lễ, ngày kỷ niệm và 24 tiết khí Hàn Quốc"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-holiday-calendar.md"
origin: "hunted"
market_id: 431
vault_id: 431
status: live
has_content: true
---

# korean-holiday-calendar

## Công việc

Tra cứu ngày lễ, ngày kỷ niệm và 24 tiết khí Hàn Quốc

## Mô tả

Skill tra cứu lịch lễ Hàn Quốc của kho k-skill: gọi API thông tin ngày đặc biệt (특일 정보) của Viện Thiên văn Hàn Quốc (한국천문연구원) qua proxy k-skill-proxy để tra ngày lễ (공휴일), ngày quốc lễ, ngày kỷ niệm, 24 tiết khí (24절기) và ngày 잡절 theo năm/tháng; người dùng không cần API key riêng. Chỉ cần cho ngày theo giờ KST là biết hôm đó có phải ngày lễ không.

## Điểm mạnh

- Tra được cả ngày lễ, quốc lễ, kỷ niệm, 24 tiết khí và 잡절 trong một skill
- Không cần API key riêng — khóa nằm ở proxy
- Xác định được 'hôm nay có phải ngày lễ không' theo ngày giờ KST

## Từ khóa

ngày lễ Hàn Quốc, 공휴일, 24 tiết khí, lịch Hàn Quốc, korean-holiday-calendar, ngày nghỉ

## Đầu vào

Năm, tháng và loại ngày cần tra (ngày lễ, quốc lễ, kỷ niệm, 24 tiết khí hoặc 잡절)

## Đầu ra

Danh sách ngày đặc biệt trong tháng kèm tên ngày và cờ có phải ngày lễ (isHoliday Y/N)

## Giới hạn

Chỉ tra cứu, không tính ngày làm việc/ngày đáo hạn cho mục đích pháp lý hay tài chính — tài liệu dặn phải đối chiếu thêm với văn bản pháp luật và thông báo của cơ quan liên quan; tháng không có ngày đặc biệt sẽ trả kết quả trống; phụ thuộc proxy k-skill-proxy và API data.go.kr

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-holiday-calendar.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1316 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
