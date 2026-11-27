---
name: "dispatching-parallel-agents"
description: "Dùng khi có từ 2 việc độc lập trở lên mà không chia sẻ trạng thái hay phụ thuộc thứ tự: nhóm lỗi theo từng lĩnh vực độc lập, giao mỗi agent một phạm vi hẹp với mục tiêu, ràng buộc và đầu ra rõ ràng, p…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Chia việc độc lập cho nhiều sub-agent chạy song song"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md"
origin: "hunted"
market_id: 220
vault_id: 101
status: live
has_content: true
---

# dispatching-parallel-agents

## Công việc

Chia việc độc lập cho nhiều sub-agent chạy song song

## Mô tả

Dùng khi có từ 2 việc độc lập trở lên mà không chia sẻ trạng thái hay phụ thuộc thứ tự: nhóm lỗi theo từng lĩnh vực độc lập, giao mỗi agent một phạm vi hẹp với mục tiêu, ràng buộc và đầu ra rõ ràng, phát tất cả lệnh điều động trong cùng một phản hồi để chạy song song, rồi rà soát, kiểm tra xung đột và chạy toàn bộ test suite để tích hợp.

## Điểm mạnh

- Mỗi agent chỉ nhận đúng bối cảnh cần thiết, giữ bối cảnh phiên chính cho việc điều phối
- Nhiều lỗi độc lập được điều tra cùng lúc thay vì lần lượt chờ nhau
- Có quy tắc rõ khi nào không dùng: lỗi liên quan nhau, cần hiểu toàn hệ thống, agent sẽ can thiệp lẫn nhau

## Từ khóa

sub-agent, song song, điều động, đa nhiệm, phân công

## Đầu vào

Danh sách các lỗi/việc độc lập, mỗi cái thuộc một lĩnh vực riêng

## Đầu ra

Từng việc đã sửa xong kèm tóm tắt nguyên nhân; toàn bộ test suite xanh sau tích hợp

## Giới hạn

Chỉ dùng cho việc độc lập, không chia sẻ trạng thái; cần công cụ sub-agent; phải tự kiểm tra xung đột sau khi các agent trả về

## Nguồn

https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6051 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
