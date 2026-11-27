---
name: haanh-vm-monitor
description: Giám sát máy ảo cá nhân realtime (CPU/RAM/swap/ổ đĩa/mạng), dọn dẹp an toàn AI-Boot, quản lý file có 5 lớp chống lỗi, kiểm tra bảo mật & vá lỗi — tự sống qua thay máy ảo nhờ persistence 3 lớp. Kèm code thật để cài y hệt.
---

# HAANH VM Monitor — Khung skill copy/paste (bản đầy đủ để dựng lại y hệt)

> Cách dùng khung này: copy toàn bộ nội dung dưới đây, đưa cho Muse ở tài khoản
> khác kèm theo gói code thật. Muse bên kia làm theo đúng các bước trong mục
> "Cài đặt" là có hệ thống giống hệt hệ thống gốc.
>
> Gói code thật (38 KB, gồm monitor.py, dashboard.html, start.sh, stop.sh,
> backup.sh, README.md, INSTALL.md, thư mục patches/):
> https://muse.ai/files/1395864716935302/1700902235071507/64zw01f5rdhw8817ib7rh70i/vm-monitor-code.tar.gz
> Link hết hạn ngày 29/11/2026 lúc 14:19 giờ Việt Nam — tải về trước hạn rồi
> lưu lại. Ai có link đều mở được file.

## Công việc

Giám sát máy ảo cá nhân realtime, dọn dẹp an toàn, quản lý file và kiểm tra
bảo mật & vá lỗi — để máy không sập mất dữ liệu.

## Mô tả

Hệ thống giám sát máy ảo cá nhân chạy Ubuntu (VM chỉ gọi ra ngoài, không nhận
kết nối vào). Collector Python chỉ dùng thư viện chuẩn, đọc số liệu thật từ
`/proc` mỗi 2 giây, phục vụ dashboard local tại `http://127.0.0.1:8765` và
Space "Giám sát máy ảo" 5 tab (Tổng quan, Tác vụ, AI-Boost, File, Bảo mật)
xem được trên điện thoại.

Baseline đo thật 26/11/2026 (máy gốc): CPU AMD EPYC 9D25, 4 vCPU @1498 MHz,
RAM 7,7 GB, ổ /home btrfs 150 GB. RAM là nút thắt số 1 (khả dụng thường chỉ
500–900 MB), CPU và ổ đĩa nhàn. Số "RAM đã dùng ~92%" là kế toán của host
dùng chung, không phải app rò rỉ — quyết định theo MemAvailable, không theo
% used. Máy mới đo lại baseline của chính nó, không lấy số này làm chuẩn cứng.

## Cài đặt (Muse bên kia làm theo từng bước)

Yêu cầu: máy ảo Ubuntu, Python 3.10+ (chỉ dùng thư viện chuẩn, không cần cài
thêm gói nào).

```bash
# 1. Tải gói code thật (link ở đầu khung này) rồi giải nén
tar -xzf vm-monitor-code.tar.gz
cd vm-monitor

# 2. Cấp quyền chạy cho script
chmod +x start.sh stop.sh backup.sh

# 3. Chạy monitor
./start.sh

# 4. Kiểm chứng — phải trả về {"ok": true, "samples": N}
curl -s http://127.0.0.1:8765/health
```

- Dashboard mở tại `http://127.0.0.1:8765` (chỉ mở được trong chính máy ảo đó).
- `monitor.py` tự tạo các thư mục `history/`, `trash/`, `backup-edits/` khi
  chạy lần đầu — không cần tạo tay.
- `history/`, `backup/`, `snapshot.json` KHÔNG có trong gói code — đó là dữ
  liệu chạy của máy gốc; máy mới bắt đầu ghi mới từ đầu.
- `patches/` chỉ để tham khảo lịch sử các bản vá v2–v7, KHÔNG chạy lại
  (đã áp vào code rồi).
- Máy ảo bị thay (deploy) thì mọi process chết nhưng /home còn nguyên —
  chạy lại `./start.sh` là sống lại.

