---
name: "cold-read"
description: "Skill tiếng Nhật của itoken-lab-jp: AI viết bài thường hiểu ngầm bối cảnh nên tự soát không thấy chỗ khó hiểu; cold-read bắt một subagent khác chỉ đọc đúng bản sao bài viết, không đọc hội thoại hay fi…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Cho người lạ đọc thử bài viết để tìm chỗ khó hiểu"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/cold-read.md"
origin: "hunted"
market_id: 516
vault_id: 526
status: live
has_content: true
---

# cold-read

## Công việc

Cho người lạ đọc thử bài viết để tìm chỗ khó hiểu

## Mô tả

Skill tiếng Nhật của itoken-lab-jp: AI viết bài thường hiểu ngầm bối cảnh nên tự soát không thấy chỗ khó hiểu; cold-read bắt một subagent khác chỉ đọc đúng bản sao bài viết, không đọc hội thoại hay file chỉ dẫn, rồi chỉ ra chỗ không hiểu và chỗ không rõ liên quan. Sửa xong cho subagent khác nữa đọc lại từ đầu.

## Điểm mạnh

- Tách người đọc khỏi bối cảnh người viết, phát hiện thuật ngữ thiếu giải thích
- Đọc lại bằng subagent mới sau mỗi lần sửa

## Từ khóa

cold-read, đọc thử, soát bài, README, review

## Đầu vào

Bản thảo bài viết, README hoặc docs cần kiểm tra độ dễ hiểu

## Đầu ra

Danh sách chỗ khó hiểu, kèm bản đã sửa theo góp ý

## Giới hạn

Cần agent hỗ trợ subagent; không kiểm tra tính đúng chuyên môn

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/cold-read.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (656 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
