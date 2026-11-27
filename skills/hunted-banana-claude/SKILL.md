---
name: "banana-claude"
description: "Skill tạo ảnh cho Claude Code, đóng vai trò creative director chạy trên mô hình ảnh Gemini (Nano Banana 2.1 mặc định, cùng bản Lite và Pro): tạo ảnh, chỉnh sửa một điểm rõ ràng mà vẫn giữ nhận diện/hì…"
group: "Sáng tạo & Media"
field: "Thiết kế & Media"
job: "Tạo và chỉnh ảnh bằng mô hình Gemini (Nano Banana) trong Claude Code"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/AgriciDaniel/banana-claude"
origin: "hunted"
market_id: 245
vault_id: 83
status: live
has_content: true
---

# banana-claude

## Công việc

Tạo và chỉnh ảnh bằng mô hình Gemini (Nano Banana) trong Claude Code

## Mô tả

Skill tạo ảnh cho Claude Code, đóng vai trò creative director chạy trên mô hình ảnh Gemini (Nano Banana 2.1 mặc định, cùng bản Lite và Pro): tạo ảnh, chỉnh sửa một điểm rõ ràng mà vẫn giữ nhận diện/hình học/thương hiệu, tiếp tục phiên làm việc đã lưu, so sánh tối đa 3 prompt trên 3 tuyến mô hình, kiểm tra bản quyền/chính tả/bố cục của ảnh thành phẩm, và chèn chữ/logo khi cần chữ chính xác. Quy trình lập kế hoạch ngoại tuyến trước, cho xem prompt, model, ước tính chi phí rồi mới cần duyệt — một lần duyệt chỉ cho một lần gọi API trả phí. Cần Claude Code 2.1.199+, Python 3.11+ và Gemini API key của project Google AI có bật thanh toán; MIT.

## Điểm mạnh

- Lập kế hoạch và cho duyệt trước khi tốn tiền gọi API; mỗi lần duyệt chỉ cho một lần gọi
- So sánh nhiều prompt/mô hình trong một lần để chọn bản tốt nhất
- Có bước kiểm tra ảnh thật (chữ, crop, bố cục, quyền) trước khi giao

## Từ khóa

tạo ảnh, gemini, nano banana, chỉnh ảnh, hình ảnh ai

## Đầu vào

Mô tả ảnh cần tạo/chỉnh bằng lời; Gemini API key của project Google AI có bật thanh toán; ảnh tham chiếu nếu có

## Đầu ra

Ảnh đã tạo/chỉnh kèm file metadata; bảng so sánh các phương án; báo cáo kiểm tra ảnh

## Giới hạn

Tạo ảnh là dịch vụ trả phí theo API Gemini; chạy trên Linux/macOS, Windows cần WSL; không đảm bảo chính tả, hình học hay quyền sử dụng của ảnh sinh ra

## Nguồn

https://github.com/AgriciDaniel/banana-claude

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (5274 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
