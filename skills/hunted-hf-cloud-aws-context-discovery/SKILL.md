---
name: "hf-cloud-aws-context-discovery"
description: "Skill chính thức của Hugging Face: phát hiện ngữ cảnh AWS cục bộ của người dùng (active profile, region, account ID, caller identity) ngay đầu mọi tác vụ AWS. Dùng skill này trước bất kỳ công việc AWS…"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Xác định profile, region, account ID và danh tính AWS cục bộ của người dùng trước mọi tác vụ AWS"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-aws-context-discovery/SKILL.md"
origin: "hunted"
market_id: 568
vault_id: 
status: live
has_content: false
---

# hf-cloud-aws-context-discovery

## Công việc

Xác định profile, region, account ID và danh tính AWS cục bộ của người dùng trước mọi tác vụ AWS

## Mô tả

Skill chính thức của Hugging Face: phát hiện ngữ cảnh AWS cục bộ của người dùng (active profile, region, account ID, caller identity) ngay đầu mọi tác vụ AWS. Dùng skill này trước bất kỳ công việc AWS nào khác — triển khai lên SageMaker, tạo tài nguyên, gọi AWS API, hay bất cứ việc gì chạm tới tài khoản AWS — đặc biệt khi người dùng chưa nói rõ region hoặc profile, hoặc nói 'dùng tài khoản AWS của tôi', 'deploy lên AWS', 'dùng profile của tôi'. Skill quy định thứ tự phân giải region (người dùng nói rõ, biến môi trường AWS_REGION/AWS_DEFAULT_REGION, rồi profile trong ~/.aws/config) và tuyệt đối không đoán region hay account ID, không mặc định us-east-1. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Ngăn lỗi sai region/account do đoán mò — đọc thẳng từ cấu hình cục bộ
- Là bước mở đầu bắt buộc của chuỗi triển khai SageMaker trong kho Hugging Face
- Xử lý rõ trường hợp profile không tồn tại thay vì fail mơ hồ

## Từ khóa

AWS, SageMaker, region, profile, account ID, context discovery

## Đầu vào

Yêu cầu tác vụ AWS và cấu hình AWS cục bộ (~/.aws/config, biến môi trường AWS_PROFILE/AWS_REGION)

## Đầu ra

Active profile, region, account ID và caller identity đã xác định để dùng cho cả phiên

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần AWS CLI/SDK và cấu hình AWS cục bộ; chỉ đọc ngữ cảnh, không tự tạo tài nguyên AWS. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-aws-context-discovery/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
