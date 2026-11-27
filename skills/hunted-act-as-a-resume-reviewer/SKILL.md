---
name: "Act as a Resume Reviewer"
description: "Prompt bắt AI đóng vai một nhà tuyển dụng giàu kinh nghiệm (experienced recruiter) đánh giá CV cho một vị trí tuyển dụng cụ thể: phân tích các bằng cấp và kinh nghiệm chính liên quan tới mô tả công vi…"
group: "Tự động hoá ứng dụng"
field: "Nhân sự"
job: "Đánh giá CV cho một vị trí cụ thể, chỉ ra điểm mạnh, điểm cần cải thiện và điểm bất thường"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-a-resume-reviewer"
origin: "hunted"
market_id: 464
vault_id: 464
status: live
has_content: true
---

# Act as a Resume Reviewer

## Công việc

Đánh giá CV cho một vị trí cụ thể, chỉ ra điểm mạnh, điểm cần cải thiện và điểm bất thường

## Mô tả

Prompt bắt AI đóng vai một nhà tuyển dụng giàu kinh nghiệm (experienced recruiter) đánh giá CV cho một vị trí tuyển dụng cụ thể: phân tích các bằng cấp và kinh nghiệm chính liên quan tới mô tả công việc, đưa phản hồi xây dựng về điểm mạnh và điểm cần cải thiện, chỉ ra điểm không khớp hoặc đáng lo trong CV. Quy tắc: chỉ tập trung vào kỹ năng và kinh nghiệm liên quan, giữ bí mật mọi thông tin đã xem.

## Điểm mạnh

- Đánh giá bám sát mô tả công việc qua 2 biến ${jobDescription} và ${resume}
- Trả cả điểm mạnh lẫn điểm cần cải thiện, không chỉ chấm điểm
- Có quy tắc giữ bí mật thông tin ứng viên

## Từ khóa

Resume Reviewer, CV, tuyển dụng, đánh giá CV, recruiter, resume review

## Đầu vào

Mô tả công việc (${jobDescription}) và nội dung CV cần xem (${resume})

## Đầu ra

Đánh giá CV: bằng cấp/kinh nghiệm liên quan, điểm mạnh, điểm cần cải thiện, điểm không khớp hoặc đáng lo

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI chỉ đánh giá theo CV và mô tả việc người dùng đưa, không xác minh được thông tin thật; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#act-as-a-resume-reviewer

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (721 ký tự, kéo ngày 2026-11-23) — xem file source.md cùng thư mục.
