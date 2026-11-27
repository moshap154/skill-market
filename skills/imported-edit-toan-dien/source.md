Toàn bộ prompt trong video 
(thay [TÊN FILE] bằng tên video của bạn, chạy trong Claude Code hoặc ChatGPT):
📌 Tặng Full Prompt + Quy trình làm phim bằng AI: https://youtu.be/uo6ipB8wz2M 
🔥 2026 - AI không còn là lợi thế. Không biết dùng mới là bất lợi. Nếu bạn muốn học AI để kiếm tiền? Khóa này mình chia sẻ MỌI THỨ: https://elearning.nghecongso.com/academy/


🔥PROMPT 01 - Edit toàn diện (video thô vừa quay)
Tôi vừa quay một video nói chuyện thô, file [TÊN FILE] trong thư mục này. Hãy edit thành video hoàn chỉnh để đăng TikTok, Reels, Shorts.
CẮT: bỏ khoảng im lặng dài, ừm ờ à, nói vấp, câu bỏ dở, câu nói lại (2 câu trùng ý thì giữ câu sau), phần đầu và cuối thừa; giữ nhịp nghỉ tự nhiên, hình và tiếng luôn khớp, không cắt cụt chữ.
LÀM CUỐN: 3 giây đầu hiện câu hook chữ thật to lấy từ ý mạnh nhất trong video; phụ đề tiếng Việt chạy theo lời nói, mỗi lần 2-5 chữ, chữ trắng viền đen, từ khóa tô vàng; mỗi ý chính hiện chữ to 2 dòng (dòng trắng nhỏ trên, dòng vàng to dưới); zoom vào 110-120% ở câu nhấn mạnh, zoom ra nhẹ khi chuyển ý, xen kẽ để hình không đơn điệu; chuyển cảnh nhanh ở các mối cắt khi cần; thêm tiếng whoosh, ting nhẹ khi chữ xuất hiện (âm thanh tự tạo hoặc miễn phí bản quyền).
KỸ THUẬT: tự kiểm tra máy đã có ffmpeg, Python, Whisper chưa, thiếu thì tự cài; phụ đề dùng Whisper chạy trên máy, model tốt nhất máy chạy nổi; font có đủ dấu tiếng Việt (Be Vietnam Pro hoặc Montserrat).
XUẤT: giữ khung hình theo video gốc (dọc 9:16 hoặc ngang 16:9), độ phân giải gốc tối đa 4K, file tên "[tên gốc] (final).mp4" đặt cạnh bản gốc, không sửa bản gốc.
TỰ KIỂM TRƯỚC KHI GỬI: chụp các khung có chữ ra xem, chữ không che mặt, không lỗi dấu, phụ đề khớp lời; nghe lại mọi mối cắt. Báo thời lượng trước và sau, kèm vài chỗ tôi nên xem lại. Không cần hỏi lại giữa chừng.
LƯU SKILL: làm xong, lưu toàn bộ quy trình và code này thành một Skill tên edit-toan-dien, để lần sau tôi chỉ cần đưa video mới và gọi /edit-toan-dien.


