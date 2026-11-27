---
name: "data-query"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI tổng hợp CSV, JSON và Parquet bằng cách tự viết một câu SQL và chạy bằng DuckDB CLI — DuckDB đọc thẳng file mà không cần import. Skill quy định: CSV Shift_JI…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Tổng hợp CSV/JSON/Parquet bằng một câu SQL DuckDB, không cần viết script pandas"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/data-query.md"
origin: "hunted"
market_id: 390
vault_id: 390
status: live
has_content: true
---

# data-query

## Công việc

Tổng hợp CSV/JSON/Parquet bằng một câu SQL DuckDB, không cần viết script pandas

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI tổng hợp CSV, JSON và Parquet bằng cách tự viết một câu SQL và chạy bằng DuckDB CLI — DuckDB đọc thẳng file mà không cần import. Skill quy định: CSV Shift_JIS của Excel tiếng Nhật phải đọc bằng cp932 (vì shift_jis lỗi với các ký tự ①, ㈱, 髙), tiền phải tính bằng DECIMAL để không ra số lẻ kiểu 28468682.40000003, và phải đối chiếu số dòng/tổng với dữ liệu gốc trước khi trả lời. Theo phép đo của tác giả trên CSV 2 triệu dòng, DuckDB nhanh gấp khoảng 5 lần pandas.

## Điểm mạnh

- Không cần viết script pandas: một câu SQL DuckDB đọc thẳng CSV/JSON/Parquet
- Xử lý đúng CSV Shift_JIS tiếng Nhật (cp932) và tiền tệ bằng DECIMAL, tránh lỗi số lẻ
- Kết quả được đối chiếu với số dòng và tổng gốc trước khi trả lời

## Từ khóa

data-query, DuckDB, SQL, CSV, Parquet, tổng hợp dữ liệu

## Đầu vào

File CSV/JSON/Parquet và câu hỏi tổng hợp (ví dụ: tổng theo phòng ban, xếp theo số tiền)

## Đầu ra

Bảng tổng hợp và câu trả lời đã đối chiếu với dữ liệu gốc

## Giới hạn

Cần tự cài DuckDB CLI 2.0 trở lên trên máy chạy agent; phép đo tốc độ dùng module Python của DuckDB chứ không đo trực tiếp CLI.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/data-query.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2617 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
