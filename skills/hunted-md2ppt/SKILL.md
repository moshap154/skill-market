---
name: "md2ppt"
description: "Skill md2ppt trong repo kc_ai_skills của KerberosClaw: nhà thiết kế trình bày làm việc tương tác với người dùng để biến báo cáo Markdown thành file .pptx hoàn chỉnh. Không tự động chuyển đổi chung chu…"
group: "Sáng tạo & Media"
field: "Thiết kế & Media"
job: "Biến báo cáo Markdown thành file PowerPoint trình bày được, có hỏi ý người dùng từng bước"
region: "Đài Loan"
language: "en"
source_url: "https://github.com/KerberosClaw/kc_ai_skills/blob/main/md2ppt/SKILL.md"
origin: "hunted"
market_id: 476
vault_id: 478
status: live
has_content: true
---

# md2ppt

## Công việc

Biến báo cáo Markdown thành file PowerPoint trình bày được, có hỏi ý người dùng từng bước

## Mô tả

Skill md2ppt trong repo kc_ai_skills của KerberosClaw: nhà thiết kế trình bày làm việc tương tác với người dùng để biến báo cáo Markdown thành file .pptx hoàn chỉnh. Không tự động chuyển đổi chung chung mà làm theo 7 bước: phân tích trước file Markdown (số đề mục, bảng, khối code, sơ đồ, ước lượng số slide), hỏi người dùng bằng danh sách đánh số để chốt nhóm slide, preset phong cách (corporate_blue mặc định với font PingFang TC, hoặc minimal_dark, hoặc tùy chỉnh), có cần slide bìa và Q&A không, cách render sơ đồ mermaid, và mức độ hỏi từng slide; sau đó viết một build script Python viết tay từng slide bằng scripts/pptx_helpers.py, render ra .pptx, rồi tự kiểm tra bằng LibreOffice (tùy chọn) và sửa theo phản hồi từng slide, tối đa 5 vòng lặp. Build script được giữ lại để tái tạo khi nội dung đổi. Cần Python venv với python-pptx và pillow; mermaid CLI và LibreOffice là tùy chọn.

## Điểm mạnh

- Hỏi và chốt quyết định thiết kế trước khi dựng, tránh slide tự động chuyển đổi xấu
- Mỗi slide được viết tay trong build script nên kiểm soát bố cục theo từng loại nội dung
- Có vòng tự kiểm tra bằng hình render và giữ lại build script để làm lại khi nội dung thay đổi

## Từ khóa

md2ppt, Markdown, pptx, 簡報, presentation, PowerPoint

## Đầu vào

File báo cáo Markdown đầu vào (và đường dẫn .pptx đầu ra tùy chọn)

## Đầu ra

File .pptx hoàn chỉnh kèm build script Python có thể chạy lại, và bản xem trước để rà soát

## Giới hạn

Không phải bộ chuyển đổi tự động chung chung và không xuất PDF; cần cài python-pptx/pillow, mermaid CLI và LibreOffice nếu muốn đủ tính năng; tự kiểm tra bằng hình render chỉ là bộ lọc, vẫn cần người dùng xem lại bằng tay.

## Nguồn

https://github.com/KerberosClaw/kc_ai_skills/blob/main/md2ppt/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (19468 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
