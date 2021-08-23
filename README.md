---
### Lời nói đầu

> **Lưu ý**: Chatbot này được mình clone từ dự án Chatbot CNH của Team Nui và tự phát triển thêm một vài tính năng nho nhỏ. Mọi người có thể xem qua dự án gốc ở link này [https://github.com/ngxson/chatbot-cnh]

P/S: Bạn có thể ghé thăm **website chính thức** của Nui tại đây: [https://ngxson.com/](https://ngxson.com/)

### Tính năng

Ngoài tính năng nói chuyện ẩn danh mà hầu hết các chatbot cơ bản đều có, Chatbot CNH còn có 1 vài tính năng thú vị như:

* Ghép cặp theo nam - nữ
* Gửi ảnh chó/mèo bất kỳ khi gõ meow hoặc gauw
* Nút báo cáo cho admin được đặt tại các vị trí cần thiết, tránh để người dùng sử dụng nút report của facebook => page dễ bị xóa
* Các thông báo lỗi rõ ràng, người dùng dễ hiểu (ví dụ như inbox ko gửi được do "đối" chat đã block page/deactive facebook...)
* Có giao diện cho admin quản lý
* Tối ưu hóa trong hệ thống như:
  * Có cache để đỡ truy vấn SQL nhiều lần (các bạn dùng heroku hay c9 sẽ gặp vấn đề là server chính với server SQL ở xa nhau, độ trễ sẽ lớn. Vì vậy, có cache sẽ giúp giảm rất rất nhiều lượt query)
  * Cache sử dụng native c++ hashtable
  * Đối với heroku, tự động reset app để lấy IP khác nếu IP hiện tại bị facebook chặn.
  * Hạn chế tối đa việc sử dụng try... catch

Và để phục vụ cho dự án riêng được đặt ra cũng như sự hứng thú học hỏi ứng dụng trong một dự án thực tiễn và mong muốn trường cũ cũng có riêng một chatbot nên mình đã thêm một vài tính năng khác như sau:
 * Random một fact về Trường 
 * Giới thiệu các câu lạc bộ trong Trường
 * Có thể chat với bot(AI) (chức năng này vẫn đang trong quá trình thực hiện)
 
P/S: Ở đây Trường là THPT Chuyên Lê Quý Đôn - Đà Nẵng

### Hướng dẫn cài đặt

  Các bạn hãy xem hướng dẫn kèm ảnh chi tiết tại đây (dùng host Heroku): [click here](https://raw.githubusercontent.com/ngxson/chatbot-cnh/master/readme/1-TUT-CHATBOT-CNH.pdf)

  Đối với các bạn dùng C9 hay host riêng: [click here](https://github.com/ngxson/chatbot-cnh/blob/master/readme/TUT_NON_HEROKU.md)

  (Bạn nên in hướng dẫn này ra cho dễ nhìn, chỉ có 16 trang thôi mà :smiley: )

  **UPDATE** Hãy tham gia group để báo lỗi cũng như nhận các bản cập nhật trong tương lai: [click here](https://www.facebook.com/groups/857516637754308)

### Sơ đồ hoạt động

Trăm nghe không bằng 1 thấy. Mình nghĩ sơ đồ sau sẽ giúp bạn có cái nhìn tổng quát hơn về những gì Team Nui đã làm:

<img src="https://raw.githubusercontent.com/ngxson/chatbot-cnh/master/readme/diagram_index.png" width="100%">

Trong sơ đồ còn 1 vài phần Nui chưa biểu diễn đc:

* facebook.js: chứa tools để giao tiếp với facebook
* extension/gifts.js: công cụ chọn ảnh chó/mèo random
* extension/logger.js: công cụ lưu lại ID các cặp vào Google Form
* extension/broadcast.js: công cụ gửi tin nhắn tới tất cả người dùng
* extension/admin.js: công cụ giao tiếp với giao diện admin
* extension/cronjob.js: cronjob tự động kick người dùng khỏi hàng chờ nếu phải chờ quá lâu
* dbmongo.js: tools để giao tiếp với MongoDB
* dbcache.js: tools để giao tiếp với cache

### 
