var https = require('https');
var co = require('./custom/const');
const la = require('./custom/lang');
const request = require('request');
const { KEYWORD_GENDER } = require('./custom/lang');
var heroku = null;

if (co.HEROKU_API_KEY) {
    var Heroku = require('heroku-client');
    heroku = new Heroku({ token: co.HEROKU_API_KEY });
}

exports.getFbData = function(accessToken, apiPath, callback) {
    var options = {
        host: 'graph.facebook.com',
        port: 443,
        path: apiPath + '?access_token=' + accessToken, //apiPath example: '/me/friends'
        method: 'GET'
    };

    var buffer = ''; //this buffer will be populated with the chunks of the data received from facebook
    var request = https.get(options, function(result){
        result.setEncoding('utf8');
        result.on('data', function(chunk){
            buffer += chunk;
        });

        result.on('end', function() {
            try {
              var data = JSON.parse(buffer);
              callback(data);
            } catch (e) {
              callback({error:true});
            }
        });
    });

    request.on('error', function(e){
        console.log('error from facebook.getFbData: ' + e.message);
		    callback({"error":"oui"});
    });

    request.end();
}

exports.setupFBApi = function(request, token, report_link) {
	request({
		url: 'https://graph.facebook.com/v12.0/me/messenger_profile',
		qs: {access_token:token},
		method: 'POST',
		json: {
			"get_started":{
				"payload":"ʬ"
			}
		}
	}, function(error, response, body) {})
	request({
		url: 'https://graph.facebook.com/v12.0/me/thread_settings',
		qs: {access_token:token},
		method: 'DELETE',
		json: {
			"setting_type" : "call_to_actions",
			"thread_state" : "existing_thread"
		}
	}, function(error, response, body) {console.log(response.body)})
  request({
    url: 'https://graph.facebook.com/v12.0/me/messenger_profile',
    qs: {access_token:token},//co.FB_PAGE_ACCESS_TOKEN},
    method: 'POST',
    json: {
      "persistent_menu": [
        {
          "locale": "default",
          "composer_input_disabled": false,
          "call_to_actions": [
          {
            "title": "Bắt đầu kết nối ✨",
            "type": "postback",
            "payload": la.KEYWORD_BATDAU,
          },
          {
            "title": "Hướng dẫn sử dụng",
            "type": "postback",
            "payload": la.KEYWORD_HELP,
          }
          ]
        }
      ]
    }
  }, function(error, response, body) {console.log(response.body)})
}

exports.quickbtns = [
  {
    "content_type":"text",
    "title":"Club",
    "payload":la.KEYWORD_CLUB
  },{
    "content_type":"text",
    "title":"Fact",
    "payload":la.KEYWORD_FACT
  },{
    "content_type":"text",
    "title":"🐈",
    "payload":la.KEYWORD_CAT
  },{
    "content_type":"text",
    "title":"🦮",
    "payload":la.KEYWORD_DOG
  }
];

exports.quickbtns_mini = [
  {
    "content_type":"text",
    "title":"Club",
    "payload":la.KEYWORD_CLUB
  },
  {
    "content_type":"text",
    "title":"Fact",
    "payload":la.KEYWORD_FACT
  },
  {
    "content_type":"text",
    "title":"🐈",
    "payload":la.KEYWORD_CAT
  },{
    "content_type":"text",
    "title":"🦮",
    "payload":la.KEYWORD_DOG
  }
];

exports.quickbtns_club = [
  {
    "content_type":"text",
    "title":"Xem thêm 10 CLB",
    "payload":la.KEYWORD_CLUB_2
  }
];

exports.quickbtns_gender = [
  {
    "content_type":"text",
    "title":"🧑🏻♂️Nam",
    "payload":KEYWORD_GENDER+'nam'
  },
  {
    "content_type":"text",
    "title":"👩🏻♀️Nữ",
    "payload":KEYWORD_GENDER+'nu'
  },
  {
    "content_type":"text",
    "title":"💃🏻🕺🏻Bất kì",
    "payload":KEYWORD_GENDER+'all'
  }
];

exports.quickbtns_end = [
  {
    "content_type":"text",
    "title":"Kết thúc",
    "payload":la.KETTHUC_FINAL
  }
];


var sendFacebookApi = function (sender, receiver, messageData, data, dontSendErr) {
	if (messageData.text || messageData.attachment) {
		if (messageData.text && messageData.text.length > 639) {
			sendFacebookApi(sender, sender, {text: la.ERR_TOO_LONG}, null, true);
			return;
		}

		request({
			url: 'https://graph.facebook.com/v12.0/me/messages',
			qs: {access_token:co.FB_PAGE_ACCESS_TOKEN},
			method: 'POST',
			json: {
				recipient: {id:receiver},
        message: messageData,
        messaging_type: "RESPONSE"
			}
		}, function(error, response, body) {
			if (error) {
				console.log('Error sending messages: ', error)
			} else if (response.body.error && response.body.error.code && !dontSendErr) {
				console.log(sender+'vs'+receiver+' Error: ', response.body.error);
				if (response.body.error.code == 200)
					sendFacebookApi(sender, sender, {text: la.ERR_200}, null, true);
				else if (response.body.error.code == 10)
					sendFacebookApi(sender, sender, {text: la.ERR_10}, null, true);
				else if (co.HEROKU_API_KEY && response.body.error.code == 5)
					heroku.delete('/apps/'+co.APP_NAME+'/dynos/web.1', function (err, app) {});
			}
		})
	} else {
		console.log("__sendMessage: err: neither text nor attachment");
		console.log(messageData);
	}
}

exports.sendSeenIndicator = function (receiver) {
  request({
    url: 'https://graph.facebook.com/v12.0/me/messages',
    qs: {access_token:co.FB_PAGE_ACCESS_TOKEN},
    method: 'POST',
    json: {
      recipient: {id:receiver},
      sender_action:"mark_seen",
      messaging_type: "RESPONSE"
    }
  }, function(error, response, body) {})
}

exports.sendFacebookApi = sendFacebookApi;
exports.sendImageVideoReport = function(msg_data, sender, receiver) {
	if (msg_data.sticker_id) return;
	var type = "ảnh";
	if (msg_data.attachments[0].type == "video") type = "video";
	else if (msg_data.attachments[0].type == "audio") return;
	if (msg_data.mid) sendFacebookApi(sender, receiver, {
	  "attachment":{
	    "type":"template",
	    "payload":{
	      "template_type":"button",
	      "text":"[Chatbot] Bạn đã nhận 1 "+type,
	      "buttons":[{"type":"web_url", "title":"Báo cáo/Report","url":co.REPORT_LINK}]
	    }
	  }
	}, null);
}
