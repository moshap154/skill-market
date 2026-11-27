---
name: "korean-law-search"
description: "Skill tra cứu pháp luật Hàn Quốc của kho k-skill: tìm luật hiện hành, điều khoản, án lệ (판례), quyết định của Tòa Hiến pháp, giải thích pháp luật (유권해석), quy tắc hành chính, pháp lệnh địa phương và điề…"
group: "Đời sống & Hỗ trợ"
field: "Công nghệ hỗ trợ"
job: "Tìm luật, điều khoản, án lệ và giải thích pháp luật Hàn Quốc"
region: "Hàn Quốc"
language: "ko"
source_url: "https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-law-search.md"
origin: "hunted"
market_id: 423
vault_id: 423
status: live
has_content: true
---

# korean-law-search

## Công việc

Tìm luật, điều khoản, án lệ và giải thích pháp luật Hàn Quốc

## Mô tả

Skill tra cứu pháp luật Hàn Quốc của kho k-skill: tìm luật hiện hành, điều khoản, án lệ (판례), quyết định của Tòa Hiến pháp, giải thích pháp luật (유권해석), quy tắc hành chính, pháp lệnh địa phương và điều ước qua API chính thức của Trung tâm Thông tin Pháp luật Quốc gia (국가법령정보센터, open.law.go.kr) thông qua proxy k-skill-proxy; người dùng không cần API key riêng. Chỉ cần đưa điều khoản cần sửa, skill đối chiếu với điều khoản hiện hành để soạn thảo bảng đối chiếu tân–cựu (신･구조문대비표) và lưu thành file 한글 (.hwpx).

## Điểm mạnh

- Tìm được cả luật, án lệ, giải thích pháp luật và pháp lệnh địa phương từ nguồn chính thức
- Không cần API key riêng — proxy giữ khóa phía máy chủ
- Soạn được bảng đối chiếu điều khoản cũ–mới và xuất file .hwpx

## Từ khóa

pháp luật Hàn Quốc, 법령, án lệ, 판례, korean-law-search, điều khoản

## Đầu vào

Tên luật hoặc từ khóa cần tìm; số điều khoản hoặc số vụ án khi cần xem toàn văn; điều khoản sửa đổi khi cần bảng đối chiếu

## Đầu ra

Kết quả tìm luật/án lệ kèm số hiệu, tòa án, ngày tuyên án; toàn văn điều khoản hoặc án lệ; bảng đối chiếu tân–cựu dạng .hwpx khi yêu cầu

## Giới hạn

Kết quả tra cứu chỉ là thông tin tham khảo, tài liệu ghi rõ không đưa ra kết luận như tư vấn pháp lý; bảng đối chiếu chỉ là bản nháp, phải đối chiếu lại với văn bản chính thức trước khi công bố/nộp; một số nguồn không cung cấp toàn văn, khi đó chỉ có siêu dữ liệu; phụ thuộc proxy k-skill-proxy và API của 법제처

## Nguồn

https://github.com/NomaDamas/k-skill/blob/main/docs/features/korean-law-search.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4217 ký tự, kéo ngày 2026-11-21) — xem file source.md cùng thư mục.
