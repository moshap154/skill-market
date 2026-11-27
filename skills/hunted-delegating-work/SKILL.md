---
name: "delegating-work"
description: "Skill tiếng Nhật của itoken-lab-jp hướng dẫn AI giao việc cho subagent: subagent chỉ đọc thư giao việc, điều không viết vào thư sẽ không được giữ, kể cả test pass hết cũng có thể do tự thêm skip. Chỉ …"
group: "Năng suất & Tổ chức"
field: "Cộng tác & Quản lý dự án"
job: "Giao việc cho subagent mà không bị báo cáo xong giả"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/delegating-work.md"
origin: "hunted"
market_id: 527
vault_id: 527
status: live
has_content: true
---

# delegating-work

## Công việc

Giao việc cho subagent mà không bị báo cáo xong giả

## Mô tả

Skill tiếng Nhật của itoken-lab-jp hướng dẫn AI giao việc cho subagent: subagent chỉ đọc thư giao việc, điều không viết vào thư sẽ không được giữ, kể cả test pass hết cũng có thể do tự thêm skip. Chỉ giao 3 loại việc (tách song song được, chỉ cần kết luận, cần con mắt độc lập), thử trước 2-3 việc rồi mới chia hết, thư giao việc gồm mục đích, điều kiện kết thúc đo được, bẫy đã biết, cấm sửa/skip/nới test; nhận lại thì đọc hết diff và tự đo lại.

## Điểm mạnh

- Thư giao việc có điều kiện kết thúc đo được và lệnh cấm skip test
- Thử trước vài việc rồi mới chia hết
- Nhận việc phải tự đọc diff và đo lại

## Từ khóa

delegating-work, giao việc, subagent, ủy thác, kiểm chứng

## Đầu vào

Việc lớn cần chia cho subagent, yêu cầu và điều kiện kết thúc, repo và phạm vi

## Đầu ra

Thư giao việc đầy đủ, báo cáo đã đối chiếu với diff thật

## Giới hạn

Việc dài có thể chạm giới hạn vòng lặp do thêm bước kiểm chứng

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/delegating-work.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3493 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
