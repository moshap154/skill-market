---
name: "task-tracking"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI quản lý việc cần làm ở repo/thư mục không dùng công cụ ticket (Issue, Linear…): ghi mọi việc vào một file TODO.md, mỗi việc 1 dòng bằng động từ kèm 1 dòng “x…"
group: "Năng suất & Tổ chức"
field: "Năng suất cá nhân"
job: "Giữ danh sách việc cần làm trong TODO.md để AI không làm rơi việc dặn qua nhiều ngày"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/task-tracking.md"
origin: "hunted"
market_id: 393
vault_id: 393
status: live
has_content: true
---

# task-tracking

## Công việc

Giữ danh sách việc cần làm trong TODO.md để AI không làm rơi việc dặn qua nhiều ngày

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI quản lý việc cần làm ở repo/thư mục không dùng công cụ ticket (Issue, Linear…): ghi mọi việc vào một file TODO.md, mỗi việc 1 dòng bằng động từ kèm 1 dòng “xong là khi nào” có thể kiểm chứng được (ví dụ: test nào chạy qua). Việc chưa làm trong ngày được ghi ngay lúc nó xuất hiện thay vì để cuối buổi, việc chờ người/dữ liệu được ghi “đang chờ — chờ ai, chờ cái gì, đến khi nào”, và sang phiên mới AI đối chiếu TODO.md với thực tế (nội dung thư mục, lịch sử git) rồi mới làm tiếp.

## Điểm mạnh

- Việc dặn trong lúc trò chuyện không bị rơi khi sang phiên mới — ghi ngay vào TODO.md thay vì chỉ hứa trong câu trả lời
- Mỗi việc có tiêu chí xong kiểm chứng được, nên biết chắc việc nào đã xong
- Dùng được cả trong thư mục tài liệu không dùng git, không cần công cụ ticket

## Từ khóa

task-tracking, TODO, quản lý công việc, theo dõi việc, TODO.md

## Đầu vào

Ghi chú cuộc họp, yêu cầu trong trò chuyện (kèm hạn “trong tuần này”, “sau này”, “đợi phản hồi”)

## Đầu ra

File TODO.md: 1 dòng 1 việc kèm tiêu chí xong và trạng thái chờ/xong

## Giới hạn

Không có bước sắp xếp thứ tự ưu tiên hay quyết định cắt việc khi quá tải; không dùng ở nơi đã quản lý việc bằng Issue/ticket (khi đó skill không tạo TODO.md).

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/task-tracking.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4142 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
