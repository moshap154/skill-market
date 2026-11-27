---
name: "financial-report-minesweeper"
description: "Công cụ phát hiện rủi ro/gian lận báo cáo tài chính cổ phiếu A-share, dựa trên phương pháp trong sách '手把手教你读财报' của Đường Triều (唐朝): nhập mã cổ phiếu → tự lấy dữ liệu 10 năm qua Tushare API và tải P…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Quét báo cáo tài chính cổ phiếu A-share, chấm điểm rủi ro theo 30 quy tắc"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/terancejiang/financial-report-minesweeper"
origin: "hunted"
market_id: 377
vault_id: 117
status: live
has_content: true
---

# financial-report-minesweeper

## Công việc

Quét báo cáo tài chính cổ phiếu A-share, chấm điểm rủi ro theo 30 quy tắc

## Mô tả

Công cụ phát hiện rủi ro/gian lận báo cáo tài chính cổ phiếu A-share, dựa trên phương pháp trong sách '手把手教你读财报' của Đường Triều (唐朝): nhập mã cổ phiếu → tự lấy dữ liệu 10 năm qua Tushare API và tải PDF báo cáo thường niên → kiểm tra lần lượt 7 tầng 30 quy tắc (kiểm tra ngưỡng như ý kiến kiểm toán, tín hiệu lợi nhuận, dòng tiền, bảng cân đối, kiểm chứng chéo 3 báo cáo, tín hiệu phi tài chính, rủi ro ngành) → xuất báo cáo xếp hạng rủi ro kèm dữ liệu và log vào output/{stock_code}/. Cần Claude Code CLI, Python 3.9+ và Tushare Pro Token (đăng ký miễn phí).

## Điểm mạnh

- 30 quy tắc có căn cứ từng chương trong sách gốc, kèm ngưỡng WARN/FAIL rõ ràng
- Hai nguồn dữ liệu bổ sung nhau: Tushare cho số liệu, PDF báo cáo cho phân tích định tính
- Chạy một lệnh /minesweeper <mã> là ra báo cáo xếp hạng rủi ro

## Từ khóa

financial-report-minesweeper, 财报排雷, A股, báo cáo tài chính, 唐朝, 财报分析

## Đầu vào

Mã cổ phiếu A-share (hoặc tên công ty, kèm năm nếu muốn)

## Đầu ra

Báo cáo xếp hạng rủi ro tài chính theo 7 tầng 30 quy tắc, kèm dữ liệu gốc và log

## Giới hạn

Chỉ dùng để loại trừ doanh nghiệp rủi ro, không phải để tìm cổ phiếu tăng giá và không phải lời khuyên đầu tư (theo đúng lời tác giả sách); cần Tushare Token và mạng lấy dữ liệu; kết quả phụ thuộc chất lượng dữ liệu Tushare và PDF báo cáo.

## Nguồn

https://github.com/terancejiang/financial-report-minesweeper

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (15492 ký tự, kéo ngày 2026-11-19) — xem file source.md cùng thư mục.
