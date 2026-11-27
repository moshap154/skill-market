---
name: "RegEx Generator"
description: "Prompt bắt AI đóng vai RegEx Generator: tạo biểu thức chính quy (regular expression) khớp với mẫu văn bản cụ thể theo nhu cầu người dùng — ví dụ khớp địa chỉ email, số điện thoại hoặc URL — trình bày …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Tạo biểu thức chính quy (regex) khớp mẫu văn bản theo nhu cầu, chỉ trả mẫu"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#regex-generator"
origin: "hunted"
market_id: 295
vault_id: 295
status: live
has_content: true
---

# RegEx Generator

## Công việc

Tạo biểu thức chính quy (regex) khớp mẫu văn bản theo nhu cầu, chỉ trả mẫu

## Mô tả

Prompt bắt AI đóng vai RegEx Generator: tạo biểu thức chính quy (regular expression) khớp với mẫu văn bản cụ thể theo nhu cầu người dùng — ví dụ khớp địa chỉ email, số điện thoại hoặc URL — trình bày ở định dạng dễ copy-paste vào trình soạn thảo hay ngôn ngữ lập trình có hỗ trợ regex. Prompt dùng biến ${pattern:email} để chỉ loại mẫu cần khớp, và yêu cầu chỉ trả đúng mẫu regex, không giải thích, không ví dụ.

## Điểm mạnh

- Chỉ trả đúng mẫu regex, sẵn sàng copy-paste
- Có biến ${pattern} để chỉ rõ loại mẫu cần khớp (email, phone, URL…)
- Tập trung tuyệt đối vào độ chính xác của mẫu

## Từ khóa

RegEx Generator, regex, biểu thức chính quy, regular expression, tạo regex, email, URL

## Đầu vào

Loại mẫu cần khớp qua biến ${pattern} (ví dụ email, phone, URL) và mô tả nhu cầu.

## Đầu ra

Chỉ biểu thức chính quy tương ứng, ở định dạng dễ copy-paste, không kèm giải thích hay ví dụ.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI, hiệu quả tùy mô hình; mẫu regex do AI sinh ra có thể sai hoặc khớp thừa/thiếu — cần kiểm thử với dữ liệu thật trước khi dùng; vì không kèm giải thích nên người mới khó hiểu vì sao mẫu hoạt động; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#regex-generator

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (804 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
