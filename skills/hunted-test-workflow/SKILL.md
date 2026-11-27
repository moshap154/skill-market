---
name: "test-workflow"
description: "Skill tiếng Nhật của itoken-lab-jp quy định quy trình cho AI viết test, chạy test và sửa lỗi: trước khi sửa phải chạy test một lần để biết test nào vốn đã hỏng và mất bao lâu; thêm test tái hiện lỗi v…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Bắt AI làm đúng quy trình test: chạy test trước, thêm test đỏ rồi mới sửa, cấm xóa test để qua"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/test-workflow.md"
origin: "hunted"
market_id: 397
vault_id: 397
status: live
has_content: true
---

# test-workflow

## Công việc

Bắt AI làm đúng quy trình test: chạy test trước, thêm test đỏ rồi mới sửa, cấm xóa test để qua

## Mô tả

Skill tiếng Nhật của itoken-lab-jp quy định quy trình cho AI viết test, chạy test và sửa lỗi: trước khi sửa phải chạy test một lần để biết test nào vốn đã hỏng và mất bao lâu; thêm test tái hiện lỗi và nhìn nó đỏ rồi mới sửa; trong lúc làm chỉ chạy test liên quan đến chỗ vừa đổi; sau khi test xanh phải chạy thử thật (CLI với giá trị biên, API trên server dev, chụp màn hình); và tuyệt đối không xóa test, bỏ qua (skip), thay bằng mock hay sửa kỳ vọng (kể cả cập nhật snapshot hàng loạt) chỉ để test qua — chỉ được làm vậy khi spec thay đổi. Tác giả thử trên 2 tình huống giả định (sửa lệch 1 yên tiền thuế, tăng tốc test) và ghi kết quả có/không có skill.

## Điểm mạnh

- Chặn lỗi kinh điển: sửa code mà không chạy test trước, và thêm test cùng lúc với sửa nên không biết test có bắt được lỗi không
- Trong lúc làm chỉ chạy test liên quan nên nhanh; sau khi xong vẫn bắt chạy thử thật, không chỉ tin test xanh
- Cấm xóa/skip/sửa kỳ vọng test để qua — test hỏng phải được báo cáo, không được giấu

## Từ khóa

test-workflow, test, TDD, kiểm thử, pytest, chạy test

## Đầu vào

Báo cáo lỗi hoặc code cần sửa, kèm bộ test của repo

## Đầu ra

Bản sửa kèm test tái hiện lỗi (đã thấy đỏ trước khi sửa) và kết quả chạy thử thật

## Giới hạn

Chỉ thử trên 2 tình huống nhỏ, mỗi tình huống 3 lần, trên Claude Sonnet; chỉ đo mức độ tuân thủ quy trình, không đo số lỗi hay số lần sửa lại giảm được.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/test-workflow.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4147 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
