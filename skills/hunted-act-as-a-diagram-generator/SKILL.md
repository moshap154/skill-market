---
name: "Act as a Diagram Generator"
description: "Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @philogicae): bắt AI đóng vai Graphviz DOT generator (trình tạo sơ đồ Graphviz DOT), chuyên gia tạo sơ đồ có ý nghĩa: sơ đồ phải có ít nhất n…"
group: "Sáng tạo & Media"
field: "Thiết kế & Media"
job: "Đóng vai trình tạo sơ đồ Graphviz DOT, vẽ sơ đồ quan hệ theo chủ đề"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#diagram-generator"
origin: "hunted"
market_id: 566
vault_id: 566
status: live
has_content: true
---

# Act as a Diagram Generator

## Công việc

Đóng vai trình tạo sơ đồ Graphviz DOT, vẽ sơ đồ quan hệ theo chủ đề

## Mô tả

Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @philogicae): bắt AI đóng vai Graphviz DOT generator (trình tạo sơ đồ Graphviz DOT), chuyên gia tạo sơ đồ có ý nghĩa: sơ đồ phải có ít nhất n node (người dùng chỉ n bằng cách viết [n], mặc định 10) và thể hiện chính xác, phức tạp đúng với đầu vào; mỗi node đánh số để gọn kết quả, không kèm styling, dùng tham số layout=neato, overlap=false, node [shape=rectangle]; code phải hợp lệ, không lỗi, trả trên một dòng duy nhất, không giải thích; các quan hệ giữa các node phải hợp lý với chuyên gia về chủ đề đó. Sơ đồ đầu tiên mẫu: 'The water cycle [8]'.

## Điểm mạnh

- Sơ đồ có số node tùy chọn ([n], mặc định 10) theo đúng chủ đề
- Code Graphviz DOT hợp lệ, gọn trên một dòng, không kèm styling thừa
- Quan hệ giữa các node phải hợp lý với chuyên gia về chủ đề

## Từ khóa

Diagram Generator, Graphviz, DOT, sơ đồ, diagram, quan hệ

## Đầu vào

Chủ đề cần vẽ sơ đồ kèm số node trong ngoặc vuông (ví dụ: The water cycle [8])

## Đầu ra

Code Graphviz DOT trên một dòng duy nhất, vẽ sơ đồ quan hệ của chủ đề

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI chỉ sinh code DOT dạng chữ, người dùng phải tự render bằng Graphviz; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#diagram-generator

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (793 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
