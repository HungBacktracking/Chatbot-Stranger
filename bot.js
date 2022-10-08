const facebook = require('../facebook');
const la = require('../custom/lang');
const idx = require('../index');
var WEATHER =[
    "thờitiết",
    "thờitiếthômnay",
    "thờitiếtthếnàovậynhỉ",
    "thờitiếtthếnàovậy",
    "hômnaynắnghaymưa",
    "trờihômnaythếnào",
    "hômnaytrờithếnào",
    "hômnaythờitiếtthếnào",
    "thờitiếtthếnàonhỉ",
    "hômnaytrờiđẹpkhông",
    "nóngquáliệumưakhôngemơi",
    "nóngquáliệucómưakhôngemơi",
    "nóngquáliệumưacókhông",
    "nóngghêkobiếtcómưakhông",
    "nóngghêkhôngbiếtcómưakhông",
    "nóngghêkhinàomưavậy",
    "nóngghêkhôngbiếtcómưahaykhông",
    "khinàomưa,nóngquá",
    "trờinàydễmưanhỉ",
    "cómưakhông",
    "cónắngkhông",
    "trờinhưthếnào",
    "trờicóvẻxấunhỉ,nhiềumâyđenquá",
    "dựbáothờitiếthômnayđibot",
    "dựbáothờitiếthômnay",
    "dựbáohômnay",
    "thờitiếthômnaycómưakhông",
    "giólạnhquákhinàonắngvậy"
]

var WEATHER_ANS =[
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Nắng mưa là chuyện của trời, chuyện linh tinh ấy sao bot biết được",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vì bạn là 1 người rất cute nên bot nghĩ sắp mưa thôiii",
    "Vậy chắc là sắp mưa đó ^^",
    "Ai biết, tự đi mà xem",
    "Ai biết, tự đi mà xem",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Vậy chắc là sắp mưa đó ^^",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Hôm nay cũng như mọi ngày, không xấu cũng không đẹp, đây là quan điểm của bot cấm có sai",
    "Xem thời tiết kênh khác điiii",
    "Còn lâu lắm hihi"
]

var HELLO =[
    "chàobot",
    "alo",
    "alobot",
    "lô",
    "lôbot",
    "hello",
    "chào",
    "hi",
    "hii",
    "hiii",
    "hiiii",
    "hiiiii",
    "hiiiiii",
    "hú",
    "xinchào",
    "heybot,giúpvới",
    "hếlô",
    "hola",
    "chàobạn",
    "chàocậu",
    "xinchào,giúptuivới",
    "hellobot",
    "hibot",
    "hinchàobạn",
    "xinchàobot",
    "chàobotngàymớitốtlành",
    "chàobuổisáng",
    "chàobuổichiều",
    "chàobuổitối"
]

var HELLO_ANS = "Hello bot cute phô mai que xin nghe, kiếm tui có việc gì, nếu cần tìm bồ gõ batdau ngay";

var INTRO =[
    "bạnlàai",
    "botlàai",
    "bottêngì",
    "bạntêngì",
    "giớithiệubảnthân",
    "giớithiệubảnthânđibot",
    "bạncóthểlàmgì",
    "botcóthểlàmgì",
    "giớithiệuđibot",
    "botcóthểlàmđượcgì",
    "bạncóthểlàmđượcgì",
    "botcóthểlàmgìvậy",
    "khảnăngcủabotđếnđâu",
    "khảnăngcủabạnđếnđâu",
    "khảnăngcủabotlàgì",
    "khảnăngcủabạnlàgì",
    "hãytựgiớithiệuđinào",
    "giớithiệu",
    "bạnlàgìnào",
    "bạncókhảnănggì",
    "botcókhảnănggì",
    "botcókhảnănggìhaykhông",
    "whoareyou"
]

var INTRO_ANS = "Hãy nhớ lấy tên tui: Backtracking bot. Một chatbot với AI siêu việt lấy ý tưởng từ Dũng Lại, có khả năng giúp bạn hiểu hơn về Lê cũng như giúp bạn thoát ế.";

var THANK =[
    "thanks",
    "thank",
    "thankyou",
    "cảmơn",
    "cảmơnbot",
    "cảmơnbotnha",
    "cảmơnnha",
    "cảmơnnhiều",
    "cảmơnbotnhiều",
    "cảmơnbạnnhiều",
    "cảmơnbạn",
    "thankbạn",
    "thankbot",
    "cảmơnbotrấtnhiều",
    "mìnhxincảmơn",
    "thậtlòngcảmơnbot",
    "mìnhxincảmơnbot"
]

var THANK_ANS = "Hihi hong có chi, rất sẵn lòng giúp đỡ bạn.";

var BYE =[
    "tạmbiệt",
    "goodbye",
    "bye",
    "bai",
    "pai",
    "páipai",
    "báibai",
    "tạmbiệt",
    "hẹngặplại",
    "hẹngặplạinha",
    "seeyouagain",
    "hẹndịpkhác",
    "vĩnhbiệt",
    "chàotạmbiệt",
    "tạmbiệtbot",
    "goodbyebot",
    "byebot",
    "baibot",
    "paibot",
    "páipaibot",
    "báibaibot",
    "tạmbiệtbot",
    "hẹngặplạibot",
    "hẹngặplạibotnha",
    "seeyouagain",
    "hẹnbotdịpkhác",
    "vĩnhbiệtbot",
    "chàotạmbiệtbot"
]

var BYE_ANS ="Bái bai, hẹn cậu lần sau lại nhắn với tớ nhé";


function SendBotReply(id, message)
{
    var txt=GetData(message);
    if (txt=="nothing") 
    {
        sendButtonMsg(id, la.HUONG_DAN);
        return;
    }
    var data ={ "text":txt}
    data["quick_replies"] = facebook.quickbtns;
    facebook.sendFacebookApi(id, id, data, {});
}

function GetData(message)
{
    var x="nothing"
    for (var i=0;i<=27;i++)
        if (WEATHER[i]==message) return WEATHER_ANS[i];
    for (var i=0;i<=28;i++)
        if (HELLO[i]==message) return HELLO_ANS;
    for (var i=0;i<=22;i++)
        if (INTRO[i]==message) return INTRO_ANS;
    for (var i=0;i<=16;i++)
        if (THANK[i]==message) return THANK_ANS;
    for (var i=0;i<=27;i++)
        if (BYE[i]==message) return BYE_ANS;
    return x;
}


var sendButtonMsg = function(sender, txt) {
	var btns = [];
	btns.push({
		"type": "postback",
		"title": "Bắt đầu chat",
		"payload": la.KEYWORD_BATDAU
	});
	btns.push({
		"type": "postback",
		"title": "Xem trợ giúp",
		"payload": la.KEYWORD_HELP
	});
	
	facebook.sendFacebookApi(sender, sender, {
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
}


module.exports = {
	SendBotReply: SendBotReply,
    GetData: GetData,
    sendButtonMsg: sendButtonMsg
};