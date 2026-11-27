---
name: "imozuru"
description: "Skill tiếng Nhật của MaryCache/imozuru (MIT, 1.535 sao GitHub) giúp Claude Code đào sâu một lĩnh vực chưa biết tới tận tài liệu gốc, theo lối imozuru (nhổ khoai lang, củ này kéo theo củ kia): viết câu…"
group: "Dữ liệu & Phân tích"
field: "Phân tích dữ liệu"
job: "Đào sâu lĩnh vực lạ tới tận tài liệu gốc theo kiểu nhổ củ khoai"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/MaryCache/imozuru/blob/main/skills/imozuru/SKILL.md"
origin: "hunted"
market_id: 529
vault_id: 535
status: live
has_content: true
---

# imozuru

## Công việc

Đào sâu lĩnh vực lạ tới tận tài liệu gốc theo kiểu nhổ củ khoai

## Mô tả

Skill tiếng Nhật của MaryCache/imozuru (MIT, 1.535 sao GitHub) giúp Claude Code đào sâu một lĩnh vực chưa biết tới tận tài liệu gốc, theo lối imozuru (nhổ khoai lang, củ này kéo theo củ kia): viết câu hỏi và 3-6 luận điểm cần trả lời, dùng 2 subagent tìm kiếm khác nhau để lập bản đồ thuật ngữ, nhân vật và nơi kiến thức tụ họp, rồi lần theo trích dẫn, link và tác giả để thu thập tài liệu gốc và lưu nguyên văn vào sources/ mà không tóm tắt; dừng khi mọi luận điểm đều có tài liệu gốc hoặc đã bão hòa. Sau đó tạo trang trích dẫn đã được máy đối chiếu từng chữ với gốc và báo cáo 3 cấp độ; chế độ watch theo dõi tin mới qua RSS.

## Điểm mạnh

- Không tóm tắt giữa chừng, mọi kết luận đều chỉ tới đúng file và dòng gốc
- Hai subagent tìm kiếm song song với cách khác nhau
- Trích dẫn được máy đối chiếu từng chữ với tài liệu gốc

## Từ khóa

imozuru, nghiên cứu, tài liệu gốc, literature review, đào sâu lĩnh vực

## Đầu vào

Câu hỏi về lĩnh vực chưa biết, chủ đề cần tìm hiểu hoặc theo dõi tin mới

## Đầu ra

Thư mục ~/research/<chủ đề>/ gồm map.md, log.md, tài liệu gốc, trang trích dẫn và báo cáo 3 cấp độ

## Giới hạn

Cần Python 3.10+ và mạng; PDF scan cần tesseract với dữ liệu tiếng Nhật; không dùng cho thông tin mật; không vượt paywall

## Nguồn

https://github.com/MaryCache/imozuru/blob/main/skills/imozuru/SKILL.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (13040 ký tự, kéo ngày 2026-11-27) — xem file source.md cùng thư mục.
