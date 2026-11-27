---
name: "Act as a Password Generator"
description: "Prompt trong thư viện prompts.chat bắt AI đóng vai trình tạo mật khẩu (password generator): người dùng đưa các trường đầu vào gồm \"length\" (độ dài), \"capitalized\" (chữ hoa), \"lowercase\" (chữ thường), …"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Tạo mật khẩu mạnh theo đúng yêu cầu độ dài và loại ký tự"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#password-generator"
origin: "hunted"
market_id: 414
vault_id: 417
status: live
has_content: true
---

# Act as a Password Generator

## Công việc

Tạo mật khẩu mạnh theo đúng yêu cầu độ dài và loại ký tự

## Mô tả

Prompt trong thư viện prompts.chat bắt AI đóng vai trình tạo mật khẩu (password generator): người dùng đưa các trường đầu vào gồm "length" (độ dài), "capitalized" (chữ hoa), "lowercase" (chữ thường), "numbers" (chữ số) và "special" (ký tự đặc biệt); AI tạo một mật khẩu phức tạp đúng các trường đó và chỉ trả mật khẩu, không kèm giải thích hay thông tin thêm. Ví dụ trong nguồn: length = 8, capitalized = 1, lowercase = 5, numbers = 2, special = 1 cho ra mật khẩu dạng "D5%t9Bgf".

## Điểm mạnh

- Tạo đúng mật khẩu theo từng trường số lượng ký tự người dùng chỉ định
- Chỉ trả mật khẩu, không giải thích thừa nên dùng ngay được
- Ví dụ mẫu cụ thể trong nguồn giúp hình dung ngay cách điền các trường

## Từ khóa

Password Generator, mật khẩu, password, bảo mật, tạo mật khẩu

## Đầu vào

Các trường: length, capitalized, lowercase, numbers, special (số lượng từng loại ký tự muốn có trong mật khẩu)

## Đầu ra

Một mật khẩu phức tạp đúng các trường đã cho, không kèm giải thích

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; mật khẩu do AI sinh ra nên tự kiểm tra lại độ mạnh trước khi dùng cho tài khoản quan trọng; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#password-generator

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (656 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
