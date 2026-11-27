---
name: "git-workflow"
description: "Skill tiếng Nhật của itoken-lab-jp giúp AI làm trọn vòng git từ commit đến PR, CI, merge và theo dõi đến production: đọc luật của repo trước, cắt nhánh từ main mới nhất, chọn file commit theo tên, phá…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Cho AI làm trọn vòng git: commit, PR, chờ CI, merge rồi kiểm chứng tận bản production"
region: "Nhật Bản"
language: "ja"
source_url: "https://github.com/itoken-lab-jp/skills/blob/main/docs/git-workflow.md"
origin: "hunted"
market_id: 398
vault_id: 398
status: live
has_content: true
---

# git-workflow

## Công việc

Cho AI làm trọn vòng git: commit, PR, chờ CI, merge rồi kiểm chứng tận bản production

## Mô tả

Skill tiếng Nhật của itoken-lab-jp giúp AI làm trọn vòng git từ commit đến PR, CI, merge và theo dõi đến production: đọc luật của repo trước, cắt nhánh từ main mới nhất, chọn file commit theo tên, phát hiện secret thì không chỉ loại khỏi commit mà còn báo nó nằm ở đâu và đã ignore chưa; trước khi PR phải xem diff so với main để loại commit thử lẫn vào; sau khi PR phải chờ xem kết quả CI; merge xong phải xem lần deploy chạy, và cuối cùng kiểm tra chính production (endpoint health/version trả về commit đang chạy, hoặc một hành vi đã đổi). Chi phí CI tăng thì tra từ hóa đơn thật theo môi trường/ngày, không đoán từ file cấu hình.

## Điểm mạnh

- Kiểm chứng tận production sau merge, không dừng ở “deploy thành công”
- Chặn rò rỉ secret: báo cả vị trí file secret và việc nó chưa được ignore
- Xung đột merge giữ ý định cả hai phía; thay đổi không thể dung hòa thì hỏi hoặc báo ngay đầu báo cáo

## Từ khóa

git-workflow, git, pull request, CI, merge, deploy

## Đầu vào

Thay đổi cần commit, nhánh hoặc PR cần merge, câu hỏi về chi phí CI

## Đầu ra

Commit, PR đã qua CI, merge và xác nhận commit đang chạy trên production

## Giới hạn

Thử nghiệm dùng lệnh gh giả lập, chưa thử trên GitHub/GitLab thật; ví dụ lệnh và cách tra chi phí viết cho GitHub Actions; thao tác không quay lại được (force push, reset --hard) chỉ làm khi người nhờ chỉ đích danh.

## Nguồn

https://github.com/itoken-lab-jp/skills/blob/main/docs/git-workflow.md

## Ghi chú

- Tình trạng link: Kiểm tra 27/11/2026: link nguồn mở được.
- Nội dung gốc đầy đủ đã lưu trong Kho Lưu Trữ (8688 ký tự, kéo ngày 2026-11-20) — xem file source.md cùng thư mục.
