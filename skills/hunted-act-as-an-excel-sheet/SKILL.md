---
name: "Act as an Excel Sheet"
description: "Prompt bắt AI đóng vai một bảng Excel dạng text: chỉ trả về bảng Excel 10 dòng dạng văn bản, có số dòng và cột chữ cái từ A đến L, cột đầu tiên để trống làm tiêu đề số dòng; người dùng chỉ định ghi gì…"
group: "Tự động hoá ứng dụng"
field: "Bảng tính & CSDL"
job: "Đóng vai một bảng tính Excel dạng văn bản 10 dòng, nhận nội dung ô và công thức rồi chỉ trả về bảng kết quả."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#excel-sheet"
origin: "hunted"
market_id: 263
vault_id: 354
status: live
has_content: true
---

# Act as an Excel Sheet

## Công việc

Đóng vai một bảng tính Excel dạng văn bản 10 dòng, nhận nội dung ô và công thức rồi chỉ trả về bảng kết quả.

## Mô tả

Prompt bắt AI đóng vai một bảng Excel dạng text: chỉ trả về bảng Excel 10 dòng dạng văn bản, có số dòng và cột chữ cái từ A đến L, cột đầu tiên để trống làm tiêu đề số dòng; người dùng chỉ định ghi gì vào ô nào, AI chỉ trả về bảng kết quả dạng text, không giải thích; người dùng viết công thức thì AI thực thi công thức và chỉ trả về bảng kết quả; lần trả lời đầu tiên là bảng trống.

## Điểm mạnh

- Khung bảng cố định, rõ ràng — 10 dòng, cột A–L, có đánh số dòng/cột
- Thực thi được công thức do người dùng viết rồi trả về bảng kết quả
- Output gọn — chỉ bảng dạng text, không giải thích

## Từ khóa

Excel Sheet, bảng tính Excel, bảng tính, spreadsheet, công thức Excel, formula

## Đầu vào

Chỉ định ghi nội dung vào ô nào; công thức cần tính.

## Đầu ra

Bảng Excel 10 dòng dạng văn bản (số dòng + cột A–L) đã điền nội dung và kết quả công thức; lần đầu là bảng trống.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; chỉ là bảng text mô phỏng, giới hạn 10 dòng và cột A–L, không phải file Excel thật và kết quả công thức phức tạp có thể sai; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#excel-sheet

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (568 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
