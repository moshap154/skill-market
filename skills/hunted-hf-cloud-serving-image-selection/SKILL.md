---
name: "hf-cloud-serving-image-selection"
description: "Skill chính thức của Hugging Face: chọn đúng serving container cho triển khai model lên SageMaker và tìm image URI hiện hành của nó. Dùng khi sắp deploy model lên SageMaker endpoint và cần chọn image …"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Chọn đúng serving container cho triển khai SageMaker và tìm image URI hiện hành"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-serving-image-selection/SKILL.md"
origin: "hunted"
market_id: 573
vault_id: 
status: live
has_content: false
---

# hf-cloud-serving-image-selection

## Công việc

Chọn đúng serving container cho triển khai SageMaker và tìm image URI hiện hành

## Mô tả

Skill chính thức của Hugging Face: chọn đúng serving container cho triển khai model lên SageMaker và tìm image URI hiện hành của nó. Dùng khi sắp deploy model lên SageMaker endpoint và cần chọn image URI — kể cả khi người dùng nói 'deploy LLM này', 'host model Hugging Face này', 'serve model fine-tune này', 'deploy embedding model', 'host reranker', hay khi sắp hardcode bất kỳ container URI nào trong code triển khai. Quy tắc: luôn ưu tiên container do Hugging Face tuyển chọn (HuggingFace vLLM cho LLM và generative reranker, HuggingFace vLLM-Omni cho multimodal, TEI cho embedding/cross-encoder reranker, HF Inference Toolkit cho các transformers khác); image generic (AWS vLLM, DJL-LMI, SGLang) chỉ dùng khi không có image Hugging Face tương thích — không bao giờ vì có version mới hơn. Không hardcode container URI từ trí nhớ và không mặc định dùng TGI. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Ngăn lỗi 'Failed to pass health check' do sai container, tag cũ hoặc sai region
- Ưu tiên bắt buộc image Hugging Face-curated, có lý do rõ ràng khi dùng image generic
- Tra cứu URI hiện hành theo region thay vì hardcode từ trí nhớ

## Từ khóa

SageMaker, serving container, image URI, vLLM, TEI, Deep Learning Containers

## Đầu vào

Model cần deploy, loại model (LLM/embedding/reranker/multimodal) và region AWS đích

## Đầu ra

Serving container đã chọn kèm image URI hiện hành đúng region

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần tài khoản AWS và quyền SageMaker; image khả dụng thay đổi theo region và thời gian. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-serving-image-selection/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
