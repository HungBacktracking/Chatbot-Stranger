module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '516ba7e5a230b14479b48fbc14a34940',
	FB_PAGE_VERIFY_TOKEN : 'backtracking', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAMewLjZCkcoBACuI0W1ZAAWgqouvmGlyQPevoMasDmA3fmPGXWaPFb8Vy1yZBltQmk9EZCkZAJ6gHqw2meKe4aO49gSdZBMuPtJ7zmsMldonRc9KlcZCd1CrKuFNz2P6hOogjFZB7NdaLDIZA6ZAV6ZAZBZBz7OEz0d7atqpzpRrLBL33SJ7waRZByZC774mcTslskozbrBwFtwcrFBQZDZD',

	//HEROKU STUFFS
	APP_NAME : 'chatbotbacktracktesting',
	HEROKU_API_KEY : 'ee3bb108-3227-4f45-a94d-fae7c71cf9b2',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://Neo:NeoTheThird1404%5E%5E@cluster0-shard-00-00-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-01-3y5vp.gcp.mongodb.net:27017,cluster0-shard-00-02-3y5vp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://goo.gl/forms/FlqtshjdI9bMesSN2",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 100, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 0, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "backtracking" //password để login vào trang admin
};
