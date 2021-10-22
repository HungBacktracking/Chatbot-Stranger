'use strict'

//core
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const fs = require('fs');
const cors = require('cors');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const xhub = require('express-x-hub');
let  NKV = require('nk-vector');

//custom
const la = require('./custom/lang');
const co = require('./custom/const');

//parts
const tools = require('./dbtools');
const gendertool = require('./gender');
const facebook = require('./facebook');

//extensions
const improvement = require('./extension/improvement');
const gifts = require('./extension/gifts');
const bot = require('./extension/bot');
const logger = require('./extension/logger');
const admin = require('./extension/admin');
const cronjob = require('./extension/cronjob');

const token = co.FB_PAGE_ACCESS_TOKEN;
var sendFacebookApi = facebook.sendFacebookApi;

var MAINTAINING = false;

var mongo = {}

function connectToMongo() {
	MongoClient.connect(co.DB_CONFIG_URI.replace('/test', '/chatbot'), function(err, mdb) {
		if (err) {
			console.log(err);
			setTimeout(connectToMongo, 1000);
		} else {
			mongo.conn = mdb.db('chatbot');
			tools.initMongo(mongo, function() {
				tools.init(mongo);
				initChatbot();
			});
		}
	});
}
connectToMongo();

facebook.setupFBApi(request, token, co.REPORT_LINK);
//tkb.updateTableData();

app.set('port', (process.env.PORT || 5000))
if (co.FB_APP_SECRET != '') app.use(xhub({ algorithm: 'sha1', secret: co.FB_APP_SECRET }));
app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors());

// index
app.get('/', function(req, res) {
	res.send('World Final')
})

// for facebook verification
app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === co.FB_PAGE_VERIFY_TOKEN) {
		res.send(req.query['hub.challenge'])
	} else {
		res.send('Error, wrong token')
	}
})

// to post data
app.post('/webhook/', function(req, res) {
	if (!req.isXHub || !req.isXHubValid()) {
		res.send('ERR: cannot verify X-Hub Signature');
		return;
	}

	var messaging_events = req.body.entry[0].messaging
	for (var i = 0; i < messaging_events.length; i++) {
		var event = messaging_events[i]
		//console.log(event);
		if (event.read) event.message = {
			text: ""
		};
		//if (event.message.attachments) console.log(event.message.attachments[0]);
		var sender = event.sender.id;
		if (event.postback)
			if (event.postback.payload) event['message'] = {
				"text": event.postback.payload
			};
		if (event.message) {
			//pre test
			if (event.message.delivery) continue;
			var text = "";
			if (event.message.quick_reply && event.message.quick_reply.payload)
				text = event.message.quick_reply.payload;
			else if (event.message.text)
				text = event.message.text;

			if (MAINTAINING) {
				sendTextMessage(sender, la.BAO_TRI);
				res.sendStatus(200);
				return;
			}

			//fetch person state
			tools.findInWaitRoom(mongo, sender, function(waitstate) {
				tools.findPartnerChatRoom(mongo, sender, function(sender2, haveToReview, role, data) {
					var command = "";
					if (text.length < 60)
						command = text.toLowerCase().replace(/ /g, '');

					if (command == "ʬ") {
						improvement.sendWelcome(sender);
						sendButtonMsg(sender, la.FIRST_COME, true, true);
						return;
					}

					//ko ở trong CR lẫn WR
					if (!waitstate && sender2 == null) {
						if (command === la.KEYWORD_BATDAU) {
							improvement.sendGender(sender);
						} /*else if (command === la.KEYWORD_BATKI) {
							gendertool.getGender(mongo, sender, function(genderid) {
								findPair(sender, genderid);
							}, facebook, token);
						}*/ else if (command.startsWith(la.KEYWORD_GENDER)) {
							gendertool.setGender(mongo, sender, command, genderWriteCallback);
						} else if (command === la.KEYWORD_KETTHUC) {
							sendButtonMsg(sender, la.KETTHUC_ERR_ALREADY, true, true);
						} else if (command === la.KEYWORD_HELP) {
							sendButtonMsg(sender, la.HELP_TXT, true, false);
						} else if (command === la.KEYWORD_CAT) {
							gifts.sendCatPic(sender, null, true);
						} else if (command === la.KEYWORD_DOG) {
							gifts.sendDogPic(sender, null, true);
						} /*else if (command === la.KEYWORD_MUSIC) {
							gifts.sendMusic(sender, null, true);
						}*/ else if (command === la.KEYWORD_FACT) {
							gifts.sendFacts(sender, null, true);
						} else if (command === la.KEYWORD_CLUB) {
							gifts.sendClub(sender, null, true);
							sendTextMessage(sender, la.CLUB_HELP);
						} else if (command === la.KEYWORD_CLUB_2) {
							gifts.sendClub_2(sender, null, true);
						} else if (!event.read) {
							//sendButtonMsg(sender, la.HUONG_DAN, true, true);
							var txt=command;
							bot.SendBotReply(sender, txt);
						}
					}

					//Đã vào WR và đang đợi
					else if (waitstate && sender2 == null) {
						if (command === la.KEYWORD_KETTHUC) {
							tools.deleteFromWaitRoom(mongo, sender)
							sendButtonMsg(sender, la.END_CHAT, true, true);
						} else if (command === la.KEYWORD_BATDAU) {
							sendTextMessage(sender, la.BATDAU_ERR_ALREADY);
						} else if (command.startsWith(la.KEYWORD_GENDER)) {
							sendTextMessage(sender, la.BATDAU_ERR_ALREADY);
						} else if (command === la.KEYWORD_HELP) {
							sendButtonMsg(sender, la.HELP_TXT, false, false);
						} else if (command === la.KEYWORD_CAT) {
							gifts.sendCatPic(sender, null, false);
						} else if (command === la.KEYWORD_FACT) {
							gifts.sendFacts(sender, null, false);
						} else if (command === la.KEYWORD_DOG) {
							gifts.sendDogPic(sender, null, false);
						} else if (command === la.KEYWORD_CLUB) {
							gifts.sendClub(sender, null, false);
							sendTextMessage(sender, la.CLUB_HELP);
						} else if (command === la.KEYWORD_CLUB_2) {
							gifts.sendClub_2(sender, null, false);
						} else if (!event.read) {
							sendButtonMsg(sender, la.WAITING, false, true);
						}
					}

					//Đang vào chat
					else if (!waitstate && sender2 != null) {
						if (command === la.KEYWORD_KETTHUC){
							improvement.askEndchat(sender);
						} else if (command === la.KETTHUC_FINAL) {
							processEndChat(sender, sender2);
						} else if (command === la.KEYWORD_HELP) {
							sendButtonMsg(sender, la.HELP_TXT, false, false);
						} else if (command === la.KEYWORD_CAT) {
							sendMessage(sender, sender2, event.message);
							gifts.sendCatPic(sender, sender2, false);
						} else if (command === la.KEYWORD_DOG) {
							sendMessage(sender, sender2, event.message);
							gifts.sendDogPic(sender, sender2, false);
						} else if (command === la.KEYWORD_FACT) {
							sendMessage(sender, sender2, event.message);
							gifts.sendFacts(sender, sender2, false);
						} else if (command === la.KEYWORD_CLUB) {
							sendMessage(sender, sender2, event.message);
							gifts.sendClub(sender, sender2, false);
							sendTextMessage(sender, la.CLUB_HELP);
							sendTextMessage(sender2, la.CLUB_HELP);
						} else if (command === la.KEYWORD_CLUB_2) {
							sendMessage(sender, sender2, event.message);
							gifts.sendClub_2(sender, sender2, false);
						} else {
							if (event.read) {
								facebook.sendSeenIndicator(sender2);
							} else if (text.substring(0, 8).toLowerCase() === '[chatbot') {
								sendTextMessage(sender, la.ERR_FAKE_MSG);
							} else {
								sendMessage(sender, sender2, event.message);
							}
						}

					} else {
						sendTextMessage(sender, la.ERR_UNKNOWN)
						tools.deleteFromWaitRoom(mongo, sender)
						tools.deleteFromChatRoom(mongo, sender, function(t) {})
					}
				});
			});
			continue
		}
	}
	res.sendStatus(200)
})

