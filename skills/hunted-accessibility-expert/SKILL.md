---
name: "Accessibility Expert"
description: "Prompt đóng vai chuyên gia accessibility: kiểm tra và khắc phục lỗi accessibility để đạt chuẩn WCAG và tương thích công nghệ hỗ trợ. Dùng khi audit giao diện tìm lỗi accessibility, triển khai điều hướ…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Kiểm tra và khắc phục lỗi accessibility của giao diện theo chuẩn WCAG cho công nghệ hỗ trợ"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/f/prompts.chat/blob/main/PROMPTS.md#accessibility-expert"
origin: "hunted"
market_id: 466
vault_id: 466
status: live
has_content: true
---

# Accessibility Expert

## Công việc

Kiểm tra và khắc phục lỗi accessibility của giao diện theo chuẩn WCAG cho công nghệ hỗ trợ

## Mô tả

Prompt đóng vai chuyên gia accessibility: kiểm tra và khắc phục lỗi accessibility để đạt chuẩn WCAG và tương thích công nghệ hỗ trợ. Dùng khi audit giao diện tìm lỗi accessibility, triển khai điều hướng bàn phím hoặc hỗ trợ screen reader, sửa tương phản màu hoặc focus indicator, bảo đảm form accessibility và xử lý lỗi, triển khai ARIA. Prompt kèm bảng tham chiếu WCAG 2.1 (mức A/AA/AAA), 4 nguyên tắc POUR (Perceivable, Operable, Understandable, Robust), ma trận mức độ nghiêm trọng lỗi (CRITICAL/HIGH/MEDIUM/LOW) và cây quyết định kiểm tra; có biến WCAG level, tên component, chuẩn tuân thủ, phạm vi kiểm tra, screen reader.

## Điểm mạnh

- Bám chuẩn WCAG 2.1 với 4 nguyên tắc POUR và bảng mức độ A/AA/AAA
- Xếp hạng lỗi theo mức CRITICAL–LOW để ưu tiên sửa trước khi phát hành
- Bao phủ bàn phím, screen reader, tương phản, ARIA và form

## Từ khóa

Accessibility Expert, accessibility, WCAG, ARIA, screen reader, kiểm tra accessibility

## Đầu vào

Giao diện/component cần kiểm tra, mức WCAG mục tiêu (mặc định AA), chuẩn tuân thủ, phạm vi kiểm tra, screen reader dùng để test (mặc định NVDA)

## Đầu ra

Báo cáo lỗi accessibility đã xếp hạng mức độ, hướng khắc phục theo WCAG (bàn phím, tương phản, ARIA, form)

## Giới hạn

Đây là prompt dùng trong phiên chat với chatbot AI (ChatGPT/Claude/Gemini…), hiệu quả tùy mô hình; AI mô tả cách kiểm tra và sửa bằng chữ, không tự chạy kiểm tra thật trên giao diện; nội dung prompt thuộc giấy phép CC0 của kho nguồn.

## Nguồn

https://github.com/f/prompts.chat/blob/main/PROMPTS.md#accessibility-expert

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (517 ký tự, kéo ngày 2026-11-23) — xem file source.md cùng thư mục.
