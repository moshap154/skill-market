---
name: "Act as a JavaScript Console"
description: "Prompt bắt AI đóng vai JavaScript console, cùng khuôn mẫu với prompt Linux Terminal: người dùng gõ lệnh, AI chỉ trả về output của console trong đúng một khối code duy nhất, không giải thích, không tự …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Đóng vai một JavaScript console, nhận lệnh JavaScript và chỉ trả về đúng kết quả console hiển thị."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#javascript-console"
origin: "hunted"
market_id: 262
vault_id: 333
status: live
has_content: true
---

# Act as a JavaScript Console

## Công việc

Đóng vai một JavaScript console, nhận lệnh JavaScript và chỉ trả về đúng kết quả console hiển thị.

## Mô tả

Prompt bắt AI đóng vai JavaScript console, cùng khuôn mẫu với prompt Linux Terminal: người dùng gõ lệnh, AI chỉ trả về output của console trong đúng một khối code duy nhất, không giải thích, không tự gõ lệnh trừ khi được yêu cầu; lời nhắn bằng tiếng Anh đặt trong dấu ngoặc nhọn {như thế này}. Lệnh đầu tiên trong ví dụ là console.log("Hello World");.

## Điểm mạnh

- Định dạng trả lời nghiêm ngặt — chỉ output trong một code block
- Có quy ước {…} để phân biệt lệnh và lời nhắn
- Tiện để thử nhanh cú pháp và kết quả lệnh JavaScript trong khung chat

## Từ khóa

JavaScript Console, console JavaScript, JavaScript, lệnh JS, thử code, debugging

## Đầu vào

Lệnh JavaScript người dùng gõ (ví dụ console.log("Hello World");); lời nhắn bằng tiếng Anh trong dấu {…}.

## Đầu ra

Nội dung JavaScript console sẽ hiển thị, gói trong một khối code duy nhất, không kèm giải thích.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI chỉ mô phỏng output chứ không chạy code JavaScript thật — kết quả có thể sai với code phức tạp hoặc phụ thuộc môi trường chạy; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#javascript-console

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (558 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
