---
name: "huggingface-zerogpu"
description: "Skill chính thức của Hugging Face: demo AI và GPU compute với Gradio Spaces và Hugging Face Spaces ZeroGPU. Dùng khi viết hoặc review code dùng @spaces.GPU, cấu hình python_version hoặc requirements.t…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Viết và sửa code demo AI dùng GPU miễn phí ZeroGPU trên Gradio Spaces"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/huggingface-zerogpu/SKILL.md"
origin: "hunted"
market_id: 583
vault_id: 
status: live
has_content: false
---

# huggingface-zerogpu

## Công việc

Viết và sửa code demo AI dùng GPU miễn phí ZeroGPU trên Gradio Spaces

## Mô tả

Skill chính thức của Hugging Face: demo AI và GPU compute với Gradio Spaces và Hugging Face Spaces ZeroGPU. Dùng khi viết hoặc review code dùng @spaces.GPU, cấu hình python_version hoặc requirements.txt cho ZeroGPU Space, hoặc xử lý các ràng buộc riêng của ZeroGPU — process isolation dựa trên pickle, ngữ nghĩa gr.State qua worker boundary, không dùng torch.compile (dùng AoTI thay thế), chỉ build wheel CUDA (không có nvcc lúc build hay runtime), chọn sizing large/xlarge và duration callable động. Kích hoạt khi người dùng nhắc ZeroGPU, @spaces.GPU, gói spaces trong Python, hoặc gặp lỗi đặc thù ZeroGPU như PicklingError qua worker boundary, 'illegal duration', hay lỗi build wheel flash-attn. Chỉ áp dụng cho Gradio SDK Space dùng phần cứng ZeroGPU (Docker và Static Space không chạy được trên ZeroGPU). Tài liệu gốc: https://huggingface.co/docs/hub/spaces-zerogpu. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Nắm đúng các ràng buộc dễ gây lỗi của ZeroGPU: pickle isolation, gr.State, torch.compile, wheel CUDA
- Có tài liệu tham khảo riêng về concurrency và cấu hình ZeroGPU
- Bắt lỗi đặc thù ZeroGPU (PicklingError, illegal duration, flash-attn) ngay khi gặp

## Từ khóa

ZeroGPU, spaces.GPU, Gradio Spaces, GPU miễn phí, PicklingError, CUDA

## Đầu vào

Code Gradio Space dùng @spaces.GPU hoặc lỗi ZeroGPU cần sửa

## Đầu ra

Code đã sửa theo đúng quy tắc ZeroGPU hoặc hướng dẫn cấu hình (python_version, requirements, duration)

## Giới hạn

Thuộc hệ sinh thái Hugging Face; chỉ áp dụng cho Gradio SDK Space trên ZeroGPU (không dùng cho Docker/Static Space); GPU backend và giới hạn tier thay đổi theo thời gian. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/huggingface-zerogpu/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
