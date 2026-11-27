---
name: "notion-doc"
description: "Skill notion-doc (repo heyman333/agent-notion-template-docs, MIT) giúp AI agent viết tài liệu giống Notion thay vì giống 'AI viết': skill chỉ lo phần trình bày, còn nội dung và dàn ý vẫn do agent đảm …"
group: "Tài liệu & Hồ sơ"
field: "Xử lý tài liệu"
job: "Bắt agent viết tài liệu HTML theo đúng phong cách Notion"
region: "Hàn Quốc"
language: "en"
source_url: "https://github.com/heyman333/agent-notion-template-docs"
origin: "hunted"
market_id: 558
vault_id: 558
status: live
has_content: true
---

# notion-doc

## Công việc

Bắt agent viết tài liệu HTML theo đúng phong cách Notion

## Mô tả

Skill notion-doc (repo heyman333/agent-notion-template-docs, MIT) giúp AI agent viết tài liệu giống Notion thay vì giống 'AI viết': skill chỉ lo phần trình bày, còn nội dung và dàn ý vẫn do agent đảm nhiệm. Cung cấp sẵn các HTML block kiểu Notion: emoji page icon, tag pill, meta line, breadcrumb, callout 5 màu (xanh dương = ý chính, xám = ghi chú, xanh lá = xong, vàng = lưu ý, đỏ = cảnh báo), mục lục, bảng đơn giản, bố cục 2 cột, nút bấm, toggle (details), checklist có gạch ngang, trích dẫn, bookmark card, code block tô sáng cú pháp bằng Prism (sáng/tối), inline code, màu chữ kiểu Notion (xanh dương, đỏ, cam, xanh lá, tím), ngắt dòng thân thiện tiếng Hàn (word-break: keep-all), bố cục in/PDF bằng @media print. Agent không tự sinh CSS cho từng tài liệu mà copy template.html có sẵn rồi điền nội dung; template cố định chiều rộng nội dung 720px, màu chữ #2C2C2B và token màu sáng/tối đúng bảng màu của Notion (dark mode theo theme người xem, khi in/PDF trở lại bảng sáng). Kèm lint.py kiểm tra tài liệu sinh ra có lệch khỏi template không (CSS lạ, style inline, màu tự viết, class không có trong template, code block thiếu language-*), và hook PostToolUse chạy sau khi ghi file HTML. Cài bằng plugin cho Codex và Claude Code, hoặc copy thư mục skills/notion-doc; có ví dụ mẫu (đề xuất chiến dịch, phân tích sự cố bằng tiếng Hàn và tiếng Anh). Repo đồng bộ định kỳ với trang tham chiếu Notion qua CI hàng tuần để template không lệch khỏi thiết kế thật của Notion.

## Điểm mạnh

- Một template duy nhất khóa đúng phong cách Notion: block, màu, 720px, sáng/tối
- Có lint.py và hook kiểm tra tài liệu sinh ra không lệch khỏi template
- Ngắt dòng thân thiện tiếng Hàn (word-break: keep-all) và bố cục in/PDF sẵn

## Từ khóa

notion-doc, Notion, tài liệu HTML, template, văn bản

## Đầu vào

Yêu cầu viết tài liệu (báo cáo, tóm tắt, postmortem...) và nội dung cần đưa vào

## Đầu ra

Tài liệu HTML theo phong cách Notion: đầy đủ block, mục lục, callout, bảng, code tô sáng, bản in/PDF

## Giới hạn

Chỉ lo trình bày, không quyết định nội dung hay dàn ý; cần agent hỗ trợ plugin hoặc copy thư mục skill; tài liệu phải qua lint để không lệch template; thiết kế bám Notion nên cần CI đồng bộ định kỳ khi Notion đổi

## Nguồn

https://github.com/heyman333/agent-notion-template-docs

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (11054 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
