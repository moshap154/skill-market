---
name: "HAANH VM Monitor (bản cũ)"
description: "Hệ thống giám sát máy ảo cá nhân (Ubuntu, VM chỉ gọi ra ngoài): collector Python stdlib-only lấy số liệu thật từ /proc mỗi 2 giây, dashboard local + Space xem được trên điện thoại. Giám sát CPU/RAM/sw…"
group: "Kỹ thuật & Code"
field: "Bảo mật & Hệ thống"
job: "Giám sát máy ảo realtime, dọn dẹp an toàn, quản lý file và kiểm tra bảo mật & vá lỗi"
region: "Việt Nam"
language: "vi"
source_url: ""
origin: "archived"
market_id: 588
vault_id: 
status: archived
has_content: false
---

# HAANH VM Monitor (bản cũ)

## Công việc

Giám sát máy ảo realtime, dọn dẹp an toàn, quản lý file và kiểm tra bảo mật & vá lỗi

## Mô tả

Hệ thống giám sát máy ảo cá nhân (Ubuntu, VM chỉ gọi ra ngoài): collector Python stdlib-only lấy số liệu thật từ /proc mỗi 2 giây, dashboard local + Space xem được trên điện thoại. Giám sát CPU/RAM/swap/ổ đĩa/mạng, quản lý tác vụ, AI-Boot dọn dẹp theo kiểu quét trước — chạy sau, quản lý file có 5 lớp chống lỗi, kiểm tra bảo mật & vá lỗi (gói vá, cổng nghe, SSH, quyền ~/.ssh, an toàn dữ liệu). Tự sống qua thay máy ảo nhờ ghi đĩa mỗi 10 giây, snapshot mỗi 5 phút, backup mỗi giờ và keepalive mỗi 15 phút. RAM là nút thắt số 1, CPU và ổ đĩa nhàn.

## Điểm mạnh

- Số liệu thật từ /proc, cập nhật mỗi 2 giây; sống qua thay máy ảo nhờ persistence 3 lớp (ghi đĩa, snapshot, backup giờ)
- AI-Boot dọn dẹp an toàn: quét trước — chạy sau, chỉ dọn mục an toàn, file lớn chỉ liệt kê không tự xóa
- Quản lý file có 5 lớp chống lỗi: khóa khu vực, cấm sửa file lõi, backup trước khi ghi, ghi nguyên tử, kiểm tra cú pháp trước khi ghi
- Kiểm tra bảo mật & vá lỗi: tách gói vá bảo mật, chặn vá khi RAM dưới 300MB, không tự reboot hay sửa sudoers
- Keepalive mỗi 15 phút tự khởi động lại monitor sau khi máy ảo bị thay thế, chỉ báo khi phải khởi động lại
- Dashboard local + Space 5 tab (Tổng quan, Tác vụ, AI-Boost, File, Bảo mật) xem được trên điện thoại

## Từ khóa

vm monitor, giám sát máy ảo, ram, ai-boot, bảo mật, vá lỗi, quản lý file, snapshot, backup, keepalive, ubuntu, proc

## Đầu vào

Máy ảo Ubuntu có quyền root; code tại ~/workspace/vm-monitor (monitor.py, dashboard.html, start.sh, stop.sh, backup.sh)

## Đầu ra

Dashboard realtime + Space 5 tab; cảnh báo ngưỡng RAM/CPU/swap/đĩa; báo cáo quét bảo mật; snapshot + backup chống mất dữ liệu

## Giới hạn

VM chỉ gọi ra ngoài — dashboard local chỉ mở được trong VM, điện thoại xem qua Space; RAM khả dụng thường chỉ 500–900MB nên không chạy 2 việc nặng cùng lúc; vá apt cần mạng, lần đầu tải chậm (~30kB/s); trình sửa file không sửa được file hệ thống ở /home/hatch

## Nguồn

—

## Ghi chú

- Bản cũ được lưu lại khi bạn sửa skill này.
