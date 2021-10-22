const la = require('../custom/lang');
const facebook = require('../facebook');


function sendWelcome(id) 
{
	var data={
			"attachment":{"type":"image",
			"payload":{"url":'https://'+'hungbacktracking.github.io/facts.github.io/Welcome/1.jpg'} }
	}
	
	data["quick_replies"] = facebook.quickbtns;
	facebook.sendFacebookApi(id, id, data, {});
}

function sendGender(id) 
{
	var data={ "text": la.BATDAU_GENDER}
	
	data["quick_replies"] = facebook.quickbtns_gender;
	facebook.sendFacebookApi(id, id, data, {});
}

function askEndchat(id)
{
	var data={ "text": la.END_CHAT_ASK}
	
	data["quick_replies"] = facebook.quickbtns_end;
	facebook.sendFacebookApi(id, id, data, {});
}
module.exports = {
    sendWelcome: sendWelcome,
	sendGender: sendGender,
    askEndchat: askEndchat
};