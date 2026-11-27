---
name: "korean-prose"
description: "Skill tiếng Hàn (repo JellyBrick/korean-prose-skill, Apache-2.0) viết lại và 교정 (hiệu đính) văn tiếng Hàn: lấy 글 (bài viết) bị 직역 (dịch từng chữ từ tiếng Anh) hoặc 문체 không đều rồi 다듬 (gọt giũa) thành…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Viết lại văn tiếng Hàn bị dịch thô thành câu tự nhiên như người bản ngữ"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/JellyBrick/korean-prose-skill"
origin: "hunted"
market_id: 557
vault_id: 557
status: live
has_content: true
---

# korean-prose

## Công việc

Viết lại văn tiếng Hàn bị dịch thô thành câu tự nhiên như người bản ngữ

## Mô tả

Skill tiếng Hàn (repo JellyBrick/korean-prose-skill, Apache-2.0) viết lại và 교정 (hiệu đính) văn tiếng Hàn: lấy 글 (bài viết) bị 직역 (dịch từng chữ từ tiếng Anh) hoặc 문체 không đều rồi 다듬 (gọt giũa) thành câu tiếng Hàn tự nhiên, 매끄러운 (mượt mà) như người bản ngữ đọc — dùng cho 기술 문서 (tài liệu kỹ thuật), PR 본문 (nội dung PR), UI 문구 (chuỗi giao diện) v.v. (ví dụ `버튼 눌러요` -> `버튼을 눌러주세요`). Cách làm: nếu được thì dùng Gemini viết 초고 (bản nháp) rồi theo 문체 가이드 (hướng dẫn văn phong) có sẵn trong skill để sửa câu khó đọc; khi sửa code hoặc 문구 다국어 (chuỗi đa ngôn ngữ i18n) thì tra trước vị trí code gọi chuỗi đó, ngữ cảnh trước/sau và chuỗi kề bên. Đồng thời 억제 (kìm) các 패턴 글쓰기 đặc trưng của LLM: thêm 사실 chưa kiểm chứng, 과장 (phóng đại), 홍보 문구 thừa, 결론 rập khuôn, kiểu 'không chỉ A mà còn B', 'gần B hơn A', từ trừu tượng ra vẻ cảm tính, 지시어 (từ chỉ định) mơ hồ, chuỗi danh từ bỏ 조사/어미. Có thể gọi bằng lệnh /korean-prose, $korean-prose hoặc chạy trực tiếp bằng CLI (node scripts/prose.ts, --medium chỉ loại ấn phẩm). Yêu cầu: agent hỗ trợ Agent Skills và chạy lệnh local, Node.js 24+, API key của provider đã chọn (mặc định OpenRouter OPENROUTER_API_KEY; hoặc Google AI Studio GEMINI_API_KEY; hoặc Antigravity CLI đã đăng nhập). Lưu ý trong README: câu do LLM sinh ra luôn là bản nháp cần người rà lại — đường dẫn file, số liệu, chi tiết hành vi có thể khác bản gốc; và dùng Antigravity theo cách này có thể vi phạm điều khoản bổ sung của Google, tài khoản có nguy cơ bị hạn chế.

## Điểm mạnh

- Chuyên trị văn dịch thô: tra ngữ cảnh code của chuỗi UI/i18n trước khi sửa
- Kìm nhiều pattern viết kiểu LLM: bịa thêm, phóng đại, kết luận rập khuôn
- Chạy được cả trong agent lẫn trực tiếp bằng CLI với provider tùy chọn (OpenRouter/Google AI Studio/Antigravity)

## Từ khóa

korean-prose, 한국어 작성, 교정, văn phong tiếng Hàn, dịch thô, Gemini

## Đầu vào

Văn bản tiếng Hàn cần gọt giũa (tài liệu kỹ thuật, nội dung PR, chuỗi UI...), kèm ngữ cảnh dùng và loại ấn phẩm (--medium)

## Đầu ra

Bản tiếng Hàn viết lại tự nhiên, mượt mà, giữ đúng sự thật và ngữ cảnh dùng của văn bản gốc

## Giới hạn

Cần Node.js 24+ và API key của provider đã chọn (OpenRouter mặc định) hoặc Antigravity CLI; câu LLM sinh ra luôn cần người rà lại vì số liệu/đường dẫn có thể sai khác bản gốc; dùng Antigravity theo cách này có thể vi phạm điều khoản bổ sung của Google

## Nguồn

https://github.com/JellyBrick/korean-prose-skill

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (5247 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
