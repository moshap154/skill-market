---
name: "ticket-writing"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI viết và chia spec, hội thoại, ghi chú thành ticket công việc (GitHub Issue, Jira, Backlog, Redmine…): trước khi viết phải đọc cả bình luận của ticket gốc và …"
group: "Tự động hoá ứng dụng"
field: "Quản lý dự án"
job: "Chia spec và trao đổi thành ticket Issue/Jira mà người khác nhặt lên làm được ngay"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/ticket-writing.md"
origin: "hunted"
market_id: 394
vault_id: 394
status: live
has_content: true
---

# ticket-writing

## Công việc

Chia spec và trao đổi thành ticket Issue/Jira mà người khác nhặt lên làm được ngay

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI viết và chia spec, hội thoại, ghi chú thành ticket công việc (GitHub Issue, Jira, Backlog, Redmine…): trước khi viết phải đọc cả bình luận của ticket gốc và PR liên quan cùng code, lấy quyết định mới nhất khi có mâu thuẫn; mỗi ticket là một đơn vị mà người dùng kiểm chứng được từ đầu đến cuối (không chia theo tầng DB/API/màn hình), kèm lý do, việc làm, điều kiện xong, ticket phải xong trước và việc chưa quyết; đổi tên trên diện rộng làm theo thứ tự thêm → chuyển → xóa để không ngừng hệ thống. Ticket mới được liên kết về ticket gốc, không đóng hay sửa ticket gốc.

## Điểm mạnh

- Đọc cả bình luận và PR trước khi viết nên không bỏ sót quyết định đã bị lật lại
- Chia ticket theo đơn vị kiểm chứng được từ đầu đến cuối, mỗi ticket có điều kiện xong và thứ tự rõ ràng
- Đổi tên diện rộng theo thứ tự thêm → chuyển → xóa, giữ hệ thống chạy được ở mọi bước

## Từ khóa

ticket-writing, Issue, Jira, ticket, chia việc, quản lý dự án

## Đầu vào

Spec, đoạn chat, ghi chú hoặc Issue gốc cần chia thành ticket

## Đầu ra

Các ticket (Issue/Jira…) có lý do, việc làm, điều kiện xong, ticket phụ thuộc và việc chưa quyết

## Giới hạn

Thử nghiệm dùng lệnh gh giả lập chứ chưa thử trên GitHub, Jira hay Backlog thật; đội đã có mẫu/luật ticket riêng nên dùng luật đó trước, skill chỉ là mặc định khi chưa có luật.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/ticket-writing.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (5422 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