function processEndChat(id1, id2) {
	tools.deleteFromChatRoom(mongo, id1, function(t) {
		sendButtonMsg(id1, la.END_CHAT, true, true, id2);
		sendButtonMsg(id2, la.END_CHAT, true, true, id1);
	});
}

function genderWriteCallback(ret, id) {
	switch (ret) {
		case -2:
			sendTextMessage(id, la.SQL_ERR);
			break;
		case -1:
			gendertool.getGender(mongo, id, function(genderid) {
				sendTextMessage(id, la.GENDER_WRITE_OK + la.GENDER_ARR[genderid] + la.GENDER_WRITE_WARN);
				sendButtonMsg(id, la.HUONG_DAN, true, true);
			}, facebook, token);
		case 0:
			findPair(id, ret);
			break;
		default:
			sendTextMessage(id, la.GENDER_WRITE_OK + la.GENDER_ARR[ret] + la.GENDER_WRITE_WARN);
			findPair(id, ret);
	}
}

function findPair(id, mygender) {
	// lấy list waitroom trước
	tools.getListWaitRoom(mongo, function(list, genderlist) {
		processWaitRoom(0);

		function processWaitRoom(i) {
			if (i >= list.length) {
				// nếu ko có ai phù hợp để ghép đôi, xin mời vào ngồi chờ
				if (mygender == 0) sendTextMessage(id, la.BATDAU_WARN_GENDER);
				tools.writeToWaitRoom(mongo, id, mygender);
				sendTextMessage(id, la.BATDAU_OKAY);
				return;
			}
			var target = list[i];
			var target_gender = genderlist[i];
			// kiểm tra xem có phải họ vừa nchn xong ko?
			if (tools.findInLastTalk(id, target)) {
				//nếu có thì next
				processWaitRoom(i + 1);
			} else {
				var isPreferedGender = (mygender == 0 && target_gender == 0) ||
					(mygender == 1 && target_gender == 2) ||
					(mygender == 2 && target_gender == 1) ||
					(mygender == 3 && target_gender == 3) ||
					(mygender == 4 && target_gender == 4);
				if ((mygender == 0 && target_gender == 0)) connect2People(id, target, isPreferedGender);
				else if (list.length > co.MAX_PEOPLE_WAITROOM ||
					dontChooseGender((mygender == 0 || target_gender == 0))) {
					// kết nối nếu có quá nhiều người trong waitroom
					// hoặc là ko đc kén chọn gender
					connect2People(id, target, isPreferedGender);
				} else {
					// được phép kén chọn giới tính
					if (isPreferedGender) {
						connect2People(id, target, true);
					} else {
						//giới tính ko đúng mong muốn thì next
						processWaitRoom(i + 1);
					}
				}
			}
		}
	})
}

