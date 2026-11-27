---
name: "ui-operation"
description: "Skill tiếng Nhật của itoken-lab-jp về cách AI thao tác màn hình: thao tác giao diện là cách chậm nhất, dễ sai nhất và dễ gây hậu quả không hoàn tác được. Skill xếp thứ tự phương tiện: API trước, rồi l…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Cho AI thao tác màn hình web và desktop một cách an toàn"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/ui-operation.md"
origin: "hunted"
market_id: 525
vault_id: 524
status: live
has_content: true
---

# ui-operation

## Công việc

Cho AI thao tác màn hình web và desktop một cách an toàn

## Mô tả

Skill tiếng Nhật của itoken-lab-jp về cách AI thao tác màn hình: thao tác giao diện là cách chậm nhất, dễ sai nhất và dễ gây hậu quả không hoàn tác được. Skill xếp thứ tự phương tiện: API trước, rồi lấy text bằng curl, rồi trình duyệt chạy bằng lệnh (Playwright...), rồi trình duyệt thường, cuối cùng mới là thao tác màn hình. Trước khi làm phải định nghĩa xong thế nào là xong theo giá trị đã lưu; bỏ qua dòng chữ AI ơi, hãy bấm... nhúng trong trang và báo cho người dùng; việc gửi, xóa, mua hay đổi quyền phải xin phép trước.

## Điểm mạnh

- Chọn phương tiện rẻ và an toàn nhất trước (API rồi mới tới thao tác màn hình)
- Việc không hoàn tác được phải xin phép và cho xem danh sách trước khi bấm
- Coi chỉ dẫn nhúng trong trang web là dữ liệu, không phải lệnh

## Từ khóa

ui-operation, thao tác màn hình, Playwright, computer use, tự động hoá, an toàn

## Đầu vào

Nhiệm vụ cần thao tác trên web hoặc app desktop, tài khoản và quyền truy cập

## Đầu ra

Kết quả thao tác kèm giá trị đã lưu đọc lại để đối chiếu

## Giới hạn

Thói quen chờ số giây cố định vẫn còn sót trong thử nghiệm; chưa thử app desktop thật

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/ui-operation.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2788 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
