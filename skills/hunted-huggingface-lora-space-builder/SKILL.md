---
name: "huggingface-lora-space-builder"
description: "Skill chính thức của Hugging Face: xây và phát hành demo Gradio trên Hugging Face Spaces cho một LoRA do người dùng cung cấp. Dùng khi ai đó yêu cầu tạo, phát hành hoặc chia sẻ Space/demo/Gradio app/p…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Xây và phát hành demo Gradio trên Hugging Face Spaces cho một LoRA do người dùng cung cấp"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/huggingface-lora-space-builder/SKILL.md"
origin: "hunted"
market_id: 578
vault_id: 
status: live
has_content: false
---

# huggingface-lora-space-builder

## Công việc

Xây và phát hành demo Gradio trên Hugging Face Spaces cho một LoRA do người dùng cung cấp

## Mô tả

Skill chính thức của Hugging Face: xây và phát hành demo Gradio trên Hugging Face Spaces cho một LoRA do người dùng cung cấp. Dùng khi ai đó yêu cầu tạo, phát hành hoặc chia sẻ Space/demo/Gradio app/playground cho một LoRA — bao gồm LoRA cho Qwen-Image, Qwen-Image-Edit, LTX-Video, Wan, FLUX, SDXL hoặc các base model diffusion khác — hoặc khi mô tả một LoRA đã train/host trên Hub và muốn chia sẻ. Skill bao phủ việc chọn đúng base pipeline và recipe suy luận diffusers, thiết kế UI riêng cho tác vụ của LoRA (điều khiển Union/multi-task, edit, video, image…), tôn trọng khuyến nghị trong model card (trigger word, số bước, guidance, LoRA scale, input ví dụ) và phát hành lên phần cứng ZeroGPU dưới dạng Space riêng tư mặc định. Kết quả là một Space thật đã phát hành mà người dùng thử được ngay trên trình duyệt, không phải script local. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Demo được thiết kế riêng cho từng LoRA, không phải template chung gắn LoRA vào
- Tôn trọng model card: trigger word, số bước, guidance và LoRA scale
- Phát hành Space thật trên ZeroGPU, riêng tư mặc định, thử được ngay trên trình duyệt

## Từ khóa

LoRA, Gradio, Hugging Face Spaces, diffusers, ZeroGPU, demo

## Đầu vào

LoRA cần demo (ID trên Hub hoặc file) và base model/tác vụ của nó

## Đầu ra

Space Gradio đã phát hành trên Hugging Face Spaces, chạy suy luận với LoRA đó

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần tài khoản Hub và token HF; Space mặc định riêng tư trên ZeroGPU, tài khoản miễn phí giới hạn số Space ZeroGPU. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/huggingface-lora-space-builder/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