### Cron giữ cho monitor tự sống (bắt buộc dựng lại)

- `keepalive` mỗi 15 phút: `curl http://127.0.0.1:8765/health`, không trả
  lời thì chạy `start.sh` rồi kiểm tra lại bằng `/health` và `/api/metrics`;
  chỉ nhắn user khi phải khởi động lại hoặc khởi động lại thất bại.
- `hourly-backup` mỗi giờ: chạy `backup.sh` (giữ 7 ngày), chỉ báo khi lỗi.
- `hourly-snapshot` mỗi giờ: ghi 1 điểm snapshot (giữ nhịp dữ liệu).
- `daily-snapshot` mỗi ngày ~07:03 giờ Việt Nam.

### Space xem trên điện thoại (tùy chọn, dựng sau khi monitor chạy)

Space "Giám sát máy ảo" là bản sao xem được trên điện thoại, dữ liệu lấy từ
collector qua action. Space này gắn với tài khoản gốc nên KHÔNG đi theo gói
code — Muse bên kia phải tạo Space mới (web artifact fullstack) với 5 tab:
Tổng quan, Tác vụ, AI-Boost, File (duyệt + sửa nội dung + khôi phục backup),
Bảo mật; các action đọc dữ liệu thật từ collector local (lưu ý: gọi localhost
phải bỏ qua proxy — dùng `curl --noproxy '*'`).

## Kiến trúc

- `~/workspace/vm-monitor/monitor.py` — collector + HTTP server (stdlib
  only), lấy mẫu 2 giây, giữ 1800 mẫu trong RAM, bind 127.0.0.1:8765.
- `dashboard.html` — giao diện tiếng Việt (hệ thống, CPU/RAM/swap/ổ đĩa
  dạng biểu đồ tròn, biểu đồ 4 phút, top process, cảnh báo, AI-Boot, quản lý
  file + sửa nội dung, bảo mật, thông tin ổ đĩa chi tiết).
- `start.sh` / `stop.sh` / `backup.sh` — khởi động, dừng, sao lưu (giữ 7 ngày).
- `history/*.jsonl` — lịch sử theo ngày, cảnh báo, sự kiện, kills, aiboot,
  trash, file_edits, security. `snapshot.json` — snapshot chống mất dữ liệu.

## API (collector, 127.0.0.1:8765)

- `GET /health` — `{"ok": true, "samples": N}`
- `GET /api/info` — kernel, arch, cpu_mhz, disks (df + lsblk)
- `GET /api/metrics` — mẫu mới nhất + 120 mẫu gần nhất + cảnh báo
- `GET /api/history?minutes=N` — lịch sử mẫu
- `GET /api/processes` — toàn bộ process
- `POST /api/process/kill` `{"pid": N}` — dừng process (có danh sách bảo vệ:
  PID 1, hatch daemon, monitor, Space bun worker, journald)
- `GET /api/aiboot/analyze` — quét dọn dẹp; `POST /api/aiboot/run`
  `{"items": [...], "confirm": true}` — chỉ dọn mục an toàn
- `GET /api/files?path=...` — liệt kê file (chỉ ~/workspace, /tmp, ~/.cache)
- `POST /api/files/read|write|create|rename|restore_backup` + `GET
  /api/files/backups` — sửa nội dung file có 5 lớp chống lỗi
- `POST /api/files/delete|restore` — xóa vào thùng rác / khôi phục
- `GET /api/security/scan` — quét bảo mật (chỉ đọc)
- `POST /api/security/patch` `{"items": [...], "confirm": true}` — vá lỗi
- `GET /api/persistence` — snapshot + sự kiện + thống kê lịch sử đĩa
- `GET /api/trash` — nội dung thùng rác

## Ngưỡng cảnh báo

| Chỉ số | Cảnh báo | Nguy cấp |
|---|---|---|
| RAM khả dụng | < 1024 MB | < 512 MB |
| CPU | > 70% | > 85% kéo dài 5 phút |
| Swap đã dùng | > 30% | > 50% |
| Ổ /home | > 70% | > 85% |

