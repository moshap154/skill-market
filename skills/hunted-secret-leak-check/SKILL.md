---
name: "secret-leak-check"
description: "Skill tiếng Hàn (beautifulsoup.dev) kiểm tra trước khi 커밋 (commit) hoặc 공개 (public) xem có lẫn API 키 (API key), 토큰 (token), 비밀번호 (mật khẩu), 개인 메일 주소 (địa chỉ email cá nhân) hay không."
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Quét API key, token, mật khẩu trước khi commit hoặc public"
region: "Hàn Quốc"
language: "ko"
source_url: "https://beautifulsoup.dev/skills/secret-leak-check"
origin: "hunted"
market_id: 549
vault_id: 549
status: live
has_content: true
---

# secret-leak-check

## Công việc

Quét API key, token, mật khẩu trước khi commit hoặc public

## Mô tả

Skill tiếng Hàn (beautifulsoup.dev) kiểm tra trước khi 커밋 (commit) hoặc 공개 (public) xem có lẫn API 키 (API key), 토큰 (token), 비밀번호 (mật khẩu), 개인 메일 주소 (địa chỉ email cá nhân) hay không.

## Điểm mạnh

- Bắt đúng 4 loại rò rỉ hay gặp: API key, token, mật khẩu, email cá nhân
- Chạy ngay trước commit/public nên chặn kịp trước khi lộ
- Phạm vi rõ: quét nội dung sắp commit hoặc công khai

## Từ khóa

secret-leak-check, API 키, secret, bảo mật, rò rỉ, commit

## Đầu vào

Nội dung sắp commit hoặc công khai (code, file, diff)

## Đầu ra

Danh sách API key, token, mật khẩu, email cá nhân bị lẫn (nếu có)

## Giới hạn

Chỉ tìm và báo, không tự xóa hay xoay (rotate) secret đã lộ; secret đã từng commit lên lịch sử git thì cần xử lý thêm ngoài phạm vi skill

## Nguồn

https://beautifulsoup.dev/skills/secret-leak-check

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1784 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
