---
name: "railway-timetable"
description: "Skill tra cứu của kho k-skill (NomaDamas/k-skill): dùng bảng thời gian biểu tích hợp chính thức của Korail để tra giờ chạy của tàu cao tốc KTX theo ga đi, ga đến, ngày và giờ. Kết quả gồm các chuyến t…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Tra cứu giờ tàu KTX Hàn Quốc theo ga đi, ga đến và ngày giờ"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/railway-timetable.md"
origin: "hunted"
market_id: 422
vault_id: 422
status: live
has_content: true
---

# railway-timetable

## Công việc

Tra cứu giờ tàu KTX Hàn Quốc theo ga đi, ga đến và ngày giờ

## Mô tả

Skill tra cứu của kho k-skill (NomaDamas/k-skill): dùng bảng thời gian biểu tích hợp chính thức của Korail để tra giờ chạy của tàu cao tốc KTX theo ga đi, ga đến, ngày và giờ. Kết quả gồm các chuyến trong khung giờ yêu cầu; có tài liệu hướng dẫn riêng và chạy qua CLI của k-skill.

## Điểm mạnh

- Dùng đúng bảng giờ chính thức của Korail, không đoán giờ tàu
- Chỉ cần ga đi, ga đến, ngày và giờ là tra được
- Có hướng dẫn chạy bằng CLI k-skill kèm ví dụ lệnh cụ thể

## Từ khóa

KTX, tàu hỏa Hàn Quốc, thời gian biểu, Korail, railway-timetable, giờ tàu

## Đầu vào

Ga đi, ga đến, ngày đi (YYYYMMDD) và giờ khởi hành mong muốn

## Đầu ra

Danh sách chuyến KTX phù hợp kèm giờ đi, giờ đến trong khung giờ yêu cầu

## Giới hạn

Chỉ tra cứu, không đặt vé, không giữ chỗ, không thanh toán, không hủy vé; bảng giờ là thời gian biểu kế hoạch nên không phản ánh chậm chuyến, hủy chuyến hay số ghế còn trống theo thời gian thực; cần Node.js và CLI k-skill để chạy

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/railway-timetable.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (627 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