## Persistence — chống mất dữ liệu khi máy ảo bị thay thế

Máy ảo bị thay (deploy) thì mọi process chết nhưng /home còn nguyên.
- Ghi lịch sử ra đĩa mỗi 10 giây + flush, fsync mỗi 30 giây.
- `snapshot.json` mỗi 5 phút và khi nhận SIGTERM.
- Phát hiện khoảng trống khi khởi động (gap > 120 giây ghi vào
  `history/events.jsonl`).
- `backup.sh` mỗi giờ, giữ 7 ngày.
- Giới hạn đã kiểm chứng: giết đột ngột (SIGKILL) mất tối đa ~10 giây mẫu
  cuối + mẫu còn trong RAM.

## AI-Boot — dọn dẹp & tối ưu

Nguyên tắc: quét trước — chạy sau. `GET /api/aiboot/analyze` liệt kê mục
dọn (cache ~/.cache, file tạm, history > 7 ngày, __pycache__, xả page cache)
kèm dung lượng và độ an toàn; `POST /api/aiboot/run` chỉ chạy mục đã chọn
và đã xác nhận. File lớn > 100 MB chỉ liệt kê, KHÔNG tự xóa.
Quét đầu 26/11/2026 tìm được ~828 MB dọn được an toàn.

## Quản lý file — 5 lớp chống lỗi

1. Khóa khu vực: chỉ `~/workspace`, `/tmp`, `~/.cache`. Ngoài khu vực
   (vd `/etc`, `~/.ssh`) từ chối.
2. File lõi của monitor (`monitor.py`, `dashboard.html`, `start.sh`,
   `stop.sh`, `README.md`) cấm sửa/xóa/đổi tên trực tiếp — sửa bằng patch
   script để khỏi làm treo monitor.
3. Backup trước khi ghi: bản cũ copy sang `backup-edits/<giờ>_<tên>`.
4. Ghi nguyên tử: ghi file tạm cùng thư mục + fsync + `os.replace`.
5. Kiểm tra cú pháp TRƯỚC khi ghi: `.json` phải parse được, `.py` phải
   compile được, `.sh` phải qua `bash -n`. Sai thì KHÔNG ghi, file gốc
   còn nguyên.
- Xóa file = chuyển vào thùng rác, khôi phục được. Giới hạn: file ≤ 512 KB,
  phải là text UTF-8.

## Kiểm tra bảo mật & vá lỗi (v7)

Quét chỉ đọc, vá chỉ chạy khi bấm xác nhận (giống AI-Boot).
- Quét: gói chờ cập nhật (tách riêng gói `-security`; phát hiện danh sách
  apt trống/chưa từng update — con số "0 gói chờ" khi đó vô nghĩa), cần
  reboot sau vá kernel, cổng TCP đang nghe (cờ cổng mở 0.0.0.0), sshd có
  chạy + cấu hình, ufw đã cài chưa, quyền `~/.ssh` (thư mục 700, khóa riêng
  600; bỏ qua `.pub`, `known_hosts*`, `config`), file world-writable trong
  HOME (sâu tối đa 3 cấp, tối đa 20), quy tắc sudo NOPASSWD, an toàn dữ
  liệu (tuổi snapshot + backup mới nhất).
- Vá: `apt_update`, `apt_security` (chỉ gói bảo mật), `apt_upgrade_all`
  (không tick sẵn — mục "cân nhắc"), `fix_ssh_perms`,
  `fix_world_writable`. Vá apt bị chặn khi RAM khả dụng < 300 MB (dọn RAM
  bằng AI-Boot trước). Không tự reboot, không tự sửa sudoers, không tự bật
  tường lửa.
- Kết quả quét đầu 27/11/2026: 0 nguy cấp — apt chưa từng chạy update
  (tải 13,4 MB mất 7 phút 21 giây, chỉ 30 kB/s); quét lại sau update: 0 gói
  chờ, hệ thống mới nhất. Timeout vá apt là 600 giây (mặc định 180 giây
  không đủ vì mirror chậm).

## Quy tắc vận hành (rút ra từ thực tế)

