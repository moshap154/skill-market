---
name: "Slackbot Automation"
description: "Skill tự động hoá tác vụ Slackbot qua Rube MCP (Composio): luôn tìm tool trước bằng RUBE_SEARCH_TOOLS để lấy schema hiện tại, quản lý kết nối bằng RUBE_MANAGE_CONNECTIONS với toolkit slackbot, rồi thự…"
group: "Tự động hoá ứng dụng"
field: "Giao tiếp"
job: "Tự động hoá tác vụ Slackbot qua Rube MCP"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/slackbot-automation/SKILL.md"
origin: "hunted"
market_id: 447
vault_id: 447
status: live
has_content: true
---

# Slackbot Automation

## Công việc

Tự động hoá tác vụ Slackbot qua Rube MCP

## Mô tả

Skill tự động hoá tác vụ Slackbot qua Rube MCP (Composio): luôn tìm tool trước bằng RUBE_SEARCH_TOOLS để lấy schema hiện tại, quản lý kết nối bằng RUBE_MANAGE_CONNECTIONS với toolkit slackbot, rồi thực thi bằng RUBE_MULTI_EXECUTE_TOOL; kèm bảng tham chiếu nhanh và danh sách lỗi thường gặp (luôn search trước, kiểm tra kết nối ACTIVE, tuân thủ schema, tái dùng session).

## Điểm mạnh

- Quy trình 3 bước chuẩn: tìm tool, kiểm tra kết nối, thực thi
- Không cần API key, chỉ thêm endpoint MCP là dùng được
- Có hướng dẫn xử lý lỗi thường gặp và bảng tham chiếu nhanh

## Từ khóa

Slackbot, Slack, Rube MCP, Composio, automation, chatbot

## Đầu vào

Yêu cầu tác vụ Slackbot cần làm và kết nối Rube MCP đang hoạt động

## Đầu ra

Tác vụ Slackbot đã thực thi (tin nhắn, thao tác trên Slackbot)

## Giới hạn

Cần Rube MCP đã kết nối (https://rube.app/mcp) và kết nối Slackbot ở trạng thái ACTIVE; phải search tool trước mỗi lần chạy, không hardcode slug hay tham số; cần xử lý phân trang khi kết quả dài.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/slackbot-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2934 ký tự, kéo ngày 2026-11-22) — xem file source.md cùng thư mục.
