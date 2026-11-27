---
name: "im-human"
description: "Skill cho Claude (Claude Code, claude.ai, ChatGPT Codex và chat thường): để AI dùng tiếng Đài Loan (phồn thể) nói như người Đài Loan thật, và chỉnh lại văn bản đã viết để hết mùi AI mà không đổi sự th…"
group: "Nội dung & Viết lách"
field: "Viết & Giao tiếp"
job: "Làm AI viết tiếng Đài Loan tự nhiên và gỡ mùi AI khỏi văn bản đã viết"
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/chang416/im-human"
origin: "hunted"
market_id: 470
vault_id: 470
status: live
has_content: true
---

# im-human

## Công việc

Làm AI viết tiếng Đài Loan tự nhiên và gỡ mùi AI khỏi văn bản đã viết

## Mô tả

Skill cho Claude (Claude Code, claude.ai, ChatGPT Codex và chat thường): để AI dùng tiếng Đài Loan (phồn thể) nói như người Đài Loan thật, và chỉnh lại văn bản đã viết để hết mùi AI mà không đổi sự thật. Có hai chế độ: ngữ thái (nói “開啟我是人” thì mọi câu AI viết sau đó đều theo hợp đồng giọng Đài Loan: dùng từ Đài Loan như 影片、軟體、資訊、品質, kết luận trước, câu dài ngắn không đều, cấm mở đầu kiểu “當然!”, cấm liệt kê “首先/其次/最後” thành bộ, cấm phóng đại rỗng và cấm kết thúc khách sáo) và biên tập (đưa đoạn văn vào, AI sửa cho giống người viết thật, giữ nguyên số liệu, ngày tháng, trích dẫn và lập trường, thiếu chi tiết thì ghi cần tác giả bổ sung chứ không tự bịa). Chỉ làm tiếng Đài Loan phồn thể và tiếng Anh, không hỗ trợ giản thể; không dịch, không kiểm chứng sự thật, không bắt chước văn phong một tác giả cụ thể. Kèm script scripts/audit_ai_flavor.py quét ngoại tuyến các dấu vết AI mà không cần API key.

## Điểm mạnh

- Hai chế độ rõ ràng: giọng nói áp cho mọi câu trả lời sau đó, và chế độ biên tập giữ nguyên sự thật
- Quy tắc cấm cụ thể theo Đài Loan: từ vựng, mở đầu, liệt kê, dịch thuật kiểu dịch máy đều bị chặn
- Có script quét mùi AI chạy ngoại tuyến, không cần API key, dùng được cả trong CI

## Từ khóa

im-human, 說人話, 去 AI 味, 繁體中文, 台灣用語, AI writing

## Đầu vào

Câu lệnh “開啟我是人” hoặc một đoạn văn bản cần gỡ mùi AI

## Đầu ra

Câu trả lời bằng tiếng Đài Loan tự nhiên, hoặc bản văn đã chỉnh hết mùi AI mà vẫn giữ sự thật

## Giới hạn

Chỉ tiếng Đài Loan phồn thể và tiếng Anh, không hỗ trợ giản thể; không dịch, không kiểm chứng sự thật, không giúp qua mặt máy dò AI; kết quả quét của script chỉ là gợi ý, có thể báo nhầm trích dẫn và thuật ngữ.

## Nguồn

https://github.com/chang416/im-human

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (5950 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