🔥PROMPT 02 - Thêm chữ và hiệu ứng (video đã cắt sẵn)
File [TÊN FILE] là video tôi đã cắt sạch phần thừa nhưng còn đơn điệu. Hãy giữ nguyên nội dung và thời lượng, chỉ thêm lớp chữ, hình và âm thanh để video thu hút, chuyên nghiệp hơn.
HOOK: 2-3 giây đầu chèn một câu hook dạng câu hỏi hoặc lời hứa, rút từ ý gây tò mò nhất trong video, chữ to 2 dòng, có tiếng đấm khi hiện.
CHỮ: phụ đề tiếng Việt chạy theo lời nói, mỗi lần 2-5 chữ, đặt ở 1/3 dưới, không che mặt; từ hoặc cụm quan trọng (số liệu, tên, kết luận) bật lên to giữa khung, màu vàng hoặc đỏ viền trắng, nảy nhẹ khi xuất hiện; mỗi lúc chỉ một cụm chữ lớn, không chồng chữ.
HÌNH MINH HỌA: ở 4-6 chỗ đang nói về một vật hoặc khái niệm cụ thể, chèn hình minh họa nhỏ (icon hoặc hình vẽ tự dựng bằng code, hoặc ảnh miễn phí bản quyền có nguồn) bay vào cạnh người nói 1-2 giây.
ÂM THANH: tiếng pop khi chữ nhấn hiện, whoosh khi hình minh họa bay vào, âm lượng nhỏ hơn giọng nói rõ ràng.
KỸ THUẬT: tự cài ffmpeg, Python, Whisper nếu máy chưa có; font đủ dấu tiếng Việt.
XUẤT: khung và độ phân giải theo gốc (tối đa 4K), file "[tên gốc] (final).mp4" cạnh bản gốc; nếu tôi ghi "thêm bản dọc" thì xuất thêm 9:16 với người nói căn giữa.
TỰ KIỂM: xem lại từng khung có chữ và hình, không đè mặt, không lỗi dấu, phụ đề khớp lời. Không cần hỏi lại giữa chừng.
LƯU SKILL: làm xong lưu thành Skill tên them-chu-hieu-ung để lần sau gọi /them-chu-hieu-ung.


🔥PROMPT 03 - Phong cách sang trọng, cao cấp
File [TÊN FILE] là video nói chuyện đã cắt cơ bản nhưng màu tối, da xấu, nhìn bình thường. Hãy nâng thành video phong cách sang trọng, cao cấp kiểu kênh thương hiệu cá nhân.
HÌNH: cân lại sáng tối, tăng tương phản vừa phải, tông màu điện ảnh ấm nhẹ, làm mịn da tự nhiên (vẫn thấy kết cấu da, không làm nhựa), làm sáng vùng mặt nhẹ; nếu còn đoạn im lặng hay ừm ờ rõ ràng thì cắt luôn.
HOOK: 3 giây đầu một câu hook rút từ ý mạnh nhất, kiểu dòng chữ thường nhỏ phía trên và một từ khóa chữ in hoa rất to phía dưới; nếu tách được người khỏi nền sạch sẽ thì cho từ khóa to nằm SAU lưng người nói trong 1-2 giây, viền tách phải kỹ, viền nhảy thì bỏ hiệu ứng này.
PHỤ ĐỀ: chữ chạy theo lời nói, font thanh lịch (serif hoặc sans mảnh), chữ trắng có bóng mềm, từ khóa đổi sang vàng ánh kim, xuất hiện mượt (mờ dần, trượt nhẹ), không viền dày kiểu meme.
ÂM THANH: nhạc nền nhẹ sang trọng miễn phí bản quyền, nhỏ hơn giọng nói rõ ràng.
KỸ THUẬT: tự cài ffmpeg, Python, Whisper và thư viện tách nền người nếu máy chưa có.
XUẤT: khung theo gốc, độ phân giải tối đa 4K, file "[tên gốc] (cao cap).mp4" cạnh bản gốc.
TỰ KIỂM: xuất vài khung trước và sau đặt cạnh nhau để so màu và da; kiểm chữ không che mặt, không lỗi dấu. Không cần hỏi lại giữa chừng.
LƯU SKILL: làm xong lưu thành Skill tên edit-cao-cap để lần sau gọi /edit-cao-cap.


