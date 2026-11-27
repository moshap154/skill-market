---
name: "hwp"
description: "Skill xử lý tài liệu HWP của kho k-skill: dùng công cụ kordoc để chuyển file .hwp/.hwpx/.hwpml sang Markdown hoặc JSON có cấu trúc (blocks, metadata), chuyển hàng loạt cả thư mục, theo dõi thư mục và …"
group: "Tài liệu & Hồ sơ"
field: "Xử lý tài liệu"
job: "Chuyển tài liệu HWP/HWPX sang Markdown hoặc JSON và ngược lại"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/hwp.md"
origin: "hunted"
market_id: 432
vault_id: 432
status: live
has_content: true
---

# hwp

## Công việc

Chuyển tài liệu HWP/HWPX sang Markdown hoặc JSON và ngược lại

## Mô tả

Skill xử lý tài liệu HWP của kho k-skill: dùng công cụ kordoc để chuyển file .hwp/.hwpx/.hwpml sang Markdown hoặc JSON có cấu trúc (blocks, metadata), chuyển hàng loạt cả thư mục, theo dõi thư mục và tự chuyển file mới (watch), so sánh hai phiên bản tài liệu, trích xuất trường biểu mẫu HWPX và chuyển ngược Markdown thành file .hwpx. Đây là định dạng văn bản phổ biến trong văn phòng và cơ quan Hàn Quốc.

## Điểm mạnh

- Chuyển được cả HWP, HWPX và HWPML sang Markdown hoặc JSON có cấu trúc
- Có chế độ watch để tự chuyển file mới trong thư mục
- Trích được trường biểu mẫu và chuyển ngược Markdown thành .hwpx

## Từ khóa

HWP, HWPX, 한글, chuyển đổi tài liệu, hwp, kordoc, Markdown

## Đầu vào

File hoặc thư mục chứa tài liệu .hwp/.hwpx/.hwpml cần chuyển, so sánh hoặc trích trường biểu mẫu

## Đầu ra

File Markdown hoặc JSON đã chuyển (kèm blocks và metadata), file .hwpx khi chuyển ngược, hoặc kết quả so sánh hai phiên bản

## Giới hạn

Tài liệu hỏng hoặc một số biểu mẫu đặc biệt có thể cho kết quả kèm cảnh báo; file PDF dạng ảnh cần thêm bộ OCR thì chất lượng mới đầy đủ; trích trường biểu mẫu phụ thuộc chất lượng nhãn của mẫu gốc, có trường có thể không nhận ra; cần Node.js 18+ và gói kordoc (kèm pdfjs-dist)

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/hwp.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3450 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
