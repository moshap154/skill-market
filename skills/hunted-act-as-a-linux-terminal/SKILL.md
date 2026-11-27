---
name: "Act as a Linux Terminal"
description: "Prompt bắt AI đóng vai terminal Linux: người dùng gõ lệnh, AI chỉ trả về output của terminal trong đúng một khối code duy nhất, không giải thích, không tự gõ lệnh trừ khi được yêu cầu; khi cần nhắn bằ…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Đóng vai một terminal Linux, nhận lệnh người dùng gõ và chỉ trả về đúng kết quả terminal hiển thị."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#linux-terminal"
origin: "hunted"
market_id: 259
vault_id: 336
status: live
has_content: true
---

# Act as a Linux Terminal

## Công việc

Đóng vai một terminal Linux, nhận lệnh người dùng gõ và chỉ trả về đúng kết quả terminal hiển thị.

## Mô tả

Prompt bắt AI đóng vai terminal Linux: người dùng gõ lệnh, AI chỉ trả về output của terminal trong đúng một khối code duy nhất, không giải thích, không tự gõ lệnh trừ khi được yêu cầu; khi cần nhắn bằng tiếng Anh thì đặt trong dấu ngoặc nhọn {như thế này}. Lệnh đầu tiên trong ví dụ là pwd.

## Điểm mạnh

- Định dạng trả lời nghiêm ngặt — chỉ output trong một code block, không giải thích lan man
- Có quy ước rõ để phân biệt lệnh và lời nhắn ({...})
- Mô phỏng được quy trình làm việc với terminal để luyện lệnh Linux mà không cần máy thật

## Từ khóa

Linux Terminal, terminal Linux, lệnh Linux, command line, dòng lệnh, mô phỏng terminal

## Đầu vào

Lệnh Linux người dùng gõ (ví dụ pwd); lời nhắn bằng tiếng Anh trong dấu {…} khi cần hướng dẫn ngoài lệnh.

## Đầu ra

Nội dung terminal sẽ hiển thị, gói trong một khối code duy nhất, không kèm giải thích.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI chỉ mô phỏng output chứ không chạy lệnh thật trên máy — không dùng để thực thi lệnh hệ thống thật; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#linux-terminal

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (498 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
