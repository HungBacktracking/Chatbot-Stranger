module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '516ba7e5a230b14479b48fbc14a34940',
	FB_PAGE_VERIFY_TOKEN : 'backtracking', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAMewLjZCkcoBAI8Ni8vej5gyfNZC11GVfrMN0y3ZBt30djhrpHAELIqMc8Ih5aT8KLc5kNDeVB5qHw4prHj78DAmLrj1TVFf0GzxZCUAIRYyj8xrZCi0ZAWDyaOnyXRZCQUyhaBS3zktiPhNOoxZBOFnnxAqzNpNDTLKfka5UiaDPzJNpHTqrjf0xiykhizqncEatHngOcL1AZDZD',

	//HEROKU STUFFS
	APP_NAME : 'chatbotbacktracktesting',
	HEROKU_API_KEY : '25bae27a-39db-492f-888f-7ccad6380949',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://Neo:NeoTheThird1404%5E%5E@cluster0-shard-00-00-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-01-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-02-3y5vp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://forms.gle/91VESvxABQzFx68A8",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 300, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "backtracking" //password để login vào trang admin
};