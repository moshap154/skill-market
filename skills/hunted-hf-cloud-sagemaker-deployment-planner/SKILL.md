---
name: "hf-cloud-sagemaker-deployment-planner"
description: "Skill chính thức của Hugging Face: lập kế hoạch và điều phối việc triển khai model lên Amazon SageMaker AI. Dùng khi người dùng muốn deploy, host, serve hoặc expose model trên SageMaker hoặc AWS — kể …"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Lập kế hoạch và điều phối việc triển khai model lên Amazon SageMaker AI"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-deployment-planner/SKILL.md"
origin: "hunted"
market_id: 570
vault_id: 
status: live
has_content: false
---

# hf-cloud-sagemaker-deployment-planner

## Công việc

Lập kế hoạch và điều phối việc triển khai model lên Amazon SageMaker AI

## Mô tả

Skill chính thức của Hugging Face: lập kế hoạch và điều phối việc triển khai model lên Amazon SageMaker AI. Dùng khi người dùng muốn deploy, host, serve hoặc expose model trên SageMaker hoặc AWS — kể cả khi nói mơ hồ như 'tôi chỉ muốn chạy được trên AWS, bạn tự lo'. Hỗ trợ LLM sinh văn bản, embedding model, reranker, classifier, model text-to-image/diffusion; chọn đúng serving stack và chọn giữa real-time, serverless, async và batch inference. Đây là skill điểm vào của quy trình triển khai SageMaker: hỏi đúng câu hỏi cần thiết, chọn pathway triển khai, rồi điều phối các skill chuyên biệt khác (phát hiện ngữ cảnh AWS, dựng môi trường Python, kiểm tra IAM, chọn serving image, deploy với mặc định production). Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Hỏi ít mà đủ: chọn pathway triển khai với số câu hỏi tối thiểu
- Bao nhiều loại model: LLM, embedding, reranker, classifier, diffusion
- Điều phối cả chuỗi skill chuyên biệt thành một quy trình triển khai hoàn chỉnh

## Từ khóa

SageMaker, deploy model, AWS, inference, endpoint, serving

## Đầu vào

Model cần triển khai và các ràng buộc (loại model, real-time hay async, ngân sách, region nếu có)

## Đầu ra

Kế hoạch triển khai: pathway đã chọn và các bước tiếp theo qua các skill SageMaker chuyên biệt

## Giới hạn

Thuộc hệ sinh thái Hugging Face; chỉ lập kế hoạch và điều phối, việc triển khai thật do các skill chuyên biệt và tài khoản AWS thực hiện; cần tài khoản AWS và quyền SageMaker. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-sagemaker-deployment-planner/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
