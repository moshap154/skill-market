---
name: "huggingface-trackio"
description: "Skill chính thức của Hugging Face: theo dõi và trực quan hoá thí nghiệm huấn luyện ML bằng Trackio. Dùng khi log metric trong lúc training (Python API), bắn cảnh báo cho chẩn đoán training, hoặc truy …"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Theo dõi và trực quan hoá thí nghiệm huấn luyện ML bằng Trackio"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/huggingface-trackio/SKILL.md"
origin: "hunted"
market_id: 581
vault_id: 
status: live
has_content: false
---

# huggingface-trackio

## Công việc

Theo dõi và trực quan hoá thí nghiệm huấn luyện ML bằng Trackio

## Mô tả

Skill chính thức của Hugging Face: theo dõi và trực quan hoá thí nghiệm huấn luyện ML bằng Trackio. Dùng khi log metric trong lúc training (Python API), bắn cảnh báo cho chẩn đoán training, hoặc truy xuất/phân tích metric đã log (CLI). Hỗ trợ dashboard trực quan hoá theo thời gian thực, cảnh báo kèm webhook, đồng bộ lên Hugging Face Space và xuất JSON cho automation. Ba giao diện: Python API để log metric (trackio.init(), trackio.log(), hoặc TRL report_to='trackio', rồi finalize), Python API để bắn cảnh báo, và CLI để truy xuất metric và cảnh báo sau/trong lúc training. Trackio là thư viện experiment tracking, đồng bộ lên Hugging Face Spaces để theo dõi qua dashboard thời gian thực. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Một công cụ cho cả 3 việc: log metric, cảnh báo training và truy xuất metric
- Dashboard thời gian thực đồng bộ lên Hugging Face Space
- Xuất JSON cho automation và tích hợp sẵn với TRL

## Từ khóa

Trackio, experiment tracking, training metrics, dashboard, ML, alerts

## Đầu vào

Script training cần log metric hoặc metric/cảnh báo cần truy xuất

## Đầu ra

Dashboard theo dõi training theo thời gian thực, cảnh báo chẩn đoán và dữ liệu metric (JSON)

## Giới hạn

Thuộc hệ sinh thái Hugging Face; đồng bộ dashboard cần tài khoản Hub/Space; chỉ theo dõi metric, không tự sửa lỗi training. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/huggingface-trackio/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
