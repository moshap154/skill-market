---
name: "grammar-checker"
description: "Skill tiếng Hàn trong repo DaleSeo/korean-skills (MIT): kiểm tra 문법 (ngữ pháp), 맞춤법 (chính tả), 띄어쓰기 (cách ngắt từ), 구두점 (dấu câu) theo 표준 한국어 규칙 (quy tắc tiếng Hàn chuẩn). Lỗi xếp theo 4 카테고리 có 우선순위…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Kiểm tra 문법, 맞춤법, 띄어쓰기, 구두점 tiếng Hàn theo chuẩn"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/DaleSeo/korean-skills/blob/main/skills/grammar-checker"
origin: "hunted"
market_id: 555
vault_id: 555
status: live
has_content: true
---

# grammar-checker

## Công việc

Kiểm tra 문법, 맞춤법, 띄어쓰기, 구두점 tiếng Hàn theo chuẩn

## Mô tả

Skill tiếng Hàn trong repo DaleSeo/korean-skills (MIT): kiểm tra 문법 (ngữ pháp), 맞춤법 (chính tả), 띄어쓰기 (cách ngắt từ), 구두점 (dấu câu) theo 표준 한국어 규칙 (quy tắc tiếng Hàn chuẩn). Lỗi xếp theo 4 카테고리 có 우선순위 (mức ưu tiên): 1. 맞춤법/철자 (chính tả, ưu tiên cao nhất — ví dụ 되/돼, -ㄴ지/-는지), 2. 띄어쓰기 (ngắt từ — 의존명사/danh từ phụ thuộc, 보조용언/động từ phụ, 단위명사/danh từ đơn vị), 3. 문법 구조 (cấu trúc ngữ pháp — 조사/trợ từ, 어미/vĩ tố), 4. 구두점 (dấu câu — 쉼표/dấu phẩy, 느낌표/dấu cảm). Mỗi lỗi kèm 교육적 설명 (giải thích mang tính hướng dẫn), 교정 có xét 문맥 (ngữ cảnh: 격식체/văn phong trang trọng hay 비격식체/thân mật) và 확신도 표시 (mức chắc chắn: lỗi chắc chắn hay chỉ là 권장 사항/khuyến nghị). Dùng trong Claude Code, Cursor, Windsurf; giấy phép MIT.

## Điểm mạnh

- 4 nhóm lỗi xếp theo mức ưu tiên, từ chính tả tới dấu câu
- Mỗi lỗi kèm giải thích hướng dẫn và mức chắc chắn (lỗi chắc vs khuyến nghị)
- Sửa theo ngữ cảnh trang trọng hay thân mật của văn bản

## Từ khóa

grammar-checker, 문법 검사, 맞춤법, 띄어쓰기, kiểm tra ngữ pháp, tiếng Hàn

## Đầu vào

Văn bản tiếng Hàn cần kiểm tra

## Đầu ra

Danh sách lỗi theo 4 nhóm ưu tiên, kèm giải thích, bản sửa theo ngữ cảnh và mức chắc chắn

## Giới hạn

Chỉ kiểm tra và gợi ý sửa, không tự thay văn bản gốc; là skill cho agent (Claude Code/Cursor/Windsurf), cần môi trường hỗ trợ Agent Skills; có thể nhận nhầm ở câu mơ hồ — mức chắc chắn đi kèm để người dùng tự quyết

## Nguồn

https://github.com/DaleSeo/korean-skills/blob/main/skills/grammar-checker

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4401 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
