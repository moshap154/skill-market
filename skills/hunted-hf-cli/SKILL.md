---
name: "hf-cli"
description: "Skill chính thức của Hugging Face cho Hugging Face Hub CLI (lệnh hf): tải xuống, tải lên và quản lý model, dataset, Space, bucket, repo, paper, job và nhiều hơn nữa trên Hugging Face Hub. Dùng khi xử …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Dùng CLI hf để tải, đăng và quản lý model, dataset, Space, bucket, repo, paper và job trên Hugging Face Hub"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cli/SKILL.md"
origin: "hunted"
market_id: 567
vault_id: 
status: live
has_content: false
---

# hf-cli

## Công việc

Dùng CLI hf để tải, đăng và quản lý model, dataset, Space, bucket, repo, paper và job trên Hugging Face Hub

## Mô tả

Skill chính thức của Hugging Face cho Hugging Face Hub CLI (lệnh hf): tải xuống, tải lên và quản lý model, dataset, Space, bucket, repo, paper, job và nhiều hơn nữa trên Hugging Face Hub. Dùng khi xử lý xác thực, quản lý cache cục bộ, quản lý Hugging Face Buckets, chạy hoặc lên lịch job trên hạ tầng Hugging Face, quản lý repo, discussion và pull request, duyệt model/dataset/Space, đọc/tìm/browsing bài báo khoa học, quản lý collection, truy vấn dataset, cấu hình Space, thiết lập webhook, hoặc triển khai và quản lý HF Inference Endpoints. Skill này thay thế huggingface-cli đã ngừng dùng và được sinh tự động từ huggingface_hub cài trên máy nên luôn bám sát CLI hiện tại. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Một lệnh hf duy nhất bao trọn mọi thao tác trên Hub: download, upload, repo, bucket, job, Space, paper
- Được sinh từ huggingface_hub cài trên máy nên lệnh luôn cập nhật, thay thế huggingface-cli cũ
- Hỗ trợ xuất JSON/agent format nên agent dùng được trực tiếp trong quy trình tự động

## Từ khóa

hf-cli, Hugging Face Hub, CLI, huggingface_hub, model, dataset

## Đầu vào

Lệnh hf cần chạy và ID repo/model/dataset/Space (hoặc yêu cầu thao tác trên Hub)

## Đầu ra

Kết quả lệnh hf: file đã tải/đăng, trạng thái repo, job, Space hoặc endpoint

## Giới hạn

Thuộc hệ sinh thái Hugging Face; nhiều thao tác cần tài khoản Hub và token HF (hf auth login); một số thao tác cần quyền ghi. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cli/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
