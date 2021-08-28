---
### Lời nói đầu

> **Lưu ý**: Chatbot này được mình phát triển từ dự án Chatbot CNH của Nui và tự cải thiện thêm một vài tính năng nho nhỏ. Mọi người có thể xem qua dự án gốc ở link này [https://github.com/ngxson/chatbot-cnh]

### Tính năng
<img src="https://hungbacktracking.github.io/facts.github.io/Readme/Trogiup.jpg" width="30%" >

### Chatbot LQĐ có các tính năng thú vị như:

 - Ghép cặp người lạ, trong đó cho phép chọn giới tính người muốn gặp và được mở rộng về giới tính
<img src="https://hungbacktracking.github.io/facts.github.io/Readme/Gender.jpg" width="30%">

 - Gửi ảnh chó/mèo bất kỳ khi gõ meow hoặc gauw
<img src="https://hungbacktracking.github.io/facts.github.io/Readme/meow_gauw.jpg" width="30%">

 - Random một fact về Trường LQĐ
<img src="https://hungbacktracking.github.io/facts.github.io/Readme/fact.jpg" width="30%">

 - Giới thiệu các câu lạc bộ
<img src="https://hungbacktracking.github.io/facts.github.io/Readme/club.jpg" width="30%">

 - Có thể chat với bot(NLP) (chức năng này vẫn đang trong quá trình thực hiện)
 - Có giao diện cho admin quản lý
 - Thay đổi giao diện chọn giới tính giúp người dùng dễ dàng sử dụng hơn
 - Nút báo cáo được đặt tại các vị trí cần thiết, tránh để người dùng sử dụng nút report của facebook => page dễ bị xóa
 - Các thông báo lỗi rõ ràng, người dùng dễ hiểu (ví dụ như inbox ko gửi được do "đối phương" chat đã block page/deactive facebook...)

### Mọi người có thể dùng thử chatbot tại link này(hiện tại cần có vai trò người thử nghiệm để sử dụng): [ https://m.me/ChatbotBacktracking]


### Sơ đồ hoạt động

Mình nghĩ sơ đồ sau sẽ giúp bạn có cái nhìn tổng quát hơn về Chatbot:

<img src="https://raw.githubusercontent.com/ngxson/chatbot-cnh/master/readme/diagram_index.png" width="100%">

Trong sơ đồ còn 1 vài phần chưa biểu diễn đc:

* facebook.js: chứa tools để giao tiếp với facebook
* extension/gifts.js: công cụ chọn ảnh chó/mèo random, fact random và câu lạc bộ
* extension/logger.js: công cụ lưu lại ID các cặp vào Google Form
* extension/broadcast.js: công cụ gửi tin nhắn tới tất cả người dùng
* extension/admin.js: công cụ giao tiếp với giao diện admin
* extension/cronjob.js: cronjob tự động kick người dùng khỏi hàng chờ nếu phải chờ quá lâu
* dbmongo.js: tools để giao tiếp với MongoDB
* dbcache.js: tools để giao tiếp với cache

### 
