---
name: "rewrite-tw"
description: "Skill rewrite-tw trong repo kc_ai_skills của KerberosClaw: biên tập viên ngôn ngữ phồn thể (Đài Loan) cho file Markdown hoặc văn bản thuần túy. Chỉ làm đúng hai việc: chỉ ra lỗi ngữ pháp thật sự làm n…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Hiệu đính ngữ pháp và từ ngữ Đài Loan cho file Markdown/văn bản phồn thể"
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/KerberosClaw/kc_ai_skills/blob/main/rewrite-tw/SKILL.md"
origin: "hunted"
market_id: 473
vault_id: 473
status: live
has_content: true
---

# rewrite-tw

## Công việc

Hiệu đính ngữ pháp và từ ngữ Đài Loan cho file Markdown/văn bản phồn thể

## Mô tả

Skill rewrite-tw trong repo kc_ai_skills của KerberosClaw: biên tập viên ngôn ngữ phồn thể (Đài Loan) cho file Markdown hoặc văn bản thuần túy. Chỉ làm đúng hai việc: chỉ ra lỗi ngữ pháp thật sự làm người đọc hiểu sai (thiếu chủ ngữ, gãy cấu trúc, dùng lượng từ sai, nối câu sai logic, dùng tên gọi không nhất quán) và chỉ ra từ ngữ không phải của Đài Loan (từ đại lục như 補丁, 視頻, 質量, 默認, 服務器 và câu dịch máy) kèm từ thay thế của Đài Loan. Làm theo hợp đồng hai giai đoạn: Giai đoạn 1 chỉ báo cáo, hoàn toàn chỉ đọc; Giai đoạn 2 sửa file chỉ khi người dùng đồng ý rõ ràng bằng “全部” hoặc liệt kê số thứ tự. Có bảng đối chiếu, danh sách trắng các từ Đài Loan dùng bình thường (như 等價, 缺陷, 投訴) và quy tắc đánh dấu “待確認” khi không chắc. Không đổi giọng văn, không đổi cấu trúc hay nội dung, không thêm sự thật, không dịch giữa các ngôn ngữ.

## Điểm mạnh

- Ngưỡng báo lỗi ngữ pháp cao: chỉ báo khi nói rõ được người đọc sẽ hiểu sai thành gì
- Có bảng đối chiếu đại lục–Đài Loan theo ngữ cảnh và danh sách trắng chống sửa nhầm từ Đài Loan
- Hai giai đoạn bắt buộc: báo cáo trước, sửa sau chỉ khi được ủy quyền rõ ràng

## Từ khóa

rewrite-tw, 正體中文, 台灣用語, 校閱, 語病, 繁體中文

## Đầu vào

Đường dẫn file Markdown hoặc văn bản cần hiệu đính (hoặc glob)

## Đầu ra

Báo cáo hiệu đính theo bảng: lỗi ngữ pháp (số, file, dòng, câu gốc, đề xuất, lý do) và gợi ý từ ngữ Đài Loan; sau khi duyệt thì file đã sửa

## Giới hạn

Chỉ làm tầng ngôn ngữ, không sửa giọng văn, cấu trúc hay nội dung; với văn bản pháp luật, công văn, hợp đồng chỉ gợi ý chứ không đề xuất thay thế; cần người dùng xác nhận trước khi sửa file.

## Nguồn

https://github.com/KerberosClaw/kc_ai_skills/blob/main/rewrite-tw/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (7709 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
