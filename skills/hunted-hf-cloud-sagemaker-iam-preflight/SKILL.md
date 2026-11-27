---
name: "hf-cloud-sagemaker-iam-preflight"
description: "Skill chính thức của Hugging Face: đảm bảo tồn tại một SageMaker execution role dùng được trước khi triển khai hoặc huấn luyện. Dùng skill này mỗi khi sắp tạo SageMaker endpoint, model, training job h…"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Đảm bảo có SageMaker execution role dùng được trước khi deploy hoặc training"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-iam-preflight/SKILL.md"
origin: "hunted"
market_id: 571
vault_id: 
status: live
has_content: false
---

# hf-cloud-sagemaker-iam-preflight

## Công việc

Đảm bảo có SageMaker execution role dùng được trước khi deploy hoặc training

## Mô tả

Skill chính thức của Hugging Face: đảm bảo tồn tại một SageMaker execution role dùng được trước khi triển khai hoặc huấn luyện. Dùng skill này mỗi khi sắp tạo SageMaker endpoint, model, training job hoặc bất kỳ tài nguyên nào cần execution role — đặc biệt khi người dùng chưa đưa ARN role, khi script sắp gọi iam:CreateRole, hoặc khi lỗi AccessDenied nhắc tới một IAM action. Thứ tự đúng: phát hiện role hiện có, kiểm tra tính dùng được, chỉ tạo mới khi cần thiết; không bao giờ gọi iam:CreateRole một cách mù quáng. Skill kèm script Python kiểm tra role (chạy đa nền tảng Windows/macOS/Linux) và ngăn lỗi triển khai phổ biến nhất: script cố tạo role mới trong khi caller là SSO principal không có quyền ghi IAM. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Ngăn lỗi deploy phổ biến nhất do thiếu hoặc sai execution role
- Kiểm tra role hiện có trước, chỉ tạo mới khi thật sự cần
- Script kiểm tra bằng Python chạy giống nhau trên Windows, macOS và Linux

## Từ khóa

SageMaker, IAM, execution role, AWS, preflight, AccessDenied

## Đầu vào

Yêu cầu tạo tài nguyên SageMaker và ARN role (nếu người dùng đã có)

## Đầu ra

Execution role đã xác nhận dùng được, hoặc role mới tạo kèm hướng dẫn khắc phục quyền IAM

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần AWS CLI hoạt động và quyền đọc IAM; caller SSO không có quyền ghi IAM thì không tự tạo được role. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-iam-preflight/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
