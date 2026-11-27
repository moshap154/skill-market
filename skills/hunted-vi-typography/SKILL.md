---
name: "vi-typography"
description: "Skill của bộ qstack: chọn font và trình bày chữ tiếng Việt sao cho hiển thị trọn vẹn — kiểm tra độ phủ font, dấu bị cắt (clipping) và ngắt dòng sai. Skill hướng dẫn lọc font có subset tiếng Việt trên …"
group: "Sáng tạo & Media"
field: "Thiết kế & Media"
job: "Chọn font và trình bày chữ tiếng Việt để dấu không mất, không chồng, không bị cắt"
region: "Việt Nam"
language: "en"
source_url: "https://github.com/quanvu309/qstack/blob/main/skills/design/vi-typography/SKILL.md"
origin: "hunted"
market_id: 281
vault_id: 376
status: live
has_content: true
---

# vi-typography

## Công việc

Chọn font và trình bày chữ tiếng Việt để dấu không mất, không chồng, không bị cắt

## Mô tả

Skill của bộ qstack: chọn font và trình bày chữ tiếng Việt sao cho hiển thị trọn vẹn — kiểm tra độ phủ font, dấu bị cắt (clipping) và ngắt dòng sai. Skill hướng dẫn lọc font có subset tiếng Việt trên Google Fonts, kiểm tra font tự host bằng script check-font.py (liệt kê mọi chữ tiếng Việt còn thiếu, có thể chặn CI), giữ đúng dải Unicode tiếng Việt khi subset font; đặt line-height tối thiểu 1.5 cho thân bài và 1.2 cho tiêu đề, xử lý overflow/line-clamp/background-clip làm cắt dấu, đặt text-underline-offset tối thiểu 0.2em, giữ số kèm đơn vị và tên ngắn trên cùng một dòng, dùng text-wrap: balance/pretty và đặt lang='vi' ở thẻ gốc.

## Điểm mạnh

- Script kiểm tra font liệt kê đúng chữ tiếng Việt còn thiếu (kể cả ₫ và dấu ngoặc kép) và chặn được CI
- Khối văn bản kiểm tra đầy đủ các tổ hợp dấu chồng (ấ ầ ẩ ẫ ậ...) để soi lỗi hiển thị
- Quy tắc cụ thể chống ngắt dòng sai kiểu 'Hà / Nội' hay '250.000 / đ' và chống dấu nặng bị gạch chân cắt ngang

## Từ khóa

vi-typography, qstack, font tiếng Việt, typography, dấu tiếng Việt, line-height, subset font

## Đầu vào

Font hoặc giao diện cần kiểm tra; đoạn văn bản tiếng Việt mẫu; môi trường hiển thị (web, app, tài liệu)

## Đầu ra

Kết quả kiểm tra độ phủ font và các lỗi hiển thị; hướng dẫn sửa line-height, subset, ngắt dòng và thuộc tính lang

## Giới hạn

Script kiểm tra font cần uv và fonttools; chất lượng hiển thị vẫn phải soi bằng mắt với khối văn bản kiểm tra; trình duyệt không có gạch nối tiếng Việt nên không dùng hyphens: auto.

## Nguồn

https://github.com/quanvu309/qstack/blob/main/skills/design/vi-typography/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4323 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
