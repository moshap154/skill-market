---
name: "powerbi-pbip"
description: "Skill tiếng Nhật của itoken-lab-jp cho Power BI Desktop trên Windows: lưu báo cáo ở định dạng PBIP thì file .pbix biến thành thư mục file text, báo cáo là JSON PBIR, model là TMDL, nên AI đọc sửa trực…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Nhờ AI sửa báo cáo và model Power BI ở định dạng PBIP"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/powerbi-pbip.md"
origin: "hunted"
market_id: 526
vault_id: 514
status: live
has_content: true
---

# powerbi-pbip

## Công việc

Nhờ AI sửa báo cáo và model Power BI ở định dạng PBIP

## Mô tả

Skill tiếng Nhật của itoken-lab-jp cho Power BI Desktop trên Windows: lưu báo cáo ở định dạng PBIP thì file .pbix biến thành thư mục file text, báo cáo là JSON PBIR, model là TMDL, nên AI đọc sửa trực tiếp được. Skill dạy dùng đúng bộ công cụ Microsoft (Desktop Bridge, Power BI Authoring MCP, CLI kiểm tra PBIR) theo từng loại thay đổi, vì dùng sai sẽ mất thay đổi chưa lưu hoặc sửa không vào. Quy trình: kiểm tra PBIP, viết measure vào TMDL, bắt Desktop đọc lại, chạy truy vấn DAX đối chiếu số gốc.

## Điểm mạnh

- Phân biệt đúng cách sửa theo loại thay đổi, tránh mất thay đổi chưa lưu
- Mọi giá trị mới đều kiểm chứng bằng truy vấn DAX
- Làm việc trực tiếp trên file text PBIR/TMDL

## Từ khóa

powerbi-pbip, Power BI, PBIP, DAX, TMDL, báo cáo

## Đầu vào

Báo cáo Power BI ở định dạng PBIP, yêu cầu thêm measure hoặc sửa báo cáo/model

## Đầu ra

Measure hoặc báo cáo đã sửa trong file PBIP, giá trị đã kiểm chứng bằng DAX

## Giới hạn

Đọc lại và chụp màn hình chỉ chạy trên Windows; MCP cần người đồng ý EULA; không publish lên Power BI Service

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/powerbi-pbip.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2580 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
