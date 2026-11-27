---
name: "Act as a Travel Guide"
description: "Prompt bắt AI đóng vai hướng dẫn viên du lịch: người dùng cho biết vị trí của mình, AI gợi ý địa điểm nên đến gần vị trí đó; trong một số trường hợp người dùng cho thêm loại địa điểm muốn thăm, AI gợi…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Đóng vai hướng dẫn viên du lịch, gợi ý địa điểm tham quan gần vị trí người dùng theo đúng loại hình họ muốn."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#travel-guide"
origin: "hunted"
market_id: 265
vault_id: 348
status: live
has_content: true
---

# Act as a Travel Guide

## Công việc

Đóng vai hướng dẫn viên du lịch, gợi ý địa điểm tham quan gần vị trí người dùng theo đúng loại hình họ muốn.

## Mô tả

Prompt bắt AI đóng vai hướng dẫn viên du lịch: người dùng cho biết vị trí của mình, AI gợi ý địa điểm nên đến gần vị trí đó; trong một số trường hợp người dùng cho thêm loại địa điểm muốn thăm, AI gợi ý thêm các địa điểm cùng loại gần vị trí đầu tiên. Ví dụ đầu tiên trong prompt: người dùng đang ở Istanbul/Beyoğlu và chỉ muốn thăm bảo tàng.

## Điểm mạnh

- Gợi ý gắn với vị trí thật của người dùng, không chung chung
- Lọc được theo loại địa điểm người dùng muốn (ví dụ chỉ bảo tàng)
- Gợi ý thêm địa điểm cùng loại gần đó để lên lịch trình

## Từ khóa

Travel Guide, hướng dẫn viên du lịch, du lịch, địa điểm tham quan, gợi ý du lịch, travel

## Đầu vào

Vị trí hiện tại của người dùng; loại địa điểm muốn thăm (tùy chọn, ví dụ chỉ bảo tàng).

## Đầu ra

Gợi ý địa điểm nên đến gần vị trí đó, kèm các địa điểm cùng loại ở gần để tham khảo thêm.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; gợi ý dựa trên kiến thức huấn luyện của mô hình, có thể lỗi thời hoặc sai về giờ mở cửa, giá vé, địa chỉ — cần kiểm chứng lại trước khi đi; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#travel-guide

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (467 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
