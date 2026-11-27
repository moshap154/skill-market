---
name: "executing-plans"
description: "Tự thực thi kế hoạch triển khai từng task trong phiên hiện tại, không dùng sub-agent cho từng task: làm việc trong worktree riêng, ghi sổ tiến độ (ledger) để khôi phục sau khi nén bối cảnh, tuân thủ t…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Tự thực thi kế hoạch triển khai trong phiên hiện tại"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md"
origin: "hunted"
market_id: 217
vault_id: 109
status: live
has_content: true
---

# executing-plans

## Công việc

Tự thực thi kế hoạch triển khai trong phiên hiện tại

## Mô tả

Tự thực thi kế hoạch triển khai từng task trong phiên hiện tại, không dùng sub-agent cho từng task: làm việc trong worktree riêng, ghi sổ tiến độ (ledger) để khôi phục sau khi nén bối cảnh, tuân thủ từng bước TDD (test đỏ rồi xanh), ghi lại mọi quyết định lệch khỏi kế hoạch, và cuối cùng giao cho một reviewer mới kiểm tra toàn bộ nhánh.

## Điểm mạnh

- Tiết kiệm bối cảnh: chỉ tốn một phiên làm việc cộng một lần review cuối thay vì một sub-agent mỗi task
- Sổ ledger ghi tiến độ và quyết định giúp tiếp tục đúng chỗ sau khi bối cảnh bị nén
- Mọi task đều phải qua test đỏ–xanh và hợp đồng hoàn thành có bằng chứng trước khi đánh dấu xong

## Từ khóa

thực thi kế hoạch, tdd, ledger, worktree, triển khai, sub-agent

## Đầu vào

Kế hoạch triển khai đã viết (kèm spec) và phương thức thực thi nội tuyến đã được chọn

## Đầu ra

Các task đã hoàn thành từng cái một, có commit, test xanh và sổ ledger; nhánh đã qua review cuối

## Giới hạn

Chỉ dùng khi đối tác đã chọn thực thi nội tuyến hoặc không có công cụ sub-agent; 4 trường hợp phải dừng hỏi: thao tác không thể đảo ngược, nhạy cảm bảo mật, tác dụng ngoài worktree, kế hoạch hỏng hoàn toàn

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (18257 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