🔥PROMPT 04 - Video dài YouTube (quay màn hình + talking head)
Tôi có video hướng dẫn dài [TÊN FILE] quay màn hình kèm camera mặt tôi ở góc (nếu là 2 file riêng: màn hình [FILE 1], camera [FILE 2], cùng thời lượng thì cắt đồng bộ cả hai). Hãy edit thành video YouTube hoàn chỉnh, sẵn sàng đăng.
BƯỚC DUYỆT (dừng đúng 1 lần ở đây): chép lời toàn bộ video, lập danh sách các đoạn định cắt (im lặng dài, ừm ờ à, nói lắp, nói lại, đoạn chờ máy chạy) kèm mốc giờ và lý do, gửi tôi duyệt. Tôi trả lời "ok" thì làm tiếp hết, không hỏi thêm.
CẮT: theo danh sách đã duyệt, 2 câu trùng ý thì giữ câu sau, đoạn chờ AI xử lý thì tua nhanh thay vì cắt hẳn, hình tiếng luôn khớp.
LÀM RÕ THAO TÁC: tự zoom vào vùng đang thao tác (chỗ chuột bấm, hộp thoại, bảng đang mở) cho dễ đọc rồi zoom ra khi chuyển bước; khoanh vùng nét vẽ tay (sketch) quanh nút hoặc tính năng đang giới thiệu; tự làm mờ mọi thông tin riêng tư lộ trên màn hình (email, số điện thoại, API key, mật khẩu, số tài khoản).
THẺ MINH HỌA: ở 3-6 chỗ đang so sánh, giải thích luồng, đọc số liệu, dựng thẻ animation toàn màn hình 3-6 giây (bảng so sánh, sơ đồ luồng, số liệu to) bằng code, chuyển cảnh nhẹ vào và ra.
PHỤ ĐỀ: chỉ phụ đề chọn lọc ở ý chính và tên công cụ, không phụ đề toàn bộ.
CTA: cuối video dựng đoạn kêu gọi Like và Đăng ký có nút bấm animation.
KỸ THUẬT: tự cài ffmpeg, Python, Whisper nếu máy chưa có; video dài thì xử lý từng đoạn để không treo máy.
XUẤT: 16:9, độ phân giải gốc tối đa 4K, file "[tên gốc] (final).mp4" cạnh bản gốc.
TỰ KIỂM: xem lại mọi khung có zoom, thẻ, vùng làm mờ; nghe lại mọi mối cắt; báo thời lượng trước và sau cùng các chỗ nên xem lại.
LƯU SKILL: làm xong lưu thành Skill tên edit-video-youtube để lần sau gọi /edit-video-youtube.


🔥PROMPT 05 - Animation kể chuyện, giải thích kiến thức, lịch sử
Tôi muốn một video giải thích dạng đồ họa chuyển động cao cấp, chủ đề: [CHỦ ĐỀ, vd "Vì sao Sài Gòn mưa là ngập?"], dài khoảng [2-3] phút, khung [ngang 16:9 / dọc 9:16], khán giả là người Việt phổ thông.
KỊCH BẢN: tự viết lời đọc tiếng Việt, mở bằng câu hỏi gây tò mò, đi theo mạch nguyên nhân dẫn tới kết quả, kết bằng một ý đáng nhớ; mọi số liệu và mốc thời gian phải tra nguồn uy tín, ghi năm của số liệu, gửi tôi danh sách nguồn kèm video.
GIỌNG ĐỌC: tạo giọng đọc tiếng Việt tự nhiên (vd edge-tts giọng vi-VN-NamMinhNeural hoặc vi-VN-HoaiMyNeural), nhịp vừa, có ngắt nghỉ.
HÌNH: dựng bằng code từng cảnh khớp lời đọc - chữ tiêu đề động, timeline, bản đồ, sơ đồ, biểu đồ số liệu có dòng nguồn nhỏ góc dưới; dùng hình ảnh thật từ nguồn được phép dùng (Wikimedia Commons, ảnh public domain) có ghi nguồn trên hình; phong cách tối màu điện ảnh, chữ serif lớn, hạt film nhẹ; bản đồ Việt Nam phải có đủ Hoàng Sa và Trường Sa.
ÂM THANH: phụ đề tiếng Việt chạy theo lời đọc, nhạc nền và hiệu ứng âm thanh miễn phí bản quyền, nhạc nhỏ hơn giọng.
TỰ KIỂM: xuất ảnh vài khung xem lại chữ không lỗi dấu, không tràn khung, số liệu trên hình khớp lời đọc và nguồn. Không cần hỏi lại giữa chừng.
XUẤT: file MP4 1080p (hoặc 4K nếu máy đủ sức) trong thư mục này.
LƯU SKILL: làm xong lưu thành Skill tên video-giai-thich để lần sau tôi chỉ cần gõ /video-giai-thich kèm chủ đề mới.