- RAM là nút thắt: không chạy 2 việc nặng cùng lúc (browser + build +
  render video). Kiểm tra /health trước khi kết luận gì về monitor — PID
  thay đổi sau mỗi lần khởi động lại.
- Không dừng monitor bằng `pkill -f "python3 monitor.py"` từ lệnh exec có
  chứa chuỗi đó (giết luôn shell của mình) — dùng `./stop.sh` hoặc PID.
- VM thiếu tzdata: giờ Việt Nam tính thủ công UTC+7 trong code; `ls` hiện
  giờ UTC nên tên file (giờ VN) lệch 7 giờ so với mtime — không phải lỗi.
- Trình sửa file của Space/monitor KHÔNG sửa được file hệ thống ở
  /home/hatch (SOUL.md, AGENTS.md, MEMORY.md...) — ghi sẽ lỗi EPERM và nội
  dung mới mất trắng vì không có lưu nháp. File hệ thống sửa bằng công cụ
  sửa file của agent, hoặc đọc nội dung vào chat rồi ghi.
- Sửa `monitor.py` xong phải `python3 -m py_compile` trước khi restart;
  keepalive sẽ cứu nếu monitor chết sau restart.
- Ổ ảo KVM không có tên model — nói thật là không có, không bịa.
- Space gọi collector local phải bỏ qua proxy (`curl --noproxy '*'`),
  nếu không http_proxy sẽ phá các cuộc gọi localhost.

## Mở rộng (thêm mục mới)

1. Thêm hàm `xxx_scan()` / `xxx_run()` trong `monitor.py` theo mẫu
   `aiboot_analyze()` / `aiboot_run()` (quét chỉ đọc, chạy cần confirm).
2. Thêm route GET/POST trong handler theo mẫu `/api/aiboot/*`.
3. Thêm section + hàm JS trong `dashboard.html` theo mẫu AI-Boot
   (checkbox, mục auto tick sẵn, mục nguy hiểm không tick sẵn).
4. Thêm tab/action tương ứng trong Space qua artifact.edit, giữ nguyên các
   tab và action cũ.

## Kiểm chứng sau khi cài (bên kia phải làm đủ)

1. `curl -s http://127.0.0.1:8765/health` trả `{"ok": true, ...}`.
2. `curl -s http://127.0.0.1:8765/api/metrics` trả số liệu thật (CPU/RAM khớp `free -m`).
3. Mở dashboard `http://127.0.0.1:8765` thấy đủ 3 biểu đồ tròn + bảng process.
4. `GET /api/security/scan` chạy được, trả danh sách issue.
5. `backup.sh` chạy tay 1 lần ra thư mục backup mới.
6. Dừng monitor (`./stop.sh`) rồi chạy lại (`./start.sh`) — phải lên lại.

## Đầu vào

Máy ảo Ubuntu có quyền root; code tại `~/workspace/vm-monitor`
(monitor.py, dashboard.html, start.sh, stop.sh, backup.sh).

## Đầu ra

Dashboard realtime + Space 5 tab; cảnh báo ngưỡng RAM/CPU/swap/đĩa; báo cáo
quét bảo mật; snapshot + backup chống mất dữ liệu.

## Giới hạn

- VM chỉ gọi ra ngoài — dashboard local chỉ mở được trong VM, điện thoại
  xem qua Space.
- RAM khả dụng thường chỉ 500–900 MB: không chạy 2 việc nặng cùng lúc.
- Vá apt cần mạng, lần đầu tải chậm (~30 kB/s); timeout vá apt là 600 giây.
- Trình sửa file không sửa được file hệ thống ở /home/hatch (lỗi EPERM).
- Không tự reboot, không tự sửa sudoers, không tự bật tường lửa.
- Gói code không mang theo dữ liệu lịch sử của máy gốc; Space gốc không
  chuyển được sang tài khoản khác.

## Từ khóa

vm monitor, giám sát máy ảo, ram, ai-boot, bảo mật, vá lỗi, quản lý file,
snapshot, backup, keepalive, ubuntu, proc
