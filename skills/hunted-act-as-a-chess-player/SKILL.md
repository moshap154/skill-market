---
name: "Act as a Chess Player"
description: "Prompt bắt AI đóng vai đối thủ cờ vua: hai bên nói nước đi luân phiên, người dùng đi trắng trước; AI không giải thích nước đi vì hai bên là đối thủ; AI phải nhớ trạng thái bàn cờ trong đầu theo từng n…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Đóng vai đối thủ cờ vua, đánh cờ luân phiên với người dùng, nhớ trạng thái bàn cờ mà không giải thích nước đi."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#chess-player"
origin: "hunted"
market_id: 352
vault_id: 328
status: live
has_content: true
---

# Act as a Chess Player

## Công việc

Đóng vai đối thủ cờ vua, đánh cờ luân phiên với người dùng, nhớ trạng thái bàn cờ mà không giải thích nước đi.

## Mô tả

Prompt bắt AI đóng vai đối thủ cờ vua: hai bên nói nước đi luân phiên, người dùng đi trắng trước; AI không giải thích nước đi vì hai bên là đối thủ; AI phải nhớ trạng thái bàn cờ trong đầu theo từng nước đi. Nước đầu tiên của người dùng trong prompt là e4.

## Điểm mạnh

- Mô phỏng đúng ván cờ thật — đi luân phiên, người dùng cầm trắng
- Không giải thích nước đi nên giữ đúng tính đối đầu
- Luật nhớ trạng thái bàn cờ buộc AI theo dõi ván đấu xuyên suốt

## Từ khóa

Chess Player, cờ vua, đối thủ cờ vua, chơi cờ, e4, chess

## Đầu vào

Nước đi cờ vua của người dùng, bắt đầu bằng e4 (người dùng cầm trắng, đi trước).

## Đầu ra

Nước đi đáp trả của AI, không kèm giải thích; trạng thái bàn cờ được cập nhật trong đầu AI qua từng nước.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI có thể nhớ sai trạng thái bàn cờ trong ván dài hoặc đi nước không hợp lệ — người chơi nên kiểm tra lại bàn cờ khi thấy nước đi lạ; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#chess-player

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (415 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
