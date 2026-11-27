---
name: "job-scout"
description: "Skill job-scout trong repo kc_ai_skills của KerberosClaw: trợ lý thẩm định thị trường việc làm, giúp tránh nộp đơn hoặc nhận offer xấu bằng cách kiểm chứng tín hiệu công khai hiện tại rồi mới đưa ra k…"
group: "Tự động hoá ứng dụng"
field: "Nhân sự"
job: "Điều tra công ty Đài Loan trước khi nộp hồ sơ, phỏng vấn hay nhận việc"
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/KerberosClaw/kc_ai_skills/blob/main/job-scout/SKILL.md"
origin: "hunted"
market_id: 475
vault_id: 471
status: live
has_content: true
---

# job-scout

## Công việc

Điều tra công ty Đài Loan trước khi nộp hồ sơ, phỏng vấn hay nhận việc

## Mô tả

Skill job-scout trong repo kc_ai_skills của KerberosClaw: trợ lý thẩm định thị trường việc làm, giúp tránh nộp đơn hoặc nhận offer xấu bằng cách kiểm chứng tín hiệu công khai hiện tại rồi mới đưa ra khuyến nghị có căn cứ. Người dùng đưa tên công ty (bắt buộc) và tên vị trí (tùy chọn). Skill tra cứu theo 6 giai đoạn: thông tin cơ bản (tên đầy đủ, mã số doanh nghiệp 統一編號, vốn, ngày thành lập, nhân sự, niêm yết, ngành, sản phẩm, người đại diện, địa chỉ, website — tra cả twincn.com và findbiz.nat.gov.tw), tài chính và vận hành (doanh thu, cắt giảm, giảm vốn, gọi vốn, tin tiêu cực), đánh giá nhân viên và lương (salary.tw, interview.tw, Qollie, PTT Tech_Job/Salary/Soft_Job, Glassdoor), giá thị trường của vị trí (so với 104 và 1111), chất lượng sản phẩm/công nghệ (đánh giá app, GitHub, blog kỹ thuật), và danh sách red flag (vốn rất thấp, thành lập chưa tới 2 năm, lương thấp hơn thị trường, mô tả “đàn hồi/kháng áp”, phỏng vấn qua loa). Kết quả là báo cáo có bảng chấm điểm 1–5 cho độ ổn định, lương, cơ hội phát triển, môi trường kỹ thuật và cân bằng công việc, kèm khuyến nghị nên nộp / cân nhắc / không nên nộp và câu hỏi cần hỏi lúc phỏng vấn. Báo cáo xuất bằng phồn thể.

## Điểm mạnh

- Tra cứu theo đúng nguồn Đài Loan: mã số doanh nghiệp, salary.tw, interview.tw, Qollie, PTT, 104/1111
- Tách rõ bằng chứng và suy luận: không tìm được thì ghi “查無資料”, không đoán doanh thu hay lương
- Có bảng chấm điểm 5 chiều và danh sách red flag cụ thể để so sánh các offer

## Từ khóa

job-scout, 求職, 查公司, 面試, 薪資, 台灣

## Đầu vào

Tên công ty (bắt buộc) và tên vị trí muốn đánh giá (tùy chọn)

## Đầu ra

Báo cáo thẩm định: hồ sơ công ty, tài chính, đánh giá nhân viên và lương, giá thị trường, red flag, điểm tổng và khuyến nghị

## Giới hạn

Chỉ dựa trên dữ liệu công khai tìm được trên web, không có dữ liệu nội bộ; không sửa CV, không viết thư xin việc, không mô phỏng phỏng vấn và không thay người dùng quyết định cuối cùng; đánh giá đơn lẻ phải đối chiếu chéo, không lấy một bình luận ẩn danh làm sự thật.

## Nguồn

https://github.com/KerberosClaw/kc_ai_skills/blob/main/job-scout/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (4024 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
