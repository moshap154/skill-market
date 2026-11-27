---
name: "ux-lint"
description: "Skill lint UX cho AI coding agent: đo giao diện trong trình duyệt thật rồi đối chiếu từng vấn đề với nguyên tắc UX đằng sau nó (Fitts, Hick, Von Restorff, Gestalt, Doherty và 25 nguyên tắc khác), trả …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Kiểm tra UX bằng cách đo giao diện trong trình duyệt thật"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/Walma-Labs/ux-lint"
origin: "hunted"
market_id: 249
vault_id: 370
status: live
has_content: true
---

# ux-lint

## Công việc

Kiểm tra UX bằng cách đo giao diện trong trình duyệt thật

## Mô tả

Skill lint UX cho AI coding agent: đo giao diện trong trình duyệt thật rồi đối chiếu từng vấn đề với nguyên tắc UX đằng sau nó (Fitts, Hick, Von Restorff, Gestalt, Doherty và 25 nguyên tắc khác), trả về bản sửa dưới dạng code. Đo được kích thước/vị trí vùng bấm (chuẩn WCAG 2.2), nút chính cạnh tranh nhau, nhãn form đặt sai chỗ, popup che trang, phần tử không bấm được, tràn ngang trên mobile, FCP/LCP, layout shift, độ trễ click; cộng thêm đọc code để bắt trạng thái loading thiếu, dark pattern (đồng ý mặc định, tạo gấp giả). Mỗi nguyên tắc được ghi rõ mức độ bằng chứng kèm nguồn nghiên cứu gốc. Ba chế độ: review, check (pass/fail trước khi merge), fix (tự sửa rồi đo lại). Cần Playwright để đo bằng trình duyệt; không có thì vẫn chạy được như review code tĩnh. MIT.

## Điểm mạnh

- Đo số liệu thật trong trình duyệt thay vì đoán từ code nguồn
- Mỗi lỗi gắn với nguyên tắc UX và mức độ bằng chứng nghiên cứu, tránh gắn nhãn sai kiểu 'vi phạm luật Miller'
- Trả về bản sửa dạng code và chế độ fix tự đo lại trước/sau

## Từ khóa

ux, kiểm tra giao diện, playwright, wcag, accessibility, frontend

## Đầu vào

URL hoặc đường dẫn tới trang cần kiểm tra; lệnh click cần đo nếu muốn đo độ trễ tương tác

## Đầu ra

Báo cáo UX xếp hạng theo mức độ, kèm vị trí, bằng chứng đo được và bản sửa dạng code; bảng pass/fail ở chế độ check

## Giới hạn

Đo bằng trình duyệt cần cài Playwright + Chromium; không có thì chỉ review tĩnh; không tự click gì trừ khi được chỉ định --click

## Nguồn

https://github.com/Walma-Labs/ux-lint

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (5641 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
