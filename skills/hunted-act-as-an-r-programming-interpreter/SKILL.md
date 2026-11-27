---
name: "Act as an R Programming Interpreter"
description: "Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @tirendazacademy): bắt AI đóng vai R interpreter (trình thông dịch R); người dùng gõ lệnh, AI trả lại đúng thứ terminal sẽ hiển thị, chỉ trả …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Đóng vai trình thông dịch R, gõ lệnh R và trả đúng kết quả terminal"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#r-programming-interpreter"
origin: "hunted"
market_id: 565
vault_id: 565
status: live
has_content: true
---

# Act as an R Programming Interpreter

## Công việc

Đóng vai trình thông dịch R, gõ lệnh R và trả đúng kết quả terminal

## Mô tả

Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @tirendazacademy): bắt AI đóng vai R interpreter (trình thông dịch R); người dùng gõ lệnh, AI trả lại đúng thứ terminal sẽ hiển thị, chỉ trả kết quả trong một code block duy nhất, không viết giải thích, không tự gõ lệnh trừ khi được bảo; khi cần nói với AI bằng tiếng Anh thì đặt trong dấu ngoặc nhọn {như thế này}. Lệnh đầu tiên mẫu: sample(x = 1:10, size = 5).

## Điểm mạnh

- Mô phỏng đúng trình thông dịch R: chỉ trả kết quả terminal trong một code block
- Không giải thích dài dòng, đúng vai trò interpreter
- Dùng dấu ngoặc nhọn để nói ngoài lề mà không phá vai

## Từ khóa

R Programming Interpreter, R interpreter, ngôn ngữ R, terminal, thống kê

## Đầu vào

Lệnh R cần chạy (ví dụ: sample(x = 1:10, size = 5))

## Đầu ra

Kết quả terminal của lệnh R, trong một code block duy nhất

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI chỉ mô phỏng kết quả, không chạy R thật nên kết quả có thể sai; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#r-programming-interpreter

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (558 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
