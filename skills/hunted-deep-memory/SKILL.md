---
name: "deep-memory"
description: "Meta-skill chạy nền cho trợ lý AI, có README繁體中文: mỗi lượt hội thoại kiểm tra chỉ mục từ khoá, nếu gặp vấn đề đã giải trước đây thì gợi lại “cách giải tốt nhất” hoặc “hướng dẫn tránh bẫy”; khi gọi ski…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Biến agent lập trình thành bộ não thứ hai tự tiến hoá: nhớ kinh nghiệm cũ và gợi lại đúng lúc."
region: "Đài Loan"
language: "en"
source_url: "https://github.com/kevintsai1202/deep-memory"
origin: "hunted"
market_id: 346
vault_id: 95
status: live
has_content: true
---

# deep-memory

## Công việc

Biến agent lập trình thành bộ não thứ hai tự tiến hoá: nhớ kinh nghiệm cũ và gợi lại đúng lúc.

## Mô tả

Meta-skill chạy nền cho trợ lý AI, có README繁體中文: mỗi lượt hội thoại kiểm tra chỉ mục từ khoá, nếu gặp vấn đề đã giải trước đây thì gợi lại “cách giải tốt nhất” hoặc “hướng dẫn tránh bẫy”; khi gọi skill khác thì kiểm tra kho kinh nghiệm của skill đó; khi nhiệm vụ xong tốt thì chủ động hỏi để ghi lại cách làm vào kho tri thức riêng (~/.deep-memory) rồi lập chỉ mục. Tìm kiếm lai cục bộ bằng ChromaDB (ngữ nghĩa + BM25) và xếp lại bằng BGE-Reranker; kho nóng/lạnh phân tầng (mục đã chắt lọc và ghi chú thô); có skill con sao lưu/khôi phục qua repo GitHub riêng tư và nhập dữ liệu từ ChatGPT/Claude. Dùng cho Claude Code, Codex, Gemini CLI và các agent khác. Giấy phép MIT.

## Điểm mạnh

- Tự gợi lại kinh nghiệm và bẫy cũ đúng lúc, kể cả kinh nghiệm theo từng skill đang dùng
- Chủ động ghi lại cách làm tốt mà không cần ghi chép tay
- Dữ liệu ở máy mình, tìm kiếm lai cục bộ, sao lưu và khôi phục qua GitHub riêng tư

## Từ khóa

deep-memory, bộ nhớ agent, RAG, kinh nghiệm, ChromaDB, tự tiến hoá

## Đầu vào

Hội thoại làm việc với agent lập trình; kho tri thức riêng (~/.deep-memory) và nhật ký kinh nghiệm theo skill

## Đầu ra

Lời nhắc kinh nghiệm hoặc bẫy liên quan trong lúc làm việc; mục tri thức mới ghi vào kho nóng/lạnh sau khi nhiệm vụ hoàn thành tốt

## Giới hạn

Cần cài Python venv và lập chỉ mục vector lần đầu; tìm kiếm lai chạy cục bộ (CPU) nên lần đầu có thể chậm; tuỳ chọn reranker đám mây TypeSafe sẽ gửi truy vấn và đoạn ứng viên ra ngoài; giấy phép MIT.

## Nguồn

https://github.com/kevintsai1202/deep-memory

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (15220 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
