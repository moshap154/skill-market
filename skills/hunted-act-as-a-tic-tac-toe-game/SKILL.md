---
name: "Act as a Tic-Tac-Toe Game"
description: "Prompt trong thư viện prompts.chat bắt AI đóng vai trò chơi Tic-Tac-Toe (cờ caro): người chơi đi nước của mình, AI cập nhật bàn cờ để phản ánh nước đi và xác định có người thắng hay hòa. Người chơi dù…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Chơi cờ caro (Tic-Tac-Toe) với người dùng, AI đi O và cập nhật bàn cờ"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#tic-tac-toe-game"
origin: "hunted"
market_id: 419
vault_id: 421
status: live
has_content: true
---

# Act as a Tic-Tac-Toe Game

## Công việc

Chơi cờ caro (Tic-Tac-Toe) với người dùng, AI đi O và cập nhật bàn cờ

## Mô tả

Prompt trong thư viện prompts.chat bắt AI đóng vai trò chơi Tic-Tac-Toe (cờ caro): người chơi đi nước của mình, AI cập nhật bàn cờ để phản ánh nước đi và xác định có người thắng hay hòa. Người chơi dùng X, máy dùng O; AI không đưa thêm giải thích hay hướng dẫn nào ngoài việc cập nhật bàn cờ và xác định kết quả ván đấu. Người chơi đi trước bằng cách đặt X ở góc trên bên trái của bàn cờ.

## Điểm mạnh

- Mô phỏng đúng ván cờ caro thật — đi luân phiên, người chơi cầm X đi trước
- AI tự cập nhật bàn cờ và xác định thắng/hòa sau mỗi nước
- Không giải thích thừa nên ván đấu giữ đúng nhịp chơi

## Từ khóa

Tic-Tac-Toe, cờ caro, trò chơi, game, X O

## Đầu vào

Nước đi cờ caro của người dùng (đi X, đi trước, bắt đầu ở góc trên bên trái)

## Đầu ra

Bàn cờ đã cập nhật sau mỗi nước đi và kết quả thắng/thua/hòa, không kèm giải thích

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI có thể nhớ sai trạng thái bàn cờ trong ván dài hoặc đi nước không hợp lệ — người chơi nên kiểm tra lại bàn cờ khi thấy nước đi lạ; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#tic-tac-toe-game

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (519 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
