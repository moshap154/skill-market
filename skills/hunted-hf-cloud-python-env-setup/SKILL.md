---
name: "hf-cloud-python-env-setup"
description: "Skill chính thức của Hugging Face: thiết lập môi trường Python tách biệt cho công việc SageMaker/AWS, với đúng phiên bản Python và boto3 hiện hành. Dùng skill này mỗi khi code Python sẽ được chạy cho …"
group: "Tự động hoá ứng dụng"
field: "Code & DevOps"
job: "Dựng môi trường Python tách biệt, đúng phiên bản và boto3 mới nhất cho công việc SageMaker/AWS"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/hf-cloud-python-env-setup/SKILL.md"
origin: "hunted"
market_id: 569
vault_id: 
status: live
has_content: false
---

# hf-cloud-python-env-setup

## Công việc

Dựng môi trường Python tách biệt, đúng phiên bản và boto3 mới nhất cho công việc SageMaker/AWS

## Mô tả

Skill chính thức của Hugging Face: thiết lập môi trường Python tách biệt cho công việc SageMaker/AWS, với đúng phiên bản Python và boto3 hiện hành. Dùng skill này mỗi khi code Python sẽ được chạy cho deployment SageMaker, training job hoặc bất kỳ automation AWS nào — kể cả khi sắp chạy pip install, sắp gọi boto3, sắp tạo/kích hoạt virtualenv, hay khi người dùng yêu cầu 'set up the environment'. Quy tắc cốt lõi: không bao giờ dùng system Python, không pip install vào đó; ghim phiên bản Python (3.10, 3.11 hoặc 3.12, tránh 3.13+ vì thư viện ML chưa kịp hỗ trợ wheel), cài bản mới nhất của từng gói, kiểm tra phiên bản bằng importlib.metadata.version. Skill này ngăn các lỗi thất bại phổ biến nhất: sai phiên bản Python, xung đột dependency và SDK cũ. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Ngăn đúng nhóm lỗi hay gặp nhất khi deploy SageMaker: sai Python, xung đột dependency, SDK cũ
- Quy tắc rõ ràng: luôn môi trường tách biệt, không dùng system Python
- Ghim Python 3.10–3.12 và dùng boto3 mới nhất để có API và bản vá bảo mật hiện hành

## Từ khóa

Python, virtualenv, boto3, SageMaker, AWS, environment setup

## Đầu vào

Yêu cầu công việc SageMaker/AWS và phiên bản Python mong muốn (nếu có)

## Đầu ra

Môi trường Python tách biệt đã dựng xong với boto3/awscli mới nhất, sẵn chạy code AWS

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần Python và quyền tạo virtualenv trên máy; chỉ chuẩn bị môi trường, không tự triển khai AWS. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/hf-cloud-python-env-setup/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