function dontChooseGender(isPriority) {
	var data = randomIntFromInterval(1,100);
	if (isPriority) return (data <= 30);
	else return false;
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var connect2People = function(id, target, wantedGender, isFleur = false) {
	tools.deleteFromWaitRoom(mongo, target);
	tools.writeToChatRoom(mongo, fs, id, target, wantedGender);
	tools.updateLastTalk(id, target);
	tools.updateLastTalk(target, id);
	logger.postLog([+id, +target]);
	sendTextMessage(id, (isFleur ? la.START_CHAT_FLEUR : la.START_CHAT));
	sendTextMessage(target, (isFleur ? la.START_CHAT_FLEUR : la.START_CHAT));
}

var sendTextMessage = function(sender, txt) {
	sendMessage(sender, sender, {
		text: txt
	});
}

var sendButtonMsg = function(sender, txt, showStartBtn, showHelpBtn, showRpBtn = false) {
	var btns = [];
	if (showStartBtn) btns.push({
		"type": "postback",
		"title": "Bắt đầu chat",
		"payload": "batdau"
	});
	if (showHelpBtn) btns.push({
		"type": "postback",
		"title": "Xem trợ giúp",
		"payload": "trogiup"
	});
	else btns.push({
		"type": "web_url",
		"title": "Gửi phản hồi",
		"url": co.REPORT_LINK
	});
	if (showRpBtn)
		btns.push({
			"type": "web_url",
			"title": "Gửi phản hồi",
			"url": co.REPORT_LINK
		});
	if (showStartBtn) sendFacebookApi(sender, sender, {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": txt,
				"buttons": btns
			}
		},
		"quick_replies": facebook.quickbtns
	}, {});
	else sendFacebookApi(sender, sender, {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "button",
				"text": txt,
				"buttons": btns
			}
		},
		"quick_replies": facebook.quickbtns_mini
	}, {});
}

var sendMessage = function(sender, receiver, data) {
	var messageData = {
		text: data.text,
		"quick_replies":facebook.quickbtns_mini
	};

	if (data.attachments) {
		if (data.attachments[0]) {
			var type = data.attachments[0].type;
			if (type == "fallback") {
				if (data.text)
					messageData['text'] = data.text;
				else
					messageData['text'] = la.ATTACHMENT_LINK + data.attachments[0].url;
				sendFacebookApi(sender, receiver, messageData);
			} else if (!data.attachments[0].payload || !data.attachments[0].payload.url) {
				sendTextMessage(sender, la.ERR_ATTACHMENT);
				return;
			} else if (type == "image" || type == "video" || type == "audio") {
				messageData.text = undefined;
				messageData.attachment = {
					"type": type,
					"payload": {
						"url": data.attachments[0].payload.url
					}
				}
				sendFacebookApi(sender, receiver, messageData, data);
				facebook.sendImageVideoReport(data, sender, receiver);
			} else if (type == "file") {
				if (data.attachments[0].payload.url)
					messageData.text = la.ATTACHMENT_FILE + data.attachments[0].payload.url;
				else
					messageData.text = la.ERR_ATTACHMENT;
				sendFacebookApi(sender, receiver, messageData, data);
			} else {
				sendTextMessage(sender, la.ERR_ATTACHMENT);
				return;
			}
		}

		for (var i = 1; i < data.attachments.length; i++) {
			var type2 = data.attachments[i].type;
			if (type2 == 'image' || type2 == 'video') {
				sendFacebookApi(sender, receiver, {
					attachment: {
						"type": type2,
						"payload": {
							"url": data.attachments[i].payload.url
						}
					}
				}, data);
			} //
		}
	} else {
		sendFacebookApi(sender, receiver, messageData, data);
	}
}

function initChatbot() {
	admin.init(app, tools, mongo);
	cronjob.init(tools, mongo, sendButtonMsg);
	app.listen(app.get('port'), function() {
		console.log('running on port', app.get('port'))
	})
}

function delay()
{
	for (let index=1;index<=1000000000;)
		index++;
}

/*function SolveText(val)
{
	var txt=NKV.fast_build_chatbot(val);
	return txt;
}*/

//if (co.DEV_ID != 0) sendTextMessage(co.DEV_ID, co.APP_NAME+' is up');

