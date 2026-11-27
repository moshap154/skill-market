---
name: "huggingface-vision-trainer"
description: "Skill chính thức của Hugging Face: huấn luyện và fine-tune model thị giác cho object detection (D-FINE, RT-DETR v2, DETR, YOLOS), image classification (model timm — MobileNetV3, MobileViT, ResNet, ViT…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Huấn luyện và fine-tune model thị giác (detection, classification, SAM/SAM2 segmentation) trên Hugging Face Jobs"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/huggingface-vision-trainer/SKILL.md"
origin: "hunted"
market_id: 582
vault_id: 
status: live
has_content: false
---

# huggingface-vision-trainer

## Công việc

Huấn luyện và fine-tune model thị giác (detection, classification, SAM/SAM2 segmentation) trên Hugging Face Jobs

## Mô tả

Skill chính thức của Hugging Face: huấn luyện và fine-tune model thị giác cho object detection (D-FINE, RT-DETR v2, DETR, YOLOS), image classification (model timm — MobileNetV3, MobileViT, ResNet, ViT/DINOv3 — cùng bất kỳ classifier Transformers nào) và phân đoạn SAM/SAM2 bằng Hugging Face Transformers trên GPU cloud Hugging Face Jobs. Bao phủ chuẩn bị dataset định dạng COCO, augmentation bằng Albumentations, đánh giá mAP/mAR, metric accuracy, phân đoạn SAM với prompt bbox/point, loss DiceCE, chọn phần cứng, ước tính chi phí, theo dõi bằng Trackio và lưu trữ lên Hub. Không cần setup GPU local — kết quả tự động lưu lên Hugging Face Hub. Dùng khi người dùng nhắc tới training object detection, image classification, SAM, SAM2, segmentation, image matting, DETR, D-FINE, RT-DETR, ViT, timm, MobileNet, ResNet, bounding box, hoặc fine-tune model thị giác trên Hugging Face Jobs. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Một skill cho cả 3 tác vụ thị giác: detection, classification và SAM/SAM2 segmentation
- Chạy trên GPU cloud Hugging Face Jobs, không cần GPU local
- Bao trọn pipeline: chuẩn bị COCO, augmentation, đánh giá mAP, ước tính chi phí, lưu lên Hub

## Từ khóa

vision trainer, object detection, image classification, SAM, DETR, Hugging Face Jobs

## Đầu vào

Dataset (định dạng COCO/mask) và loại tác vụ thị giác cần huấn luyện

## Đầu ra

Model thị giác đã fine-tune, lưu trên Hugging Face Hub kèm đánh giá mAP/accuracy

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần tài khoản Hub và token HF; chạy trên Hugging Face Jobs cloud GPU nên phát sinh chi phí cloud. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/huggingface-vision-trainer/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
