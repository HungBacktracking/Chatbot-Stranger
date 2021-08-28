
// LƯU Ý: MỖI LẦN CHỈNH SỬA FILE NÀY, BẠN CẦN CHẠY DEPLOY.BAT ĐỂ UPDATE LÊN SERVER

module.exports = {
	BAO_TRI : "[Chatbot] Server hiện đang bảo trì. Mình sẽ sớm kết nối lại và thông báo cho các bạn.",
	FIRST_COME : '[Chatbot] Chào mừng bạn đến với Chatbot LQĐ. Trước khi bắt đầu, hãy chắc chắn rằng bạn đã chọn đúng giới tính người muốn chat cùng. Ấn trợ giúp (trogiup) để xem thêm.',
	HUONG_DAN : "[Chatbot] Gửi batdau để tìm bạn chat hoặc trogiup để xem các tùy chọn khác.",
	BATDAU_GENDER : "[Chatbot] Bạn muốn chat với ai? Hãy chọn giới tính người bạn muốn chat bằng cách nhấn vào các nút bên dưới.",
	BATDAU_OKAY : "[Chatbot] OK! Chúng mình sẽ thông báo khi tìm được \"đối phương\".",
	BATDAU_WARN_GENDER : "[Chatbot] Lưu ý: Bạn không chọn giới tính. Có thể bạn sẽ phải đợi lâu hơn.",
	BATDAU_ERR_ALREADY : "[Chatbot] Bạn không thể tìm người khác khi chưa ketthuc...",
	WAITING : "[Chatbot] Đang tìm bạn chat...",
	START_CHAT : "[Chatbot] Connected! Nếu muốn kết thúc, hãy gửi ketthuc\nChúc 2 bạn nói chuyện vui vẻ :>",
	END_CHAT : "[Chatbot] End chat! \nGửi batdau để tìm bạn chat hoặc trogiup để xem các tùy chọn khác.",
	END_CHAT_FORCE : "[Chatbot] Hiện tại không có ai đang online cả. Bạn hãy thử lại sau nhé :(",
	ERR_UNKNOWN : "[Chatbot] Server xảy ra lỗi nhưng ko nghiêm trọng lắm\nHãy gửi ketthuc để thoát ra và thử lại",
	ERR_ATTACHMENT : "[Chatbot] Lỗi: chúng mình chưa hỗ trợ gửi dạng dữ liệu này",
	ATTACHMENT_FILE : "[Chatbot] Bạn ý đã gửi 1 tệp tin: ",
	ATTACHMENT_LINK : "[Chatbot] Bạn ý đã gửi 1 đường link: ",
	ERR_FAKE_MSG : "[Chatbot] Lỗi: Bạn không được giả mạo tin nhắn của bot",
	SQL_ERR : "[Chatbot] Lỗi: Không thể kết nối với database. Hãy báo cho admin!",
	GENDER_ERR : "[Chatbot] Lỗi: Giới tính nhập vào không hợp lệ!",
	GENDER_WRITE_OK : "[Chatbot] Bạn đã chọn giới tính mong muốn tìm được là: ",
	GENDER_WRITE_WARN : "\n\nLưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc nói chuyện.",
	GENDER_ARR : ['All', 'Nam', 'Nữ', 'Gay', 'Les'],
	HELP_TXT : "[Chatbot] Danh sách các lệnh:\n" +
				"- batdau: Tìm bạn chat\n"+
				"- ketthuc: Kết thúc chat\n"+
				"- trogiup: Xem trợ giúp\n"+
				"- club: Các câu lạc bộ\n"+
				"- fact: Một điều thú vị\n"+
				"- meow: Xem ảnh mèo\n"+
				"- gauw: Xem ảnh cún\n",
				
				
	KEYWORD_BATDAU : 'batdau',
	KEYWORD_KETTHUC : 'ketthuc',
	KEYWORD_GENDER : 'tim',
	KEYWORD_HELP : 'trogiup',
	KEYWORD_CAT : 'meow',
	KEYWORD_DOG : 'gauw',
	KEYWORD_BOT : 'chatcungbot',
	KEYWORD_CLUB : 'club',
	KEYWORD_CLUB_2 : 'club_2',
	KEYWORD_FACT: 'fact',

	ERR_200: '[Chatbot] Bạn chat không thể nhận tin nhắn do đã xóa inbox hoặc block page.',
	ERR_10: '[Chatbot] Bạn chat không thể nhận tin nhắn do 2 bạn không nói chuyện gì trong vòng 24h. Hãy gửi ketthuc để kết thúc chat.',
	ERR_TOO_LONG: '[Chatbot] Lỗi: tin nhắn quá dài (nhiều hơn 640 ký tự). Hãy chia nhỏ tin nhắn và gửi dần.'
};
