---
name: "vi-official-doc"
description: "Skill của bộ qstack: soạn văn bản hành chính tiếng Việt (quyết định, công văn, tờ trình, thông báo, báo cáo, kế hoạch, biên bản, giấy mời, giấy giới thiệu) đúng văn phong hành chính và thể thức theo N…"
group: "Tài liệu & Hồ sơ"
field: "Xử lý tài liệu"
job: "Soạn văn bản hành chính tiếng Việt đúng văn phong và thể thức Nghị định 30/2020, xuất file .docx"
region: "Việt Nam"
language: "en"
source_url: "https://github.com/quanvu309/qstack/blob/main/skills/documents/vi-official-doc/SKILL.md"
origin: "hunted"
market_id: 279
vault_id: 373
status: live
has_content: true
---

# vi-official-doc

## Công việc

Soạn văn bản hành chính tiếng Việt đúng văn phong và thể thức Nghị định 30/2020, xuất file .docx

## Mô tả

Skill của bộ qstack: soạn văn bản hành chính tiếng Việt (quyết định, công văn, tờ trình, thông báo, báo cáo, kế hoạch, biên bản, giấy mời, giấy giới thiệu) đúng văn phong hành chính và thể thức theo Nghị định 30/2020. Skill chọn loại văn bản theo mục đích, viết bằng văn phong hành chính (tổ chức xưng bằng tên, người nhận là 'Quý cơ quan', động từ thể hiện cấp bậc: kính trình/đề nghị/yêu cầu/giao), ghi chính xác chủ thể–hành động–đối tượng–hạn–đơn vị phụ trách, tiền ghi cả số và chữ, văn bản trích dẫn ghi đầy đủ khi nhắc lần đầu, dữ kiện chưa có để chỗ trống trong ngoặc vuông thay vì bịa; rồi kiểm lại toàn bộ bằng bảng văn dịch của vi-writing và xuất file .docx bằng script python-docx đi kèm.

## Điểm mạnh

- Đủ 9 loại văn bản hành chính với khung từng loại, theo đúng thể thức Nghị định 30/2020
- Dữ kiện người dùng chưa đưa được giữ làm chỗ trống '[...]' và liệt kê sau văn bản — không bịa số liệu trong văn bản ký
- Xuất thẳng file .docx đúng bố cục bằng script đi kèm, kèm kiểm tra số chữ một trang (--one-page)

## Từ khóa

vi-official-doc, qstack, văn bản hành chính, Nghị định 30/2020, công văn, quyết định, tờ trình, docx

## Đầu vào

Loại văn bản và mục đích; nội dung, số liệu, hạn chót và đơn vị phụ trách; tên tổ chức ban hành và nơi nhận

## Đầu ra

Văn bản hành chính hoàn chỉnh đúng thể thức (đọc theo thứ tự trang) và file .docx khi được yêu cầu; danh sách các chỗ trống cần bổ sung

## Giới hạn

Nghị định 30/2020 bắt buộc với cơ quan nhà nước, doanh nghiệp chỉ theo theo quy ước — cần đối chiếu mẫu riêng của đơn vị nếu có; số văn bản và ngày ký để trống trong bản nháp, do văn thư cấp khi ban hành; cần cài uv và python-docx để xuất file .docx.

## Nguồn

https://github.com/quanvu309/qstack/blob/main/skills/documents/vi-official-doc/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6678 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
