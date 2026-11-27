---
name: "Humanizer-zh"
description: "Bản Hán hoá của Humanizer, skill Claude Code chuyên loại bỏ dấu vết AI trong văn bản tiếng Trung (khoảng 23.000 star trên GitHub): biên tập bài viết, bình luận, tài liệu có sẵn — gọt lời sáo rỗng, lặp…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Rà soát văn bản tiếng Trung, gọt dấu vết AI nhưng giữ nguyên sự thật"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/op7418/Humanizer-zh"
origin: "hunted"
market_id: 371
vault_id: 8
status: live
has_content: true
---

# Humanizer-zh

## Công việc

Rà soát văn bản tiếng Trung, gọt dấu vết AI nhưng giữ nguyên sự thật

## Mô tả

Bản Hán hoá của Humanizer, skill Claude Code chuyên loại bỏ dấu vết AI trong văn bản tiếng Trung (khoảng 23.000 star trên GitHub): biên tập bài viết, bình luận, tài liệu có sẵn — gọt lời sáo rỗng, lặp lại, diễn đạt khuôn mẫu — nhưng giữ nguyên sự kiện, mức độ chắc chắn và giọng văn của tác giả; câu nào ổn thì không sửa. Có 31 điểm kiểm tra theo 6 nhóm A–F (gồm nhóm F riêng cho tiếng Trung: định ngữ dài, '进行+động từ', câu bị động dồn, tứ tự ngữ排比...), kèm 18 case test và script kiểm tra cấu trúc. Giấy phép MIT.

## Điểm mạnh

- 31 điểm kiểm tra, có nhóm riêng cho lỗi văn phong tiếng Trung
- Nguyên tắc giữ sự thật lên trước: không bịa dữ liệu, không biến 'có thể' thành 'chắc chắn'
- Có bộ test 18 case và script kiểm tra, cài một lệnh npx skills add

## Từ khóa

Humanizer-zh, 去AI味, 去 AI 味, 润色, văn bản tiếng Trung, 中文润色

## Đầu vào

Đoạn văn bản hoặc file tiếng Trung cần gọt dấu vết AI

## Đầu ra

Bản viết lại cuối cùng, giữ sự kiện và giọng tác giả (câu ổn giữ nguyên)

## Giới hạn

Đây là hướng dẫn biên tập cho Agent, không phải chương trình phát hiện AI — không chứng minh được ai viết bài, không đảm bảo qua mọi bộ phát hiện AI; cần kiểm tra lại sự thật sau khi sửa; cần Claude Code hoặc công cụ hỗ trợ SKILL.md.

## Nguồn

https://github.com/op7418/Humanizer-zh

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (8165 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
