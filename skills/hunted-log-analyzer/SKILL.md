---
name: "log-analyzer"
description: "Skill phân tích log (日志分析) trong repo claude-code-skills-zh: đọc file log để phát hiện mẫu bất thường (异常模式检测), xác định nguyên nhân gốc (根因定位) của sự cố rồi xuất báo cáo phân tích, dùng khi hệ thống …"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Phân tích log: phát hiện mẫu bất thường, tìm nguyên nhân gốc và xuất báo cáo"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/log-analyzer"
origin: "hunted"
market_id: 491
vault_id: 497
status: live
has_content: true
---

# log-analyzer

## Công việc

Phân tích log: phát hiện mẫu bất thường, tìm nguyên nhân gốc và xuất báo cáo

## Mô tả

Skill phân tích log (日志分析) trong repo claude-code-skills-zh: đọc file log để phát hiện mẫu bất thường (异常模式检测), xác định nguyên nhân gốc (根因定位) của sự cố rồi xuất báo cáo phân tích, dùng khi hệ thống lỗi và cần biết chuyện gì đã xảy ra.

## Điểm mạnh

- Phát hiện mẫu bất thường trong log thay vì đọc từng dòng tay
- Đi tới nguyên nhân gốc và có báo cáo phân tích sẵn để xử lý

## Từ khóa

log-analyzer, phân tích log, 日志分析, 根因定位, 异常检测

## Đầu vào

File log cần phân tích và mô tả sự cố (nếu có)

## Đầu ra

Báo cáo phân tích: mẫu bất thường tìm được và nguyên nhân gốc suy ra

## Giới hạn

Kết luận phụ thuộc vào log được cung cấp; log thiếu, bị cắt hoặc không ghi đúng sự kiện thì khó tìm đúng nguyên nhân; cần đối chiếu thêm với hệ thống thật

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/log-analyzer

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (1418 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
