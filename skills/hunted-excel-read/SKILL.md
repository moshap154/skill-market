---
name: "excel-read"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI đọc file Excel (.xlsx/.xlsm/.xls/.xlsb/.ods) bằng file thực thi Rust đi kèm, xuất bảng thành CSV hoặc JSON — không cần cài Python hay Excel. Xử lý được ô gộp…"
group: "Tự động hoá ứng dụng"
field: "Bảng tính & CSDL"
job: "Đọc file Excel (kể cả帳票 phức tạp) thành CSV/JSON cho AI mà không cần Python hay Excel"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/excel-read.md"
origin: "hunted"
market_id: 387
vault_id: 387
status: live
has_content: true
---

# excel-read

## Công việc

Đọc file Excel (kể cả帳票 phức tạp) thành CSV/JSON cho AI mà không cần Python hay Excel

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI đọc file Excel (.xlsx/.xlsm/.xls/.xlsb/.ods) bằng file thực thi Rust đi kèm, xuất bảng thành CSV hoặc JSON — không cần cài Python hay Excel. Xử lý được ô gộp (merged cell), tiêu đề 2 dòng, hàng tổng, công thức, Power Query và mã VBA; ô gộp được điền giá trị, tiêu đề 2 dòng gộp thành một tên cột dạng “tiêu đề trên/tiêu đề dưới”, chỗ dễ đọc sai (hàng ẩn, định dạng có đơn vị) được cảnh báo ra stderr. Theo phép đo của tác giả, đọc nhanh gấp 3–13 lần script Python tương đương và chỉ dùng 13MB bộ nhớ.

## Điểm mạnh

- Đọc đúng帳票 phức tạp: ô gộp, tiêu đề 2 dòng, công thức, Power Query/VBA mà script tự viết hay làm vỡ
- Không cần Python hay Excel, chạy bằng một file thực thi cho Windows/Mac/Linux
- Đo thực tế nhanh gấp 3–13 lần script Python, bộ nhớ cố định 13MB

## Từ khóa

excel-read, Excel, bảng tính, CSV, 帳票, đọc file Excel

## Đầu vào

File Excel (.xlsx/.xlsm/.xls/.xlsb/.ods), tên sheet và số dòng tiêu đề khi cần

## Đầu ra

Bảng dữ liệu dạng CSV hoặc JSON (kèm cảnh báo về chỗ dễ đọc sai)

## Giới hạn

Không đọc được màu chữ/nền ô, hình vẽ và file có mật khẩu; file thực thi Mac chưa qua notarization của Apple nên macOS có thể chặn khi giải nén từ trình duyệt.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/excel-read.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3603 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
