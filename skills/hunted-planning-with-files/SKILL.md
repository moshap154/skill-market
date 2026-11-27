---
name: "planning-with-files"
description: "Skill lập kế hoạch bền bỉ bằng file cho AI coding agent và tác vụ dài: giữ 3 file task_plan.md (các phase + checkbox), findings.md (ghi chú nghiên cứu và quyết định) và progress.md (nhật ký phiên và k…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Giữ kế hoạch lập trình trong file Markdown để agent không quên sau khi reset"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/OthmanAdi/planning-with-files"
origin: "hunted"
market_id: 246
vault_id: 244
status: live
has_content: true
---

# planning-with-files

## Công việc

Giữ kế hoạch lập trình trong file Markdown để agent không quên sau khi reset

## Mô tả

Skill lập kế hoạch bền bỉ bằng file cho AI coding agent và tác vụ dài: giữ 3 file task_plan.md (các phase + checkbox), findings.md (ghi chú nghiên cứu và quyết định) và progress.md (nhật ký phiên và kết quả test) trên đĩa, kèm hook nạp lại ngữ cảnh kế hoạch mỗi lượt, nên kế hoạch sống sót qua /clear, crash và nén ngữ cảnh. Có cổng hoàn thành xác định (deterministic completion gate) và hỗ trợ 60+ agent qua chuẩn Agent Skills, với plugin riêng cho Claude Code, Codex, Qoder, Pi, Hermes, OpenCode. Theo repo, thời gian định hướng lại sau reset giảm từ khoảng 13,3 lượt xuống 5 lượt; MIT.

## Điểm mạnh

- Kế hoạch nằm trên đĩa nên agent tiếp tục đúng phase sau khi reset/crash thay vì làm lại từ đầu
- Hook nạp lại kế hoạch mỗi lượt, chống 'context rot' trong tác vụ dài
- Hỗ trợ 60+ agent và có plugin riêng cho các host lớn

## Từ khóa

lập kế hoạch, coding agent, markdown, phục hồi phiên, tác vụ dài

## Đầu vào

Nhiệm vụ lập trình dài; thư mục project để lưu 3 file kế hoạch

## Đầu ra

Ba file task_plan.md, findings.md, progress.md được cập nhật; agent tiếp tục đúng phase sau reset

## Giới hạn

Cần cài hook/plugin theo từng agent; hiệu quả phụ thuộc việc agent tuân thủ ghi file — con số cải thiện là đo lường của chính repo

## Nguồn

https://github.com/OthmanAdi/planning-with-files

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (114030 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
