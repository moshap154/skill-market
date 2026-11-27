---
name: "diagnosing-superpowers"
description: "Dùng khi một phiên superpowers trục trặc và đối tác muốn biết vì sao — làm lặp, bỏ qua kế hoạch, skill không kích hoạt, quá chậm hay quá tốn kém. Quy trình: ghi nhận vấn đề, xác định file bản ghi phiê…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Chẩn đoán phiên superpowers gặp sự cố từ bản ghi hội thoại"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/diagnosing-superpowers/SKILL.md"
origin: "hunted"
market_id: 223
vault_id: 99
status: live
has_content: true
---

# diagnosing-superpowers

## Công việc

Chẩn đoán phiên superpowers gặp sự cố từ bản ghi hội thoại

## Mô tả

Dùng khi một phiên superpowers trục trặc và đối tác muốn biết vì sao — làm lặp, bỏ qua kế hoạch, skill không kích hoạt, quá chậm hay quá tốn kém. Quy trình: ghi nhận vấn đề, xác định file bản ghi phiên trên đĩa, cho 7 analyst sub-agent chạy song song theo từng chiều (dòng thời gian skill, tuân thủ kế hoạch, việc lặp, vấp váp, bằng chứng chất lượng, xung đột yêu cầu, chi phí–thời gian), rồi báo cáo kèm trích dẫn path:line; chỉ báo cáo, không tự chẩn đoán hay đề xuất sửa skill.

## Điểm mạnh

- Mọi kết luận đều có trích dẫn path:line từ bản ghi thật, không dựa vào trí nhớ
- 7 chiều phân tích chạy song song, bao quát từ tuân thủ kế hoạch tới chi phí token
- Có quy tắc an toàn dữ liệu: chỉ đọc bản ghi, xuất gói báo cáo đã che thông tin nhạy cảm và chỉ khi được yêu cầu

## Từ khóa

chẩn đoán, superpowers, bản ghi phiên, phân tích, sự cố, báo cáo

## Đầu vào

Mô tả sự cố của phiên superpowers (mã phiên hoặc đường dẫn bản ghi)

## Đầu ra

Báo cáo chẩn đoán có trích dẫn bằng chứng; có thể kèm issue GitHub hoặc gói dữ liệu đã che nhạy cảm (khi được yêu cầu)

## Giới hạn

Chỉ báo cáo, không chẩn đoán nguyên nhân hay đề xuất sửa skill; không bao giờ sửa/xóa file bản ghi; mọi số liệu phải lấy từ bản ghi hoặc lệnh đã chạy

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/diagnosing-superpowers/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6919 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