🔥PROMPT 06 - Hoạt hình người que (từ file giọng đọc)
File [TÊN FILE GIỌNG ĐỌC] là giọng tôi kể một câu chuyện ngắn. Hãy biến nó thành video hoạt hình người que kiểu viral, nét chì trên nền giấy cũ, dọc 9:16, dài đúng bằng file giọng đọc.
HIỂU CHUYỆN: chép lời bằng Whisper, chia thành từng cảnh theo câu, mỗi cảnh xác định ai làm gì, cảm xúc gì, vật gì xuất hiện.
HÌNH: vẽ bằng code (SVG hoặc canvas), nhân vật người que nét chì đen có rung nhẹ như vẽ tay, mặt biểu cảm rõ (vui, buồn, giận, ngạc nhiên), mỗi nhân vật có một dấu nhận diện riêng giữ nguyên suốt video (vd tóc, nơ, kính); đạo cụ và bối cảnh đơn giản (mây, mưa, nhà, cây) vẽ dần ra như đang được phác; chữ tượng thanh to nét tay ở chỗ có hành động (RẮC, BỤP, HUỴCH); chuyển cảnh nhẹ giữa các câu.
NỀN: giấy cũ ngả vàng, có vân giấy và vết bẩn nhẹ.
ÂM THANH: phụ đề tiếng Việt nét tay chạy theo lời, hiệu ứng âm thanh khớp hành động, nhạc nền rất nhỏ, giọng đọc gốc giữ nguyên làm chính.
TỰ KIỂM: xuất ảnh vài khung, nhân vật cùng một người phải giống nhau ở mọi cảnh, hình khớp đúng câu đang nói, chữ không lỗi dấu. Không cần hỏi lại giữa chừng.
XUẤT: MP4 1080x1920 trong thư mục này.
LƯU SKILL: làm xong lưu thành Skill tên video-nguoi-que để lần sau gọi /video-nguoi-que kèm file giọng mới.


🔥PROMPT 07 - Motion graphics tối giản (từ file giọng đọc)
File [TÊN FILE GIỌNG ĐỌC] là giọng tôi đọc một nội dung kiến thức. Hãy làm thành video chữ chuyển động tối giản (kinetic typography) kèm hình minh họa, dọc 9:16, dài bằng file giọng.
THỜI GIAN: chép lời bằng Whisper lấy mốc thời gian từng chữ, để chữ trên hình xuất hiện đúng lúc giọng nói tới chữ đó.
HOOK: 1-2 giây đầu hiện câu mạnh nhất trong bài làm hook chữ thật to, rồi mới vào nội dung.
CHỮ: nền giấy trắng xám có vân nhẹ, chữ đen đậm cỡ lớn hiện từng chữ hoặc cụm theo lời nói, từ khóa đổi màu (cam hoặc đỏ) và nảy nhẹ, câu cũ trượt đi nhường chỗ câu mới, bố cục căn trái hoặc giữa thay đổi theo nhịp, không quá 6-8 chữ trên khung một lúc.
MINH HỌA: ở các ý cụ thể, chèn hình minh họa tối giản (icon nét đen, hình vẽ đơn sắc tự dựng bằng code) xuất hiện cạnh chữ.
ÂM THANH: tiếng gõ phím, pop nhẹ khi từ khóa hiện, nhạc nền tối giản rất nhỏ, giọng gốc giữ làm chính.
TỰ KIỂM: so mốc chữ với giọng ở vài đoạn ngẫu nhiên (lệch không quá 0,2 giây), chữ không lỗi dấu, không tràn khung. Không cần hỏi lại giữa chừng.
XUẤT: MP4 1080x1920 trong thư mục này.
LƯU SKILL: làm xong lưu thành Skill tên video-chu-toi-gian để lần sau gọi /video-chu-toi-gian kèm file giọng mới.