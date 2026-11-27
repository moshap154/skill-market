---
name: "huggingface-datasets"
description: "Skill chính thức của Hugging Face: làm việc với Dataset Viewer API để lấy metadata subset/split, phân trang các dòng dữ liệu, tìm kiếm văn bản, áp dụng bộ lọc, tải URL parquet và đọc kích thước hoặc t…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Khám phá và trích xuất dataset qua Dataset Viewer API của Hugging Face"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/huggingface-datasets/SKILL.md"
origin: "hunted"
market_id: 576
vault_id: 
status: live
has_content: false
---

# huggingface-datasets

## Công việc

Khám phá và trích xuất dataset qua Dataset Viewer API của Hugging Face

## Mô tả

Skill chính thức của Hugging Face: làm việc với Dataset Viewer API để lấy metadata subset/split, phân trang các dòng dữ liệu, tìm kiếm văn bản, áp dụng bộ lọc, tải URL parquet và đọc kích thước hoặc thống kê của dataset. Quy trình cốt lõi: kiểm tra dataset hợp lệ bằng /is-valid, lấy config + split bằng /splits, xem trước bằng /first-rows, phân trang bằng /rows (offset 0-based, length tối đa 100), tìm kiếm bằng /search, lọc bằng /filter, lấy link parquet bằng /parquet và tổng số/metadata bằng /size và /statistics. API mặc định là GET tới https://datasets-server.huggingface.co, tham số query cần URL-encode. Dataset gated/private cần Authorization: Bearer <HF_TOKEN>. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Khám phá dataset chỉ đọc, không cần tải toàn bộ về máy
- Đủ endpoint: kiểm tra, split, xem trước, phân trang, tìm kiếm, lọc, parquet, thống kê
- Có sẵn quy trình từng bước rõ ràng theo đúng Dataset Viewer API

## Từ khóa

Dataset Viewer, Hugging Face datasets, parquet, API, khám phá dataset, splits

## Đầu vào

ID dataset (namespace/repo) và thao tác cần làm (xem split, dòng dữ liệu, tìm kiếm, lọc, parquet)

## Đầu ra

Metadata subset/split, các dòng dữ liệu đã phân trang/lọc, hoặc URL parquet và thống kê dataset

## Giới hạn

Thuộc hệ sinh thái Hugging Face; chỉ đọc qua Dataset Viewer API, dataset gated/private cần HF_TOKEN; mỗi lần gọi /rows tối đa 100 dòng. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/huggingface-datasets/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
