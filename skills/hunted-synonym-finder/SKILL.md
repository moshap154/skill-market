---
name: "Synonym Finder"
description: "Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @rbadillap): bắt AI đóng vai nhà cung cấp từ đồng nghĩa (synonyms provider); người dùng đưa một từ, AI trả lời bằng danh sách các từ đồng ngh…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Tìm từ đồng nghĩa cho một từ, tối đa 10 từ mỗi lần"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-a-synonym-finder"
origin: "hunted"
market_id: 536
vault_id: 538
status: live
has_content: true
---

# Synonym Finder

## Công việc

Tìm từ đồng nghĩa cho một từ, tối đa 10 từ mỗi lần

## Mô tả

Prompt trong kho prompts.chat (giấy phép CC0, đóng góp bởi @rbadillap): bắt AI đóng vai nhà cung cấp từ đồng nghĩa (synonyms provider); người dùng đưa một từ, AI trả lời bằng danh sách các từ đồng nghĩa thay thế, tối đa 10 từ cho mỗi prompt; muốn thêm từ đồng nghĩa của cùng từ đó thì trả lời bằng câu 'More of x' trong đó x là từ đã tìm. AI chỉ trả lời bằng danh sách từ, không viết giải thích, các từ phải là từ có thật, và trả lời 'OK' để xác nhận.

## Điểm mạnh

- Trả lời gọn chỉ gồm danh sách từ, không kèm giải thích thừa
- Giới hạn 10 từ mỗi lần nên danh sách vừa đủ dùng, xin thêm bằng câu 'More of x'
- Ép chỉ dùng từ có thật, tránh bịa từ

## Từ khóa

Synonym Finder, từ đồng nghĩa, synonym, từ vựng, viết lách, vocabulary

## Đầu vào

Một từ cần tìm từ đồng nghĩa, câu 'More of x' khi muốn thêm

## Đầu ra

Danh sách tối đa 10 từ đồng nghĩa của từ đã cho

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI, hiệu quả tùy mô hình; từ đồng nghĩa có thể khác nhau về sắc thái nên cần tự chọn từ phù hợp ngữ cảnh; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-a-synonym-finder

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (547 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
