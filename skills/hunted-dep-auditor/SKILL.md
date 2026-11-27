---
name: "dep-auditor"
description: "Skill kiểm tra an toàn dependency (依赖安全审计) trong repo claude-code-skills-zh: quét các gói phụ thuộc của dự án để phát hiện lỗ hổng CVE (CVE 漏洞检测), gói đã lỗi thời (过期检查) và rủi ro về giấy phép (许可证风险)…"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Kiểm tra an toàn dependency: phát hiện CVE, gói lỗi thời và rủi ro giấy phép"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/dep-auditor"
origin: "hunted"
market_id: 493
vault_id: 487
status: live
has_content: true
---

# dep-auditor

## Công việc

Kiểm tra an toàn dependency: phát hiện CVE, gói lỗi thời và rủi ro giấy phép

## Mô tả

Skill kiểm tra an toàn dependency (依赖安全审计) trong repo claude-code-skills-zh: quét các gói phụ thuộc của dự án để phát hiện lỗ hổng CVE (CVE 漏洞检测), gói đã lỗi thời (过期检查) và rủi ro về giấy phép (许可证风险), dùng khi cần biết dự án có đang dùng gói không an toàn hay không.

## Điểm mạnh

- Một lần quét thấy cả ba rủi ro: CVE, gói lỗi thời và giấy phép
- Giúp quyết định nâng cấp hay thay gói trước khi lỗ hổng bị khai thác

## Từ khóa

dep-auditor, CVE, dependency, 依赖安全, giấy phép

## Đầu vào

Danh sách dependency của dự án (package.json, lockfile hoặc tương đương)

## Đầu ra

Báo cáo các gói có CVE, gói lỗi thời và rủi ro giấy phép

## Giới hạn

Kết quả dựa trên cơ sở dữ liệu CVE và thông tin giấy phép tại thời điểm quét; gói chưa có CVE công bố thì không phát hiện được; cần người quyết định nâng cấp hay thay thế

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/dep-auditor

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3578 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
