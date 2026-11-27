---
name: "pii-safe-documents"
description: "Skill pii-safe-documents trong repo pii-guard của danyuchn: công cụ khử định danh cá nhân cho tài liệu phồn thể (Đài Loan), để đưa tài liệu nhạy cảm lên AI đám mây mà không lộ thông tin cá nhân, xử lý…"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Che thông tin cá nhân Đài Loan trong tài liệu rồi khôi phục chính xác sau khi AI xử lý"
region: "Đài Loan"
language: "zh-TW"
source_url: "https://github.com/danyuchn/pii-guard"
origin: "hunted"
market_id: 472
vault_id: 472
status: live
has_content: true
---

# pii-safe-documents

## Công việc

Che thông tin cá nhân Đài Loan trong tài liệu rồi khôi phục chính xác sau khi AI xử lý

## Mô tả

Skill pii-safe-documents trong repo pii-guard của danyuchn: công cụ khử định danh cá nhân cho tài liệu phồn thể (Đài Loan), để đưa tài liệu nhạy cảm lên AI đám mây mà không lộ thông tin cá nhân, xử lý xong khôi phục lại từng chữ. Phát hiện bằng Presidio + mô hình CKIP BERT NER + regex riêng cho Đài Loan: số CMND, số cư trú, mã số doanh nghiệp (統一編號), điện thoại di động/cố định, biển số xe, ngày sinh, tài khoản ngân hàng, tên người và tên tổ chức. Quy trình 3 bước: redact (đổi thành mã như <PERSON_1>, <TW_NATIONAL_ID_1>), annotate (mở trang web local để tự tay che thêm chỗ sót hoặc trả lại chỗ che nhầm), restore (dùng bảng đối chiếu local để đổi mã về giá trị thật). Mọi phát hiện và khôi phục chạy trên máy người dùng; agent chính không bao giờ đọc file gốc hay bảng đối chiếu. Hỗ trợ txt/md/csv/tsv/log/dat tới 64 KiB, CLI thêm docx/xlsx/pdf; cần Python 3.13 và uv, lần đầu tải mô hình CKIP khoảng 500 MB.

## Điểm mạnh

- Nhận diện riêng cho Đài Loan: CMND, cư trú, mã số doanh nghiệp, điện thoại và tên người/tổ chức phồn thể
- Khôi phục bằng code nên chính xác từng chữ, có trang bổ sung thủ công để xử lý chỗ sót
- Agent chính không đọc file gốc hay bảng đối chiếu, dữ liệu nhạy cảm ở lại máy local

## Từ khóa

pii-guard, PII, 去識別化, 個資, privacy, Taiwan

## Đầu vào

Đường dẫn file tài liệu phồn thể chứa thông tin cá nhân (txt/md/csv/pdf/docx/xlsx)

## Đầu ra

Bản tài liệu đã khử định danh (mã thay cho thông tin cá nhân) và, sau khi AI xử lý, bản đã khôi phục giá trị thật

## Giới hạn

Phát hiện là xác suất nên có sót và che nhầm, cần rà soát thủ công; không phải công cụ phân cấp mật mật và không bảo đảm tài liệu an toàn để công bố hoàn toàn; chế độ kiểm tra bằng mô hình local có thể mất 10–50 phút cho một file; macOS/Linux là chính, Windows có hạn chế (chế độ nâng cao không chạy).

## Nguồn

https://github.com/danyuchn/pii-guard

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (15438 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
