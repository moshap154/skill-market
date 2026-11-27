---
name: "security-audit"
description: "Skill kiểm tra an toàn code (代码安全审计) trong repo claude-code-skills-zh: quét code để tìm lỗ hổng bảo mật rồi đưa ra gợi ý sửa (漏洞扫描 + 修复建议). Dùng khi cần rà soát code trước khi phát hành hoặc khi nghi …"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Kiểm tra an toàn code, quét lỗ hổng và đề xuất cách sửa"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/security-audit"
origin: "hunted"
market_id: 487
vault_id: 507
status: live
has_content: true
---

# security-audit

## Công việc

Kiểm tra an toàn code, quét lỗ hổng và đề xuất cách sửa

## Mô tả

Skill kiểm tra an toàn code (代码安全审计) trong repo claude-code-skills-zh: quét code để tìm lỗ hổng bảo mật rồi đưa ra gợi ý sửa (漏洞扫描 + 修复建议). Dùng khi cần rà soát code trước khi phát hành hoặc khi nghi ngờ dự án có điểm yếu bảo mật.

## Điểm mạnh

- Tìm lỗ hổng trực tiếp trong code thay vì chỉ kiểm tra bề mặt
- Kèm gợi ý sửa cụ thể cho từng lỗ hổng tìm được

## Từ khóa

security-audit, bảo mật, 漏洞扫描, kiểm tra an toàn, 修复建议

## Đầu vào

Code hoặc dự án cần kiểm tra an toàn

## Đầu ra

Danh sách lỗ hổng tìm được kèm gợi ý sửa

## Giới hạn

Chỉ phân tích tĩnh trên code được cung cấp; không thay kiểm thử xâm nhập hay rà soát vận hành; kết quả cần chuyên gia bảo mật xác nhận trước khi coi là an toàn

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/security-audit

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1125 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
