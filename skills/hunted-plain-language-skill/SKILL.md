---
name: "plain-language-skill"
description: "Skill viết lại văn bản AI và tài liệu kỹ thuật khó đọc thành lời trắng (plain language) mà không đổi nghĩa, với hai bộ quy tắc riêng cho tiếng Anh và繁體中文 — không phải bản dịch của nhau, vì mỗi ngôn ng…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Viết lại văn bản AI rườm rà, đầy thuật ngữ thành lời trắng dễ hiểu mà không đổi nghĩa."
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/olivervvvv/plain-language-skill"
origin: "hunted"
market_id: 343
vault_id: 243
status: live
has_content: true
---

# plain-language-skill

## Công việc

Viết lại văn bản AI rườm rà, đầy thuật ngữ thành lời trắng dễ hiểu mà không đổi nghĩa.

## Mô tả

Skill viết lại văn bản AI và tài liệu kỹ thuật khó đọc thành lời trắng (plain language) mà không đổi nghĩa, với hai bộ quy tắc riêng cho tiếng Anh và繁體中文 — không phải bản dịch của nhau, vì mỗi ngôn ngữ hỏng theo cách khác nhau. Bản繁體 xử lý câu dài nhiều ý nối bằng dấu phẩy, lược chủ ngữ và lối danh từ hoá (進行/加以/做出); bản tiếng Anh xử lý câu bị động giấu chủ thể và chồng danh từ. Nguyên tắc đỏ: số liệu, đơn vị, ràng buộc và độ không chắc chắn giữ nguyên; mọi mục hành động phải gắn vị trí cụ thể (tệp, dòng, cột), nếu nguồn không nói thì ghi “原文沒說” thay vì lấp khoảng trống; bài dài có khung kết luận trước rồi chia mục đánh số. Có chế độ luôn bật qua khối always-on gắn vào CLAUDE.md toàn cục và chế độ chỉ kích hoạt bằng từ khoá. Dùng cho Claude Code, OpenClaw và mọi môi trường hỗ trợ Agent Skills. Giấy phép MIT.

## Điểm mạnh

- Hai bộ quy tắc riêng theo ngôn ngữ, bản繁體 xử lý đúng lỗi đặc thù của tiếng Hoa chứ không áp quy tắc tiếng Anh sang
- Ranh giới đỏ rõ ràng: giữ nguyên số liệu và độ không chắc chắn, không bịa chi tiết còn thiếu
- Chế độ always-on tự phân loại đầu ra (viết ra tệp thì giữ chính xác, nói với người thì viết trắng) mà không cần từ khoá kích hoạt

## Từ khóa

plain-language, viết lại dễ hiểu, 白話, phồn thể, plain language, hiệu đính

## Đầu vào

Văn bản AI hoặc tài liệu kỹ thuật rườm rà, đầy thuật ngữ (tiếng Anh hoặc繁體中文)

## Đầu ra

Bản viết lại ngắn gọn, kết luận lên đầu, các mục có tiêu đề mang nội dung; mục hành động gắn vị trí cụ thể

## Giới hạn

Không áp cho văn bản đặc tả, pháp lý hay trao đổi chuyên gia với chuyên gia — ở đó độ chính xác quan trọng hơn dễ đọc; chỉ làm rõ, không bịa sự thật nguồn không có; giấy phép MIT.

## Nguồn

https://github.com/olivervvvv/plain-language-skill

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6817 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
