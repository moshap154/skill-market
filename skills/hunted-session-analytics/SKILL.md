---
name: "session-analytics"
description: "Skill tự tối ưu hoá cách dùng agent lập trình: phân tích nhật ký phiên cục bộ 7 ngày qua (Claude Code, Codex và các công cụ khác), củng cố đường đi hay dùng, cắt đường không dùng, kiểm chứng lại lời k…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Phân tích nhật ký phiên làm việc 7 ngày qua của agent lập trình để cải tiến cách làm việc theo vòng tuần."
region: "Đài Loan"
language: "en"
source_url: "https://github.com/shihchengwei-lab/session-analytics"
origin: "hunted"
market_id: 345
vault_id: 265
status: live
has_content: true
---

# session-analytics

## Công việc

Phân tích nhật ký phiên làm việc 7 ngày qua của agent lập trình để cải tiến cách làm việc theo vòng tuần.

## Mô tả

Skill tự tối ưu hoá cách dùng agent lập trình: phân tích nhật ký phiên cục bộ 7 ngày qua (Claude Code, Codex và các công cụ khác), củng cố đường đi hay dùng, cắt đường không dùng, kiểm chứng lại lời khuyên cũ khi đổi model — để thiết lập ngày càng tốt lên mà không phình to. Hai chế độ: truy vấn (“phiên nào hỏng tuần này?”, “tỉ lệ thành công là bao nhiêu?”…) chỉ báo cáo, không thay đổi gì; và xem xét hàng tuần: viết lại khối quy tắc tối đa 10 dòng trong CLAUDE.md / AGENTS.md / GEMINI.md kèm bằng chứng và ngày tháng, đề xuất sửa harness (hook, biến môi trường, quyền) thay vì thêm quy tắc chữ, rà soát skill đã cài theo số lần gọi thực tế (kể cả gắn cờ skill không bao giờ được gọi để tắt đi). Chỉ đọc dữ liệu cục bộ, không tải lên đâu; script chỉ dùng thư viện chuẩn Python, không cần mạng; có README繁體中文. Giấy phép MIT.

## Điểm mạnh

- Mọi đề xuất đều gắn bằng chứng từ nhật ký thật, mẫu mỏng tự thú nhận thay vì suy ra xu hướng từ ít dữ liệu
- Khối quy tắc tự tái cấu trúc hàng tuần — giữ, viết lại, gộp hay loại bỏ — tối đa 10 dòng nên không phình to theo thời gian
- Chạy hoàn toàn cục bộ, không tải dữ liệu lên; script Python chuẩn, không phụ thuộc ngoài, kèm 29 bài test

## Từ khóa

session-analytics, phân tích phiên, session log, tự cải tiến, Claude Code, Codex

## Đầu vào

Nhật ký phiên cục bộ của Claude Code (~/.claude/projects, dữ liệu /insights) hoặc Codex (~/.codex/sessions); câu hỏi về tuần vừa qua

## Đầu ra

Báo cáo tuần (kết quả, điểm vướng, gợi ý kèm bằng chứng); đề xuất sửa khối quy tắc tối đa 10 dòng và vệ sinh skill đã cài — chỉ áp dụng sau khi người dùng duyệt

## Giới hạn

Cần chạy /insights ít nhất một lần để có dữ liệu đánh giá chất lượng Claude Code; vòng lặp nhiều tuần chưa được kiểm chứng thực tế ngoài đời (tác giả ghi là bản v0, cần theo dõi); dữ liệu chứa prompt và đường dẫn dự án — giữ riêng tư; giấy phép MIT.

## Nguồn

https://github.com/shihchengwei-lab/session-analytics

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (14631 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
