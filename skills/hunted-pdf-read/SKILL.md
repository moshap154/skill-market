---
name: "pdf-read"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI đọc PDF mà không tự viết script trích xuất: kiểm tra xem PDF có lớp chữ không, có thì dùng Poppler (pdftotext -layout) để giữ vị trí cột, không có thì chuyển…"
group: "Tài liệu & Hồ sơ"
field: "Xử lý tài liệu"
job: "Đọc PDF (kể cả scan và dọc) giữ nguyên bố cục bảng, OCR tiếng Nhật khi cần"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/pdf-read.md"
origin: "hunted"
market_id: 388
vault_id: 388
status: live
has_content: true
---

# pdf-read

## Công việc

Đọc PDF (kể cả scan và dọc) giữ nguyên bố cục bảng, OCR tiếng Nhật khi cần

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI đọc PDF mà không tự viết script trích xuất: kiểm tra xem PDF có lớp chữ không, có thì dùng Poppler (pdftotext -layout) để giữ vị trí cột, không có thì chuyển trang thành ảnh và OCR bằng tesseract. Với OCR, các từ có độ tin cậy thấp và số có hình dạng lạ (ví dụ “4A410.000”) được picked ra để agent xem trực tiếp ảnh trang và đọc lại; số tiền, số lượng, ngày tháng và mã luôn được đối chiếu với ảnh trang.

## Điểm mạnh

- Giữ được bố cục cột của bảng nhờ pdftotext -layout thay vì trích chữ thô
- OCR tiếng Nhật (kể cả dọc) với dữ liệu tessdata_best jpn/jpn_vert, rồi đối chiếu ảnh để sửa số tiền hay sai
- Tự nhận biết PDF scan (không có lớp chữ) và chuyển sang OCR thay vì trả về rỗng

## Từ khóa

pdf-read, PDF, OCR, tesseract, Poppler, đọc PDF tiếng Nhật

## Đầu vào

File PDF (tài liệu, bảng,帳票, scan, dọc)

## Đầu ra

Văn bản trích từ PDF, giữ bố cục; các giá trị nghi ngờ được đối chiếu ảnh trang

## Giới hạn

Cần tự cài Poppler và tesseract trên máy chạy agent (skill không kèm công cụ); OCR vẫn sai dấu ▲, dấu phẩy và có thể làm mất chữ số trong số tiền — phải đối chiếu ảnh; agent không đọc được ảnh phải ghi rõ giá trị chưa xác minh.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/pdf-read.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2785 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
