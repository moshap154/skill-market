---
name: "wechat-publisher"
description: "Skill đăng bài lên tài khoản công chúng WeChat (wechat-publisher) trong repo YiShu5/claude-skills: xếp bài thành HTML hợp chuẩn cho公众号 (dùng bộ component viết tay với thẻ, tiêu đề đánh số, khối trích …"
group: "Tự động hoá ứng dụng"
field: "Mạng xã hội"
job: "Đưa bài lên tài khoản công chúng WeChat: xếp layout, tải ảnh, tạo bản nháp"
region: "Trung Quốc"
language: "zh-CN"
source_url: "https://github.com/YiShu5/claude-skills/blob/master/skills/wechat-publisher"
origin: "hunted"
market_id: 501
vault_id: 505
status: live
has_content: true
---

# wechat-publisher

## Công việc

Đưa bài lên tài khoản công chúng WeChat: xếp layout, tải ảnh, tạo bản nháp

## Mô tả

Skill đăng bài lên tài khoản công chúng WeChat (wechat-publisher) trong repo YiShu5/claude-skills: xếp bài thành HTML hợp chuẩn cho公众号 (dùng bộ component viết tay với thẻ, tiêu đề đánh số, khối trích dẫn tối và infographic SVG nội tuyến, không tốn quota ảnh), tự tải ảnh lên, có thể tự tạo ảnh bìa, rồi qua API chính thức đưa bài vào hộp bản nháp (草稿箱) để người dùng xem trước và tự bấm đăng. Ngoài ra còn chế độ dự phòng: đưa Markdown vào và áp một theme cố định. Theo README của repo, skill này là khâu cuối của chuỗi wechat-coauthor → wechat-formatter → wechat-publisher.

## Điểm mạnh

- Xếp layout đẹp bằng HTML viết tay với thẻ và infographic SVG, không cần ảnh ngoài
- Đưa thẳng bài vào草稿箱 qua API chính thức, người dùng chỉ cần xem trước rồi đăng

## Từ khóa

wechat-publisher, 公众号, WeChat, 草稿箱, 排版

## Đầu vào

Bài viết (Markdown hoặc HTML) cần đăng lên公众号, kèm thông tin tài khoản

## Đầu ra

Bài đã xếp layout thành HTML cho公众号 và bản nháp trong草稿箱 (kèm media_id)

## Giới hạn

Cần tài khoản公众号 đã xác minh có quyền draft/add, IP máy trong danh sách cho phép và credential trong .env; chỉ tạo bản nháp, việc đăng vẫn do người dùng bấm tay trên mp.weixin.qq.com; chế độ chỉ xếp layout thì không cần API

## Nguồn

https://github.com/YiShu5/claude-skills/blob/master/skills/wechat-publisher

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (3800 ký tự, kéo ngày 2026-11-25) — xem file source.md cùng thư mục.
