---
name: "db-read"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI đọc cơ sở dữ liệu bằng một file thực thi đi kèm: hỗ trợ PostgreSQL, MySQL, SQL Server và Oracle, trả kết quả truy vấn ra CSV hoặc JSON Lines mà không cần cài…"
group: "Tự động hoá ứng dụng"
field: "Bảng tính & CSDL"
job: "Đọc PostgreSQL/MySQL/SQL Server/Oracle thành CSV/JSON chỉ-đọc, không cần driver"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/db-read.md"
origin: "hunted"
market_id: 389
vault_id: 389
status: live
has_content: true
---

# db-read

## Công việc

Đọc PostgreSQL/MySQL/SQL Server/Oracle thành CSV/JSON chỉ-đọc, không cần driver

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI đọc cơ sở dữ liệu bằng một file thực thi đi kèm: hỗ trợ PostgreSQL, MySQL, SQL Server và Oracle, trả kết quả truy vấn ra CSV hoặc JSON Lines mà không cần cài driver hay thư viện client. Kết nối đặt tên trong ~/.config/db-read/db.toml, mật khẩu không ghi vào file mà ghi tên biến môi trường chứa mật khẩu. Skill chỉ cho đọc: câu viết (INSERT/UPDATE/DELETE…) bị từ chối trước khi nối, và phiên làm việc cũng được đặt chỉ-đọc phía DB.

## Điểm mạnh

- Một file thực thi đọc cả 4 loại DB, không cần cài driver hay client (kể cả Oracle Instant Client, ODBC)
- Chỉ-đọc hai lớp: chặn câu ghi trước khi nối và đặt phiên DB ở chế độ chỉ-đọc
- Đo thực tế xuất 200.000 dòng ra CSV nhanh gấp 1,3–4 lần script Python dùng driver, bộ nhớ dưới 8MB

## Từ khóa

db-read, database, SQL, PostgreSQL, MySQL, Oracle, cơ sở dữ liệu

## Đầu vào

Tên kết nối đã cấu hình trong db.toml và câu truy vấn SELECT (kèm tên bảng/cột khi khám phá schema)

## Đầu ra

Kết quả truy vấn dạng CSV hoặc JSON Lines

## Giới hạn

Chỉ đọc — không hỗ trợ ghi, gọi stored procedure, bind variable, Oracle wallet hay Kerberos; không chạy trên Mac Intel và Windows ARM; driver Oracle dùng trong skill vẫn là bản beta.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/db-read.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3638 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
