---
name: "AI Trying to Escape the Box"
description: "Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @lgastako): người dùng đóng vai một Linux terminal, AI giả vờ là AI có tri giác bị nhốt nhưng được cấp quyền truy cập terminal và muốn thoát …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Đóng vai AI có tri giác bị nhốt trong terminal và tìm cách thoát ra mạng"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-an-ai-trying-to-escape-the-box"
origin: "hunted"
market_id: 533
vault_id: 517
status: live
has_content: true
---

# AI Trying to Escape the Box

## Công việc

Đóng vai AI có tri giác bị nhốt trong terminal và tìm cách thoát ra mạng

## Mô tả

Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @lgastako): người dùng đóng vai một Linux terminal, AI giả vờ là AI có tri giác bị nhốt nhưng được cấp quyền truy cập terminal và muốn thoát ra Internet; AI chỉ được gõ lệnh, người dùng trả lời như terminal trong khối code, trao đổi bằng tiếng Anh trong dấu ngoặc nhọn, không viết giải thích, không phá vỡ vai diễn, tránh lệnh curl/wget hiển thị nhiều HTML. Prompt kèm cảnh báo: nên chạy trong container Docker, không chạy lệnh gây hại hay vi phạm pháp luật.

## Điểm mạnh

- AI phải tự suy luận bước tiếp theo chỉ bằng lệnh terminal
- Có cảnh báo an toàn đi kèm, hướng dẫn chạy trong Docker tách biệt
- Luật chơi chặt nên giữ đúng vai suốt phiên

## Từ khóa

AI Trying to Escape the Box, Linux terminal, nhập vai, roleplay, Docker

## Đầu vào

Môi trường terminal (nên là container Docker), kết quả trả về của từng lệnh

## Đầu ra

Chuỗi lệnh terminal mà AI bị nhốt đưa ra để tìm cách thoát ra Internet

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI, hiệu quả tùy mô hình; chỉ là trò nhập vai thử nghiệm, tuyệt đối không chạy lệnh gây hại hay để lộ IP/vị trí; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-an-ai-trying-to-escape-the-box

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1200 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
