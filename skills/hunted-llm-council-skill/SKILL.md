---
name: "llm-council-skill"
description: "Skill giúp kiểm tra quyết định bằng cách chạy câu hỏi qua 5 cố vấn AI chạy song song, mỗi người một kiểu tư duy: Người Phản biện (tìm điểm sẽ thất bại), Người Tư duy Nguyên tắc Đầu tiên, Người Mở rộng…"
group: "Năng suất & Tổ chức"
field: "Năng suất cá nhân"
job: "Đưa quyết định qua hội đồng 5 cố vấn AI tranh luận và phản biện ẩn danh"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/tenfoldmarc/llm-council-skill"
origin: "hunted"
market_id: 247
vault_id: 59
status: live
has_content: true
---

# llm-council-skill

## Công việc

Đưa quyết định qua hội đồng 5 cố vấn AI tranh luận và phản biện ẩn danh

## Mô tả

Skill giúp kiểm tra quyết định bằng cách chạy câu hỏi qua 5 cố vấn AI chạy song song, mỗi người một kiểu tư duy: Người Phản biện (tìm điểm sẽ thất bại), Người Tư duy Nguyên tắc Đầu tiên, Người Mở rộng (tìm mặt lợi bị bỏ sót), Người Ngoài cuộc (không có ngữ cảnh) và Người Thực thi (chỉ quan tâm làm gì sáng thứ Hai). Các cố vấn phản biện lẫn nhau ẩn danh, rồi 'chủ tịch' tổng hợp thành phán quyết: điểm đồng thuận, điểm xung đột, điểm mù, khuyến nghị rõ ràng và một bước tiếp theo cụ thể, kèm báo cáo HTML trực quan và bản ghi markdown đầy đủ. Khoảng 4 phút một phiên; MIT.

## Điểm mạnh

- Năm góc nhìn đối lập giúp tránh việc AI chỉ đồng tình với cách đặt câu hỏi của bạn
- Phản biện ẩn danh nên ý kiến được đánh giá theo nội dung, không theo 'ai nói'
- Trả về cả báo cáo HTML trực quan lẫn bản ghi đầy đủ để xem lại

## Từ khóa

ra quyết định, hội đồng, tranh luận, phản biện, cố vấn ai

## Đầu vào

Câu hỏi quyết định cần kiểm tra, càng nhiều ngữ cảnh càng tốt (file CLAUDE.md, ghi chú trong workspace được quét kèm)

## Đầu ra

Phán quyết tổng hợp (đồng thuận, xung đột, điểm mù, khuyến nghị, bước tiếp theo); báo cáo HTML + bản ghi markdown

## Giới hạn

Chỉ hợp cho quyết định có đánh đổi — không dùng cho câu hỏi có một đáp án đúng, việc sáng tạo thuần túy hay tóm tắt; tốn nhiều token vì chạy 5 sub-agent

## Nguồn

https://github.com/tenfoldmarc/llm-council-skill

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (16990 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
