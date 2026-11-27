---
name: "vi-locale"
description: "Skill của bộ qstack: làm form, kiểm tra dữ liệu, tìm kiếm, sắp xếp và định dạng đúng thói quen người Việt (vi-VN) — tên, địa chỉ, số điện thoại, tiền, ngày tháng và dấu tiếng Việt. Skill quy định lưu …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Làm form, kiểm tra, tìm kiếm và định dạng dữ liệu đúng cách người Việt dùng (tên, địa chỉ, SĐT, tiền, ngày)"
region: "Việt Nam"
language: "en"
source_url: "https://github.com/quanvu309/qstack/blob/main/skills/design/vi-locale/SKILL.md"
origin: "hunted"
market_id: 282
vault_id: 372
status: live
has_content: true
---

# vi-locale

## Công việc

Làm form, kiểm tra, tìm kiếm và định dạng dữ liệu đúng cách người Việt dùng (tên, địa chỉ, SĐT, tiền, ngày)

## Mô tả

Skill của bộ qstack: làm form, kiểm tra dữ liệu, tìm kiếm, sắp xếp và định dạng đúng thói quen người Việt (vi-VN) — tên, địa chỉ, số điện thoại, tiền, ngày tháng và dấu tiếng Việt. Skill quy định lưu chuỗi ở dạng NFC, gấp dấu (fold) khi tìm kiếm/slug nhưng không gấp khi lưu, sắp xếp bằng Intl.Collator('vi'), xử lý gõ Telex/VNI (không sửa giá trị khi đang composition, không coi Backspace của bộ gõ là xóa); tên người dùng một ô 'Họ và tên', chào bằng tên gọi, viết tắt avatar từ tên gọi; địa chỉ theo 2 cấp sau 01/07/2025 (34 tỉnh/thành phố rồi xã/phường, không còn quận/huyện); SĐT di động 10 số, bàn 11 số đầu 02, hotline 1800/1900; tiền VND không có đơn vị lẻ, ngày giờ định dạng vi-VN.

## Điểm mạnh

- Bao quát đủ các bẫy dữ liệu tiếng Việt: NFC/NFD, gấp dấu giữ nguyên 'đ', sắp xếp theo Collator('vi'), gõ Telex/VNI
- Địa chỉ cập nhật đúng cải cách 2 cấp từ 01/07/2025 (34 tỉnh/thành, xã/phường, bỏ quận/huyện) kèm nguồn luật dẫn rõ
- Quy tắc tên, SĐT, tiền, ngày đều có dạng đúng/sai cụ thể và cách kiểm tra bằng dữ liệu Việt thật

## Từ khóa

vi-locale, qstack, locale vi-VN, địa chỉ Việt Nam, số điện thoại, tiền VND, NFC, Telex, VNI

## Đầu vào

Tính năng cần làm (form, tìm kiếm, sắp xếp, định dạng); dữ liệu người Việt thật để kiểm tra (tên, địa chỉ, SĐT, tiền, ngày)

## Đầu ra

Hướng dẫn triển khai form/kiểm tra/tìm kiếm/định dạng đúng chuẩn vi-VN, kèm ca kiểm tra bằng dữ liệu tiếng Việt có dấu và chữ 'đ'

## Giới hạn

Các quy tắc về địa chỉ, SĐT, tiền tệ dựa trên nguồn luật và kiểm tra ngày 02/11/2026 trong skill — luật thay đổi thì cần cập nhật; tiền VND làm tròn lặng khi dùng Intl currency nên phải lưu số nguyên.

## Nguồn

https://github.com/quanvu309/qstack/blob/main/skills/design/vi-locale/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6024 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
