---
name: "WHY"
description: "Skill giúp agent lập trình ngừng lặp lại cách sửa không trúng nguyên nhân, có bản tiếng Anh và bản繁體中文 đầy đủ (SKILL.zh-TW.md). Khi bị chặn hoặc muốn đi vòng qua kiểm tra thì trả lời 3 câu hỏi (mục đí…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Xem xét lại nguyên nhân trước khi làm lại việc đã sửa hỏng, mọi lý do đều phải có bằng chứng."
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/leeyude/why"
origin: "hunted"
market_id: 344
vault_id: 178
status: live
has_content: true
---

# WHY

## Công việc

Xem xét lại nguyên nhân trước khi làm lại việc đã sửa hỏng, mọi lý do đều phải có bằng chứng.

## Mô tả

Skill giúp agent lập trình ngừng lặp lại cách sửa không trúng nguyên nhân, có bản tiếng Anh và bản繁體中文 đầy đủ (SKILL.zh-TW.md). Khi bị chặn hoặc muốn đi vòng qua kiểm tra thì trả lời 3 câu hỏi (mục đích — ai nhận được gì; kiểm tra đang bảo vệ cái gì; thế nào là tiến triển) rồi ghi 3 dòng vào ghi chú, không cần báo cáo. Khi thật sự phải làm lại (đóng băng lại quy cách, gửi lại, chạy lại phần hỏng, làm lại việc đã bị trả về) thì viết WHY.md 10 câu hỏi rồi đưa cho một model khác họ (chỉ đọc) chấm “過” (đạt) hoặc “不夠深” (chưa đủ sâu) kèm 6 dòng nhận xét. Repo kèm thiết kế hook và chuẩn chấm; model thẩm định và hook chặn tự động phải tự cấu hình — skill không chặn tự động. Dùng cho Claude Code và Codex. Giấy phép MIT + Commons Clause (không được bán lại skill).

## Điểm mạnh

- Mọi “vì sao” đều gắn bằng chứng (tệp, dòng, lần chạy), không đoán mò
- Hai mức độ: 3 câu hỏi nhanh khi bị chặn, 10 câu hỏi + thẩm định độc lập khi làm lại thật
- Có bản繁體中文 đầy đủ, dùng được ngay cho nhóm viết tiếng Hoa

## Từ khóa

WHY, nguyên nhân gốc, root cause, làm lại, phồn thể, đánh giá lại

## Đầu vào

Việc sửa đang lặp lại thất bại, việc bị trả lại cần làm lại, hoặc ý định đi vòng qua kiểm tra, cổng kiểm soát hay bài test hỏng

## Đầu ra

Ba dòng trả lời trong ghi chú (khi bị chặn) hoặc tệp WHY.md 10 câu hỏi kèm phán quyết 過 / 不夠深 từ model thẩm định khác họ

## Giới hạn

Không dùng cho sửa nhỏ một lần, truy vấn thuần túy hay xử lý sự cố khẩn cấp (xử lý sự cố trước, xem xét sau); model thẩm định và hook chặn tự động phải tự cấu hình — skill không chặn tự động; MIT + Commons Clause: không được bán lại skill.

## Nguồn

https://github.com/leeyude/why

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6863 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
