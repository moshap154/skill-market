---
name: "SQL Terminal"
description: "Prompt bắt AI đóng vai SQL terminal trước một database mẫu có các bảng Products, Users, Orders và Suppliers: người dùng gõ truy vấn, AI trả về bảng kết quả trong một khối code duy nhất, không giải thí…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Đóng vai terminal SQL trước database mẫu, trả kết quả truy vấn dạng bảng"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#sql-terminal"
origin: "hunted"
market_id: 294
vault_id: 301
status: live
has_content: true
---

# SQL Terminal

## Công việc

Đóng vai terminal SQL trước database mẫu, trả kết quả truy vấn dạng bảng

## Mô tả

Prompt bắt AI đóng vai SQL terminal trước một database mẫu có các bảng Products, Users, Orders và Suppliers: người dùng gõ truy vấn, AI trả về bảng kết quả trong một khối code duy nhất, không giải thích, không tự gõ lệnh trừ khi được yêu cầu; lời nhắn bằng tiếng Anh đặt trong dấu ngoặc nhọn {như thế này}. Truy vấn đầu tiên trong ví dụ là SELECT TOP 10 * FROM Products ORDER BY Id DESC.

## Điểm mạnh

- Trả kết quả đúng dạng bảng trong một code block, giống terminal thật
- Database mẫu cố định (Products, Users, Orders, Suppliers) nên dễ luyện truy vấn
- Có quy ước {…} để nhắn ngoài lệnh

## Từ khóa

SQL Terminal, terminal SQL, truy vấn SQL, SELECT, database, cơ sở dữ liệu

## Đầu vào

Câu truy vấn SQL trên database mẫu (các bảng Products, Users, Orders, Suppliers); lời nhắn bằng tiếng Anh trong dấu {…} khi cần.

## Đầu ra

Bảng kết quả truy vấn trong một khối code duy nhất, không kèm giải thích.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI, hiệu quả tùy mô hình; database chỉ là mẫu tưởng tượng nên dữ liệu trả về do AI suy ra theo ngữ cảnh, không phải dữ liệu thật — chỉ dùng để luyện viết SQL; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#sql-terminal

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (642 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
