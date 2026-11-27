---
name: "Ashby Automation"
description: "Skill tự động hoá vận hành tuyển dụng trên Ashby (ATS) ngay từ Claude Code qua Rube MCP: tạo/tìm/liệt kê/cập nhật ứng viên, đăng job mới và xem danh sách vị trí, tạo hồ sơ ứng tuyển gắn ứng viên với j…"
group: "Tự động hoá ứng dụng"
field: "Nhân sự"
job: "Tự động hoá quy trình tuyển dụng trên Ashby ATS: quản lý ứng viên, đăng tuyển, theo dõi hồ sơ ứng tuyển và lịch phỏng vấn."
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/ashby-automation/SKILL.md"
origin: "hunted"
market_id: 270
vault_id: 202
status: live
has_content: true
---

# Ashby Automation

## Công việc

Tự động hoá quy trình tuyển dụng trên Ashby ATS: quản lý ứng viên, đăng tuyển, theo dõi hồ sơ ứng tuyển và lịch phỏng vấn.

## Mô tả

Skill tự động hoá vận hành tuyển dụng trên Ashby (ATS) ngay từ Claude Code qua Rube MCP: tạo/tìm/liệt kê/cập nhật ứng viên, đăng job mới và xem danh sách vị trí, tạo hồ sơ ứng tuyển gắn ứng viên với job, xem lịch phỏng vấn, đọc ghi chú nội bộ về ứng viên và lập báo cáo pipeline tuyển dụng.

## Điểm mạnh

- Quản lý trọn vòng đời tuyển dụng: ứng viên → ứng tuyển → phỏng vấn trong một skill
- Đồng bộ tăng dần bằng syncToken giúp báo cáo pipeline định kỳ tốn ít lần gọi API
- Ghi chú nội bộ và lịch phỏng vấn xem được ngay từ terminal

## Từ khóa

Ashby, ATS, tuyển dụng, ứng viên, phỏng vấn, hiring

## Đầu vào

Tên/email/LinkedIn của ứng viên, tiêu đề job kèm teamId/locationId/brandId, candidateId và jobId để tạo ứng tuyển, cursor/syncToken để phân trang và đồng bộ.

## Đầu ra

Hồ sơ ứng viên đã tạo/cập nhật, job đã đăng (mặc định ở trạng thái Draft), hồ sơ ứng tuyển, lịch phỏng vấn, ghi chú ứng viên, báo cáo pipeline tuyển dụng.

## Giới hạn

Cần tài khoản Ashby đã kết nối qua Rube MCP; job mới tạo ở trạng thái Draft, chỉ mở nhận hồ sơ khi có defaultInterviewPlanId; tạo job bắt buộc đủ 4 trường title, teamId, locationId, brandId; phải tạo ứng viên trước rồi mới tạo ứng tuyển; mọi ID đều là UUID, sai định dạng trả lỗi 400; phân trang dùng cursor, tối đa 100 bản ghi/trang, không nhảy trang tuỳ ý; tìm ứng viên chỉ theo email chính xác hoặc tên gần đúng.

## Nguồn

https://github.com/ComposioHQ/awesome-claude-skills/blob/master/composio-skills/ashby-automation/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (6745 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
