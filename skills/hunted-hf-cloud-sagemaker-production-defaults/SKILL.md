---
name: "hf-cloud-sagemaker-production-defaults"
description: "Skill chính thức của Hugging Face: tạo SageMaker endpoint (real-time, real-time scale-to-zero, hoặc async) với autoscaling, CloudWatch alarms và tagging bật mặc định. Dùng khi sắp tạo SageMaker endpoi…"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Tạo SageMaker endpoint production với autoscaling, CloudWatch alarms và tagging mặc định"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-production-defaults/SKILL.md"
origin: "hunted"
market_id: 572
vault_id: 
status: live
has_content: false
---

# hf-cloud-sagemaker-production-defaults

## Công việc

Tạo SageMaker endpoint production với autoscaling, CloudWatch alarms và tagging mặc định

## Mô tả

Skill chính thức của Hugging Face: tạo SageMaker endpoint (real-time, real-time scale-to-zero, hoặc async) với autoscaling, CloudWatch alarms và tagging bật mặc định. Dùng khi sắp tạo SageMaker endpoint, viết code triển khai gọi create_endpoint, hoặc chốt việc triển khai sau khi đã có image URI và IAM role. Skill cung cấp deploy.py cho endpoint real-time, deploy_ic.py cho endpoint real-time scale-to-zero bằng inference components, và deploy_async.py cho endpoint async (cũng scale-to-zero). Mỗi endpoint được tạo thành một bộ hoàn chỉnh: SageMaker Model, endpoint config, endpoint, autoscaling target + policy (target tracking theo invocations/instance) và CloudWatch alarms (latency, lỗi, platform overhead). Đây là bước cuối trong quy trình triển khai SageMaker. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Endpoint ra production thật: có autoscaling, alarm và tagging ngay từ đầu, không phải demo
- Hỗ trợ cả real-time, scale-to-zero và async trong một skill
- Có sẵn 3 script deploy mẫu (deploy.py, deploy_ic.py, deploy_async.py)

## Từ khóa

SageMaker, endpoint, autoscaling, CloudWatch, production, deploy

## Đầu vào

Image URI, IAM execution role, loại endpoint (real-time/scale-to-zero/async) và instance type

## Đầu ra

SageMaker endpoint đang chạy kèm autoscaling, CloudWatch alarms và tagging

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần tài khoản AWS, IAM role và image URI đã xác định; endpoint thật phát sinh chi phí AWS. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-production-defaults/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
