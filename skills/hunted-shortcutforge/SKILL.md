---
name: "shortcutforge"
description: "Skill và CLI Python của nezumi0627/ShortcutForge: AI diễn giải ý định thành bản kế hoạch JSON có phiên bản, công cụ kiểm tra schema hành động, tham số và tham chiếu đầu ra rồi biên dịch thành file .sh…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Nhờ AI tạo Apple Shortcut từ bản mô tả JSON có kiểm tra"
region: "Nhật Bản"
language: "en"
source_url: "https://github.com/nezumi0627/ShortcutForge/blob/main/skills/shortcutforge/SKILL.md"
origin: "hunted"
market_id: 531
vault_id: 516
status: live
has_content: true
---

# shortcutforge

## Công việc

Nhờ AI tạo Apple Shortcut từ bản mô tả JSON có kiểm tra

## Mô tả

Skill và CLI Python của nezumi0627/ShortcutForge: AI diễn giải ý định thành bản kế hoạch JSON có phiên bản, công cụ kiểm tra schema hành động, tham số và tham chiếu đầu ra rồi biên dịch thành file .shortcut (binary plist) cho iPhone/iPad. Có danh mục tra cứu 2.501 action theo từng phiên bản iOS 17, 18, 26, 27 với hướng dẫn tiếng Anh và tiếng Nhật, cùng lệnh build, validate, inspect và sign. File tạo ra chưa ký nên chưa nhập được vào Shortcuts; sign mặc định dùng dịch vụ Shortcuty (tải toàn bộ shortcut lên dịch vụ), hoặc HubSign hay trình ký local của Apple trên macOS.

## Điểm mạnh

- Kiểm tra action và tham số theo đúng phiên bản iOS đích
- Danh mục 2.501 action có cả hướng dẫn tiếng Nhật
- Tách rõ AI diễn giải ý định và phần biên dịch xác định bằng Python

## Từ khóa

shortcutforge, Apple Shortcuts, iOS, shortcut, tự động hoá iPhone, JSON

## Đầu vào

Mô tả shortcut muốn tạo bằng lời, phiên bản iOS của máy đích, tên và các bước

## Đầu ra

File .shortcut đã validate và inspect, kèm trạng thái đã ký hay chưa ký

## Giới hạn

File chưa ký thì không nhập được vào Shortcuts; sign mặc định tải shortcut lên Shortcuty; tương thích iOS 17/18/26 chưa kiểm chứng đầy đủ

## Nguồn

https://github.com/nezumi0627/ShortcutForge/blob/main/skills/shortcutforge/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4444 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
