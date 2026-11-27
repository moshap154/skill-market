---
name: "zh-docgen"
description: "Skill tạo tài liệu tiếng Trung từ code (中文文档生成器): khi người dùng yêu cầu viết tài liệu kỹ thuật, tài liệu API hoặc giới thiệu dự án, skill quét cấu trúc dự án để nhận diện loại hình (Web/CLI/thư viện/…"
group: "Tài liệu & Hồ sơ"
field: "Xử lý tài liệu"
job: "Tự động tạo tài liệu kỹ thuật tiếng Trung từ code"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/zh-docgen"
origin: "hunted"
market_id: 486
vault_id: 506
status: live
has_content: true
---

# zh-docgen

## Công việc

Tự động tạo tài liệu kỹ thuật tiếng Trung từ code

## Mô tả

Skill tạo tài liệu tiếng Trung từ code (中文文档生成器): khi người dùng yêu cầu viết tài liệu kỹ thuật, tài liệu API hoặc giới thiệu dự án, skill quét cấu trúc dự án để nhận diện loại hình (Web/CLI/thư viện/dịch vụ), phân tích code để trích xuất chữ ký module, hàm, lớp, interface cùng chú thích, rồi sinh tài liệu gồm tổng quan dự án (giới thiệu tiếng Trung, tech stack, sơ đồ kiến trúc Mermaid), hướng dẫn nhanh, tham chiếu API, ví dụ sử dụng và FAQ. Kết quả là một hoặc nhiều file Markdown, chủ yếu bằng tiếng Trung, thuật ngữ kỹ thuật giữ tiếng Anh.

## Điểm mạnh

- Sinh trọn bộ tài liệu (tổng quan, quickstart, API, ví dụ, FAQ) chỉ từ code, không cần viết tay từng mục
- Ưu tiên đọc README, package.json, pyproject.toml có sẵn và suy ra quan hệ phụ thuộc từ import/require, docstring/JSDoc nên tài liệu bám sát code thật

## Từ khóa

zh-docgen, tài liệu kỹ thuật, 中文文档, Markdown, API 文档

## Đầu vào

Codebase cần làm tài liệu (thư mục dự án, ngôn ngữ và loại dự án)

## Đầu ra

Một hoặc nhiều file Markdown tài liệu tiếng Trung: tổng quan, hướng dẫn nhanh, tham chiếu API, ví dụ, FAQ

## Giới hạn

Chỉ sinh tài liệu từ những gì đọc được trong code và chú thích; code thiếu chú thích hoặc cấu trúc lạ thì tài liệu có thể thiếu hoặc sai; cần người kiểm tra lại trước khi công bố

## Nguồn

https://github.com/laolaoshiren/claude-code-skills-zh/blob/main/skills/zh-docgen

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (523 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
