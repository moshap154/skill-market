---
name: "playwright-browser"
description: "Skill cho Claude Code một trình duyệt chạy nền bằng Playwright, có README繁體中文: chụp màn hình desktop/tablet/mobile (toàn trang hoặc một phần tử, nhiều trang một lượt), kiểm tra sức khoẻ frontend (lỗi …"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Cho Claude Code một trình duyệt chạy nền để chụp màn hình, kiểm tra sức khoẻ frontend và chạy luồng thao tác."
region: "Đài Loan"
language: "en"
source_url: "https://github.com/AndyShiu/claude-skill-playwright-browser"
origin: "hunted"
market_id: 347
vault_id: 245
status: live
has_content: true
---

# playwright-browser

## Công việc

Cho Claude Code một trình duyệt chạy nền để chụp màn hình, kiểm tra sức khoẻ frontend và chạy luồng thao tác.

## Mô tả

Skill cho Claude Code một trình duyệt chạy nền bằng Playwright, có README繁體中文: chụp màn hình desktop/tablet/mobile (toàn trang hoặc một phần tử, nhiều trang một lượt), kiểm tra sức khoẻ frontend (lỗi console, API 4xx/5xx, ảnh và link hỏng, tràn layout mobile kèm phần tử gây ra, accessibility bằng axe, hiệu năng LCP/CLS), so sánh hình ảnh trước/sau khi sửa CSS, chạy luồng thao tác (đăng nhập, bấm menu, điền form, lật trang, kiểm chứng) kèm ảnh từng bước và tự chụp khi lỗi. Trang cần đăng nhập thì người dùng tự đăng nhập một lần, skill dùng lại phiên (mật khẩu không bao giờ lưu). Cần Node.js 18+ và khoảng 150MB cho Chromium. Giấy phép MIT.

## Điểm mạnh

- Chụp đúng khổ iPhone thật 390×844, thứ mà Chrome của người dùng không mô phỏng được dưới khoảng 500px
- Kiểm tra sức khoẻ toàn diện: console, API, ảnh/link, tràn layout, accessibility, hiệu năng — trong một lần chạy
- Phiên đăng nhập dùng lại được mà mật khẩu không bao giờ lưu; có thể biến luồng thao tác thành Playwright Test chạy CI

## Từ khóa

playwright-browser, Playwright, chụp màn hình, kiểm tra frontend, visual regression, E2E

## Đầu vào

URL trang hoặc dự án cần kiểm tra; yêu cầu bằng lời thường (chụp màn hình, kiểm tra trang thanh toán, tái hiện lỗi nút Submit…); phiên đăng nhập đã lưu nếu trang cần đăng nhập

## Đầu ra

Ảnh chụp màn hình các khổ máy; báo cáo kiểm tra sức khoẻ (lỗi console/API, ảnh/link hỏng, tràn layout, axe, LCP/CLS); ảnh so sánh trước/sau; Playwright Test khi yêu cầu

## Giới hạn

Cần Node.js 18+ và tải Chromium khoảng 150MB lần đầu; ảnh chụp và file tạm trong thư mục temp bị xoá sau 7 ngày; chi phí token khoảng 5k–40k mỗi lần dùng tuỳ tác vụ; giấy phép MIT.

## Nguồn

https://github.com/AndyShiu/claude-skill-playwright-browser

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (14659 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
