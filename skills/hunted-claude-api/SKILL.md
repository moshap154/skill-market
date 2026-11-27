---
name: "claude-api"
description: "Tài liệu tham khảo cho Claude API và Anthropic SDK: mã model, giá, tham số, streaming, tool use, MCP, agent, caching, đếm token và di chuyển model. Hỗ trợ Python, TypeScript, C#, Go, Java, PHP, Ruby v…"
group: "Tự động hoá ứng dụng"
field: "Ứng dụng phổ biến"
job: "Tra cứu và viết code dùng Claude API / Anthropic SDK"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/anthropics/skills/blob/main/skills/claude-api/SKILL.md"
origin: "hunted"
market_id: 210
vault_id: 91
status: live
has_content: true
---

# claude-api

## Công việc

Tra cứu và viết code dùng Claude API / Anthropic SDK

## Mô tả

Tài liệu tham khảo cho Claude API và Anthropic SDK: mã model, giá, tham số, streaming, tool use, MCP, agent, caching, đếm token và di chuyển model. Hỗ trợ Python, TypeScript, C#, Go, Java, PHP, Ruby và cURL; kèm các lệnh con migrate, prompt-audit, upgrade, cost-optimize, build-eval và hillclimb; luôn đối chiếu tài liệu trong skill thay vì trả lời theo trí nhớ.

## Điểm mạnh

- Tài liệu theo từng ngôn ngữ, kèm bảng cảnh báo các mẫu API đã thay đổi
- Lệnh con sẵn cho migrate model, kiểm tra prompt cũ, tối ưu chi phí và xây bộ đánh giá
- Bắt buộc dùng SDK chính thức hoặc HTTP thô, không đoán tên hàm hay dùng shim tương thích OpenAI

## Từ khóa

claude api, anthropic sdk, llm, streaming, tool use, mcp

## Đầu vào

Dự án code cần gọi Claude API hoặc câu hỏi về model, giá, giới hạn của Claude

## Đầu ra

Code gọi Claude qua SDK chính thức, hoặc báo cáo migrate/audit/tối ưu chi phí

## Giới hạn

Chỉ làm việc với Claude/Anthropic, dừng lại nếu dự án dùng nhà cung cấp khác; cần API key Anthropic để chạy thật; mỗi lần chạy đo lường đều tốn tiền thật

## Nguồn

https://github.com/anthropics/skills/blob/main/skills/claude-api/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (105118 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
