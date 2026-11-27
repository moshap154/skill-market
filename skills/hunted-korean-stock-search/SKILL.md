---
name: "korean-stock-search"
description: "Skill tra cứu chứng khoán Hàn Quốc của kho k-skill: tìm mã cổ phiếu niêm yết trên sàn KRX (KOSPI/KOSDAQ), xem thông tin cơ bản của mã và giá giao dịch theo ngày qua proxy k-skill-proxy; người dùng khô…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Tra cứu mã, thông tin và giá cổ phiếu niêm yết KRX Hàn Quốc"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-stock-search.md"
origin: "hunted"
market_id: 424
vault_id: 424
status: live
has_content: true
---

# korean-stock-search

## Công việc

Tra cứu mã, thông tin và giá cổ phiếu niêm yết KRX Hàn Quốc

## Mô tả

Skill tra cứu chứng khoán Hàn Quốc của kho k-skill: tìm mã cổ phiếu niêm yết trên sàn KRX (KOSPI/KOSDAQ), xem thông tin cơ bản của mã và giá giao dịch theo ngày qua proxy k-skill-proxy; người dùng không cần API key KRX riêng. Khi tên mã mơ hồ, skill gợi ý thu hẹp theo thị trường và mã cổ phiếu trước.

## Điểm mạnh

- Tra được cả mã, thông tin cơ bản và giá theo ngày của cổ phiếu KRX
- Không cần API key riêng — khóa KRX nằm ở proxy
- Có thứ tự tra cứu gợi ý: tìm mã trước rồi mới xem thông tin/giá

## Từ khóa

chứng khoán Hàn Quốc, KRX, KOSPI, cổ phiếu, korean-stock-search, giá cổ phiếu

## Đầu vào

Tên hoặc mã cổ phiếu (mã 6 chữ số), thị trường (KOSPI/KOSDAQ) và ngày chuẩn (bas_dd) khi cần giá

## Đầu ra

Danh sách mã khớp, thông tin cơ bản (ngày niêm yết, mệnh giá, số cổ phiếu niêm yết) và giá đóng cửa, biến động, khối lượng, vốn hóa theo ngày

## Giới hạn

Chỉ tra cứu dữ liệu, tài liệu nhấn mạnh cuối câu trả lời phải ghi rõ dữ liệu theo chuẩn KRX chính thức và không phải lời khuyên đầu tư; ngày nghỉ giao dịch có thể trả kết quả trống; khi một phần thị trường upstream lỗi, kết quả có thể kèm cờ upstream.degraded

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-stock-search.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2221 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
