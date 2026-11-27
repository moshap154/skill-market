---
name: "animation-qc-selfreview"
description: "Skill tiếng Nhật của tomotto1296 (repo ai-animation-skills) kiểm tra chất lượng animation làm bằng code trước khi gọi là hoàn thành: QC tự động phát hiện nhấp nháy (flicker), đứng hình (freeze), khung…"
group: "Sáng tạo & Media"
field: "Video & Hoạt hình"
job: "Kiểm tra tự động animation làm bằng code: nhấp nháy, đứng hình, khung đen/trắng trước khi gọi là xong"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/tomotto1296/ai-animation-skills/blob/main/skills/animation-qc-selfreview"
origin: "hunted"
market_id: 399
vault_id: 399
status: live
has_content: true
---

# animation-qc-selfreview

## Công việc

Kiểm tra tự động animation làm bằng code: nhấp nháy, đứng hình, khung đen/trắng trước khi gọi là xong

## Mô tả

Skill tiếng Nhật của tomotto1296 (repo ai-animation-skills) kiểm tra chất lượng animation làm bằng code trước khi gọi là hoàn thành: QC tự động phát hiện nhấp nháy (flicker), đứng hình (freeze), khung đen/trắng/đặc và nhấp nháy mạnh (strobing), với danh sách hiệu ứng cố ý đã khai báo trước để QC không báo nhầm; cộng thêm checklist tự review cho những thứ QC tự động không thấy được. Skill đúc kết từ 129 animation (166 lần thử) làm bằng Claude Opus 5.5 và được kiểm chứng trên 8 đề mới bằng Claude Sonnet 5.5. Thân skill viết bằng tiếng Nhật (phần description bằng tiếng Anh).

## Điểm mạnh

- QC tự động bắt flicker, freeze, khung đen/trắng/đặc và strobing trước khi giao
- Khai báo trước hiệu ứng cố ý nên QC không báo nhầm hiệu ứng chủ đích thành lỗi
- Có checklist tự review cho phần QC tự động không nhìn ra được

## Từ khóa

animation-qc-selfreview, animation, QC, kiểm tra chất lượng, flicker, video

## Đầu vào

Video/khung hình animation và danh sách hiệu ứng cố ý đã khai báo

## Đầu ra

Báo cáo QC (lỗi flicker/freeze/khung lỗi) kèm kết quả tự review

## Giới hạn

Script viết trên Windows 11, có thể lệch đường dẫn/font trên hệ khác; tác giả ghi nhận QC từng bỏ sót một đoạn đứng hình thật 2 giây, và kiểm chứng chỉ trên 8 đề mới.

## Nguồn

https://github.com/tomotto1296/ai-animation-skills/blob/main/skills/animation-qc-selfreview

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (7533 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
