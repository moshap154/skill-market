---
name: "Bannerbear Automation"
description: "Skill tự động hoá các thao tác Bannerbear qua toolkit Bannerbear của Composio bằng Rube MCP: kết nối tài khoản Bannerbear, dùng RUBE_SEARCH_TOOLS để tìm tool phù hợp với từng tác vụ rồi thực thi bằng …"
group: "Sáng tạo & Media"
field: "Thiết kế & Media"
job: "Tự động hoá các tác vụ Bannerbear (tạo ảnh/video tự động theo mẫu) qua Rube MCP của Composio."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/bannerbear-automation/SKILL.md"
origin: "hunted"
market_id: 274
vault_id: 208
status: live
has_content: true
---

# Bannerbear Automation

## Công việc

Tự động hoá các tác vụ Bannerbear (tạo ảnh/video tự động theo mẫu) qua Rube MCP của Composio.

## Mô tả

Skill tự động hoá các thao tác Bannerbear qua toolkit Bannerbear của Composio bằng Rube MCP: kết nối tài khoản Bannerbear, dùng RUBE_SEARCH_TOOLS để tìm tool phù hợp với từng tác vụ rồi thực thi bằng RUBE_MULTI_EXECUTE_TOOL. Lưu ý: file SKILL.md trong nguồn là mẫu chung của Rube MCP, không liệt kê workflow hay thao tác Bannerbear cụ thể nào — các thao tác thực tế được khám phá lúc chạy qua tìm kiếm tool.

## Điểm mạnh

- Không cần API key riêng — chỉ cần thêm endpoint MCP https://rube.app/mcp
- Luôn tìm tool trước khi chạy nên theo kịp thay đổi schema
- Hỗ trợ thao tác hàng loạt qua RUBE_REMOTE_WORKBENCH

## Từ khóa

Bannerbear, tạo ảnh tự động, video, template, Rube MCP, Composio

## Đầu vào

Mô tả tác vụ Bannerbear bằng ngôn ngữ tự nhiên (use case), kết nối Bannerbear đang ACTIVE, session ID để tái sử dụng trong workflow.

## Đầu ra

Kết quả thực thi của tool Bannerbear đã khám phá qua RUBE_SEARCH_TOOLS (theo schema trả về lúc chạy), trạng thái kết nối.

## Giới hạn

Cần kết nối Bannerbear ACTIVE qua RUBE_MANAGE_CONNECTIONS trước khi chạy; bắt buộc gọi RUBE_SEARCH_TOOLS trước — không hardcode slug hay tham số tool; phải kiểm tra phân trang; lệnh RUBE_MULTI_EXECUTE_TOOL luôn cần tham số memory (kể cả rỗng {}); file SKILL.md không mô tả sẵn thao tác Bannerbear cụ thể nào nên phạm vi thực tế phụ thuộc toolkit Composio lúc chạy.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/bannerbear-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (2964 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
