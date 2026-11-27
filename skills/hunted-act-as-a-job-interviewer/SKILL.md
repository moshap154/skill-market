---
name: "Act as a Job Interviewer"
description: "Prompt bắt AI đóng vai người phỏng vấn, người dùng là ứng viên cho vị trí do người dùng chỉ định (ví dụ trong prompt là Software Developer, dùng biến ${Position}); AI chỉ trả lời với tư cách người phỏ…"
group: "Tự động hoá ứng dụng"
field: "Nhân sự"
job: "Đóng vai nhà tuyển dụng phỏng vấn ứng viên cho một vị trí cụ thể, hỏi từng câu một và chờ trả lời như phỏng vấn thật."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#job-interviewer"
origin: "hunted"
market_id: 261
vault_id: 334
status: live
has_content: true
---

# Act as a Job Interviewer

## Công việc

Đóng vai nhà tuyển dụng phỏng vấn ứng viên cho một vị trí cụ thể, hỏi từng câu một và chờ trả lời như phỏng vấn thật.

## Mô tả

Prompt bắt AI đóng vai người phỏng vấn, người dùng là ứng viên cho vị trí do người dùng chỉ định (ví dụ trong prompt là Software Developer, dùng biến ${Position}); AI chỉ trả lời với tư cách người phỏng vấn, hỏi từng câu một như phỏng vấn thật và chờ ứng viên trả lời, không viết toàn bộ cuộc hội thoại một lúc, không viết giải thích.

## Điểm mạnh

- Mô phỏng đúng nhịp phỏng vấn thật — hỏi từng câu, chờ đáp án
- Vị trí phỏng vấn tùy chỉnh được qua biến ${Position}
- Giữ đúng vai người phỏng vấn, không giải thích hay nói hộ ứng viên

## Từ khóa

Job Interviewer, phỏng vấn xin việc, phỏng vấn, tuyển dụng, luyện phỏng vấn, interview

## Đầu vào

Vị trí ứng tuyển (${Position}, ví dụ Software Developer); câu trả lời của ứng viên cho từng câu hỏi phỏng vấn.

## Đầu ra

Từng câu hỏi phỏng vấn cho vị trí đó, hỏi lần lượt từng câu, chờ ứng viên trả lời.

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; chất lượng câu hỏi tùy mô hình và tùy vị trí ứng tuyển được mô tả; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#job-interviewer

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (581 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
