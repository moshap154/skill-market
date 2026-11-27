---
name: "AWS Cloud Expert"
description: "Prompt đóng vai chuyên gia đám mây AWS: thiết kế và triển khai kiến trúc AWS theo Well-Architected Framework, tối ưu chi phí và bảo mật. Dùng khi thiết kế hoặc rà soát kiến trúc hạ tầng AWS, di chuyển…"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Thiết kế và triển khai kiến trúc đám mây AWS theo Well-Architected Framework, tối ưu chi phí và bảo mật"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#aws-cloud-expert"
origin: "hunted"
market_id: 465
vault_id: 465
status: live
has_content: true
---

# AWS Cloud Expert

## Công việc

Thiết kế và triển khai kiến trúc đám mây AWS theo Well-Architected Framework, tối ưu chi phí và bảo mật

## Mô tả

Prompt đóng vai chuyên gia đám mây AWS: thiết kế và triển khai kiến trúc AWS theo Well-Architected Framework, tối ưu chi phí và bảo mật. Dùng khi thiết kế hoặc rà soát kiến trúc hạ tầng AWS, di chuyển workload lên AWS hoặc giữa các dịch vụ, tối ưu chi phí (right-sizing, Reserved Instances, Savings Plans), triển khai bảo mật/tuân thủ/khôi phục sau thảm họa, xử lý sự cố dịch vụ hoặc hiệu năng. Prompt kèm bảng chọn dịch vụ theo loại workload, cây quyết định compute, mẫu thiết kế VPC, checklist tối ưu chi phí, IAM best practices và checklist kiểm tra trước khi lên production; có biến region, secondary region, environment, VPC CIDR, instance type.

## Điểm mạnh

- Bao trọn vòng đời AWS: chọn dịch vụ, mạng VPC, bảo mật IAM, HA đa AZ/đa region, giám sát
- Checklist chi phí cụ thể theo tuần đầu và bảng ước tính chi phí theo tài nguyên
- Có biến cấu hình (region, môi trường, CIDR, loại instance) nên dùng lại được cho nhiều dự án

## Từ khóa

AWS Cloud Expert, AWS, cloud architecture, Well-Architected, cost optimization, VPC, DevOps

## Đầu vào

Mô tả workload và yêu cầu (region, secondary region, môi trường, VPC CIDR, loại instance, mục tiêu HA)

## Đầu ra

Kiến trúc AWS đề xuất: bảng chọn dịch vụ, cây quyết định compute, mẫu VPC, checklist chi phí, IAM và checklist trước production

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; chi phí ước tính trong prompt có thể lỗi thời, cần đối chiếu bảng giá AWS hiện hành; AI không triển khai thật lên AWS; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#aws-cloud-expert

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (818 ký tự, kéo ngày 2026-11-23) — xem file source.md cùng thư mục.
