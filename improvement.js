const la = require('../custom/lang');
const facebook = require('../facebook');
var GENDER_CHECK = [];

function sendWelcome(id) 
{
	var data={
			"attachment":{"type":"image",
			"payload":{"url":'https://'+'hungbacktracking.github.io/facts.github.io/Welcome/1.jpg'} }
	}
	
	data["quick_replies"] = facebook.quickbtns;
	facebook.sendFacebookApi(id, id, data, {});
}

function startChatting(id)
{
	if (GENDER_CHECK[id] == undefined)
	{
		askGender(id);
		return;
	}
	chooseGender(id);
}

function setupGender(id, gender_str)
{
	if (gender_str == la.KEYWORD_ASK_GENDER+'male')
		GENDER_CHECK[id] = 1;
	else GENDER_CHECK[id] = 2;
	chooseGender(id);
}

function askGender(id) 
{
	var data={ "text": la.SETUP_GENDER}
	
	data["quick_replies"] = facebook.quickbtns_askGender;
	facebook.sendFacebookApi(id, id, data, {});
}

function chooseGender(id) 
{
	var data={ "text": la.BATDAU_GENDER}
	
	data["quick_replies"] = facebook.quickbtns_chooseGender;
	facebook.sendFacebookApi(id, id, data, {});
}

function askEndchat(id)
{
	var data={ "text": la.END_CHAT_ASK}
	
	data["quick_replies"] = facebook.quickbtns_end;
	facebook.sendFacebookApi(id, id, data, {});
}
module.exports = {
	GENDER_CHECK,
    sendWelcome: sendWelcome,
	startChatting: startChatting,
	setupGender: setupGender,
	askGender: askGender,
	chooseGender: chooseGender,
    askEndchat: askEndchat
};