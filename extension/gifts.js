const la = require('../custom/lang');
var MAX_CAT_IMG = 10229;
var MAX_DOG_IMG = 5250;
var MAX_FACT = 117;
var FACT_CHECK = []
var FACT = [
	"Giáo viên ở Lê Quý Đôn rất rất rất xịn, đều có trình độ từ bậc thạc sĩ trở lên cùng với độ đáng yêu không bé hơn bậc siêu cấp.",
	"Chắc hiếm ai học Hoá thầy Tiến mà không bị gọi là “thằng bất hiếu”, không bị khẽ tay khi không chú ý hay chưa được nghe thầy hát sau mỗi tiết học, thầy có máu văn nghệ lắm, dạy xong nhiều khi sẽ bonus mở show văn nghệ, có loa kèm mic hẳn hoi.",
	"Có ba thứ khó chạm đến nhất trên đời:\nThứ nhất là trái tim crush\nThứ hai là bánh mỳ căn tin\nVà thứ ba là điểm cộng của cô Hương dạy Sinh.",
	"Bạn gái nào mà đam mê làm giáo viên nhưng vẫn muốn mặc đẹp thì cứ tham khảo mấy bộ áo dài cách tân của cô Đào.",
	"\"Một sẹo\" - Chưa ai học Chuyên Tin mà chưa nhận thứ sẹo quý giá ấy từ Small :')",
	"Những màn cà khịa xuyên suốt, điệu cười không lẫn vào đâu được và cả việc hỏi học sinh sách giáo khoa có bao nhiêu mục gọi tên thầy Mỹ.",
	"Những bài lớp ca của thầy Quân rất hay, hay y như giọng hát của thầy vậy. Đi loanh quanh trong trường mà vô tình gặp thầy là thầy cứ nhìn học sinh tụi mình mà cười vậy đó.",
	"\"Ta học cho ai\n Vì sao ta giỏi\n Vì ta tự học\"\n   Hồ Phúc\nCác em khóa sau sẽ không được nghe châm ngôn thần thánh này nữa rồi vì thầy đã về hưu :)))",
	"Học Sử thầy Đoàn là được học luôn cả tiếng Anh, thầy mê tiếng Anh cực, trong lớp có nói từ nào bằng tiếng Anh mà thầy nghe là thầy dịch ra được liền luôn.",
	"Tổ Pháp là tập hợp những thầy cô siêu hay ho.\nLà cô Uyên xinh với những tips bảo vệ môi trường cùng những chiếc bánh do chính tay cô làm được bọn học sinh tụi mình tấm tắc khen.\nLà thầy Cương với những câu chuyện về tình yêu, về sự nghiệp, về cái luận án tiến sĩ, về gia đình của thầy.\nTiếng Pháp là ngôn ngữ đẹp nhất thế giới, âu chăng cũng được góp phần nên từ những người như họ.",
	"Có ai đã nghe câu chuyện về vườn hồng của cô Thắm chưa!?",
	"Chép phạt từ bao giờ đã trở thành một ngành nghề kinh doanh sau khi học GDCD của người-ai-cũng-biết-là-ai ấy.",
	"Học thể dục, mệt lắm. Hay học mỹ thuật, vẽ xấu lắm. Thế thì học âm nhạc, thôi lười lắm. Vậy cúp ha, nốt bữa này thôi đó.",
	"Giáo viên ở Lê Quý Đôn là một điều gì đó rất tâm huyết. Kể cả khi học sinh làm bài chưa tốt vẫn sẽ khiến những người thầy, người cô chạnh lòng rất nhiều, và có những giọt nước mắt đã rơi từ những lần như thế.",
	"20.11, các thầy cô, ai cũng đang trông mong những lời chúc đến từ học sinh tụi mình đấy.",
	"Từ sau năm 2000 đến giờ, không đứa học sinh Lê Quý Đôn nào không ghiền mỳ tôm trứng căn tin.\nMỳ tôm thì rõ là như nhau nhưng ăn ở Lê Quý Đôn bao giờ cũng ngon lạ lùng, giống như 1 kiểu đặc sản.",
	"Lau bảng ở Lê Quý Đôn là một điều đáng sợ.",
	"Lê Quý Đôn quy tụ những đứa giỏi nhất nhì Đà Nẵng, thi giải ầm ầm nhưng không chỉ biết học không đâu, tụi nó cũng có nhiều ơi là nhiều câu lạc bộ hay ho như CTXH, YCC, ENPO.. rèn luyện nhiều kĩ năng lắm đó.",
	"Trường duy nhất của Đà Nẵng chia các lớp theo ban riêng biệt..à nhưng không có nghĩa là học lệch đâu. :v. Nể nhất là khả năng học thuộc của mấy đứa ban XÃ HỘI.",
	"Trường to bự vậy nhưng học sinh không quá nhiều, chỉ cần là học sinh của Lê Quý Đôn thì dù học lớp nào cũng biết mặt nhau cả. Như có mật mã giao tiếp riêng vậy đó.",
	"Màu xanh áo dài của Lê Quý Đôn là xanh thiên thanh chứ không phải xanh lơ xanh biển đâu ha.\nỞ Đà Nẵng có một không hai à.",
	"Nghe đồn đi thi Olympic thì nên ra chỗ chôn xương cá ông để thắp hương lấy hên cơ mà... không phải ai cũng biết chỗ mà thờ =)))",
	"Người ta bảo mùa hè là mùa chia tay nhưng ở Lê Quý Đôn hè cũng học 3 buổi/ tuần.\nNgoài ra còn có thêm cái giờ ra chơi 30 phút \"đặc biệt\".",
	"Cái này có khi nhiều người không biết hay phải lấy hình ra coi nè, sơ đồ của trường Lê Quý Đôn là chữ LQD đó.",
	"Nếu gan dạ, khi có trại, thử rủ bạn đi bắt ma ở bụi trúc đi.\nỞ Lê có đồn mấy câu chuyện ma \"thú vị\" lắm đó.",
	"Màu truyền thống: Xanh thiên thanh\nĐặc sản: Mì tôm trứng.",
	"Xương cá voi huyền thoại. Vẫn luôn có tin đồn mỗi khi thi xa sĩ tử sẽ sờ vào xương cá voi để lấy hên, nghe bảo xương bị sờ đến mòn nhẵn. Nhưng sự thực là nhiều người trong đội tuyển, thậm chí vài thầy cô chủ nhiệm cũng không biết bộ xương ở đâu để mà... sờ thử.",
	"Tổng số đầu sách ở thư viện trường là 29 377.\nlà thư viện Trường học lớn nhất Thành phố Đà Nẵng.",
	"Logo Lê Quý Đôn do thầy Lê Hoành Phò thiết kế.\nNăm hình khối tượng trưng cho núi Ngũ Hành Sơn.\nTrong bản vẽ ban đầu, hình địa cầu rất nhỏ và tinh tế chứ không to như logo hiện giờ.",
	"Lê Quý Đôn chuyển địa điểm ba lần.\nKhoá duy nhất được học tại cả 3 \"nhà\" là khoá 17 (2002-2004)",
	"Trên \"Bàn thờ\" của Lê Quý Đôn có 3 tấm ảnh, được photoshop vòng hoa đeo cổ, bằng khen và phông nhận thưởng giống hệt nhau.\nVì 3 tấm được treo rời ra nên ít ai để ý.",
	"Tổng vốn đầu tư xây dựng trường là hơn 170 tỉ đồng.\nTrong đó 70 tỉ đồng được đầu tư cho Khối Trường học vào năm 2003\nCòn Khu Nội trú được hoàn thành vào năm 2011 với số vốn 106 tỉ đồng\nNhưng mà có ai thấy trường mình đã hơi cũ rồi hong :<",
	"Số giáo viên có học vị Thạc sĩ/Tiến sĩ ở Lê Quý Đôn là 90 trên tổng số 136 giáo viên.\nTrong đó có 5 Tiến sĩ và 85 Thạc sĩ.",
	"Hội trường Lê Quý Đôn ban đầu chỉ thiết kế 700 ghế ngồi.\nSau này đã được nâng cấp, sức chứa lên đến 1000 người như hiện nay.",
	"Hành khúc Lê Quý Đôn do thầy Hồ Phúc soạn nhạc và thầy Hoàng Dục viết lời.\nLogo, hành khúc và đồng phục màu xanh ra đời trong cùng niên khoá 1990-1991.",
	"Khi mới vào trường anh rất sốc trước văn hóa tiết đôi, tiết ba của trường mình\nCảm giác phải học 3 tiết Toán liên tiếp chẳng hạn :(\nCác môn Lý Hóa Văn Anh cũng có những ngày đau khổ như vậy\nTuy nhiên nếu trúng môn yêu thích thì ngày hôm đó thật tuyệt =))",
	"Đừng nghĩ vào được Lê Quý Đôn là một điều bình thường.",
	"Nếu có đi tham quan trường, hãy đi vào Chủ Nhật.",
	"Câu lạc bộ không quan trọng, lớp mới là thứ quan trọng.\nThầy cô rất quan trọng, nhưng bạn bè còn hơn thế nữa.",
	"Đừng đi ăn mì tôm trứng một mình.",
	"Đi học thì có thể một mình, nhưng đừng về một mình.",
	"Mười hãy học những gì mình được dạy.\nMười Một hãy học những gì mình thích.\nMười Hai hãy học những gì mình phải học.",
	"Có hàng triệu nơi ở Lê Quý Đôn, nhưng hãy đảm bảo có một nơi là của riêng.",
	"Đừng mắng nhiếc, đừng phán xét, đừng đánh giá bất kì ai.\nChỉ cần tận hưởng mặt tốt đẹp mà họ muốn bạn thấy.",
	"Hãy thử trốn học, nhưng đừng trốn học lúc cần trốn học nhất.",
	"Thích một người, tỏ tình, và quen cậu ấy.\nHãy có một mối tình màu Xanh."
]
const facebook = require('../facebook');

function sendClub(id, id2, notInChat) 
{
	var data={
		"attachment":{
		"type":"template",
		"payload":{
		  "template_type":"generic",
		  "elements":[
			{
				"title":"CLB Bóng Chuyền LQĐ",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/1.jpg',
				"subtitle":"Rèn luyện - Sức khỏe - Tinh thần",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/clbbongchuyenlqd",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"Đội Công tác Xã Hội LQĐ!",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/2.jpg',
				"subtitle":"Hoạt động xã hội - Tinh thần tình nguyện - Kĩ năng thanh niên",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/ctxhlqd",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Bóng Chày LQĐ!",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/3.jpg',
				"subtitle":"Nhiệt huyết - Bổ ích - Sức khỏe",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/lqdbaseballclub",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"Lạc Acoustic",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/4.jpg',
				"subtitle":"Nghệ thuật - Âm nhạc - Tài năng",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/lacacousticlqd",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"AH LQD Basketball team",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/5.jpg',
				"subtitle":"Bóng rổ - Giao lưu - Tập luyện",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/AH-LQD-Basketball-team-101886198306572",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Sáng tạo trẻ YCC",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/6.png',
				"subtitle":"Khám phá - Trí tuệ - Sáng tạo",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/YCCLQD",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"Lycoris - CLB Điện ảnh",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/7.jpg',
				"subtitle":"Bỉ Ngạn Hoa chính là gợi cho ta cái cảm giác \"trăng trong nước, hoa trong gương\", càng ngắm càng muốn nắm giữ.",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/LycorisDariata",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"Club des francophiles Lê Quý Đôn - CFLE",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/8.jpg',
				"subtitle":"Francais, apprendre avec plaisir",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/Club-des-francophiles-L%C3%AA-Qu%C3%BD-%C4%90%C3%B4n-CFLE-915650948448422",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"Lê Quý Đôn Đà Nẵng Confessions",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/9.jpg',
				"subtitle":"Một lời thú tội, hay... một lời tỏ tình!?",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/LeQuyDonConfessions",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Môi trường GREENIE",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/10.jpg',
				"subtitle":"Nâng cao nhận thức về môi trường, xã hội",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/greenie.club/",
					"title":"View Website"
				  }         
				]      
			  }
		  ]
		}
		}
	}
	
	//if (notInChat) 
	data["quick_replies"] = facebook.quickbtns_club;
	//else data["quick_replies"] = facebook.quickbtns_mini;
	facebook.sendFacebookApi(id, id, data, {});
	if (id2 != null) facebook.sendFacebookApi(id2, id2, data, {});
}

function sendClub_2(id, id2, notInChat) 
{
	var data={
		"attachment":{
		"type":"template",
		"payload":{
		  "template_type":"generic",
		  "elements":[
			{
				"title":"CLB C&S (CARE & SHARE)",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/11.jpg',
				"subtitle":"Giúp đỡ - Từ thiện - Tương thân tương ái",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/cs.wecareweshare",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Báo Mùa Xanh",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/12.jpg',
				"subtitle":"Có một Mùa Xanh không thấy mãn đời. Có một Mùa Xanh thấy mãi trong tim....",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/BaoMuaXanh",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB DANANG MODEL UN SOCIETY (DMS)",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/13.jpg',
				"subtitle":"Một câu lạc bộ về mô hình Hội nghị Mô phỏng Liên Hợp Quốc (MUN)",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/danangmunsociety",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Tranh biện COGIC",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/14.png',
				"subtitle":"Tranh biện - Tư duy - Sáng tạo",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/cogic.lqd",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"LQĐ Chess Club",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/15.jpg',
				"subtitle":"Câu lạc bộ cờ vua",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/LQDchessclub",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Bóng đá",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/16.jpg',
				"subtitle":"Thể thao và sức khỏe",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/lqdfootballclubdn",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB English Zoo",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/17.jpg',
				"subtitle":"Tiếng anh - Bổ ích - Phát triển kỹ năng",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/englishzoodn",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Bogamis",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/18.jpg',
				"subtitle":"Giải trí - Sáng tạo - Kết bạn",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/bogamis",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"TORAI NIPPON - CLB Văn Hóa Nhật Bản",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/19.jpg',
				"subtitle":"Nơi giao lưu gắn kết dành cho các bạn có cùng niềm đam mê với Nhật Bản",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/torainipponlqd",
					"title":"View Website"
				  }         
				]      
			  },
			  {
				"title":"CLB Hội Họa SEREIN",
				"image_url":'https://hungbacktracking.github.io/facts.github.io/club/20.jpg',
				"subtitle":"Hội họa - Đam mê - Kết bạn",
				"buttons":[
				  {
					"type":"web_url",
					"url":"https://www.facebook.com/clbserein1609",
					"title":"View Website"
				  }         
				]      
			  }
		  ]
		}
		}
	}
	
	if (notInChat) data["quick_replies"] = facebook.quickbtns;
	else data["quick_replies"] = facebook.quickbtns_mini;
	facebook.sendFacebookApi(id, id, data, {});
	if (id2 != null) facebook.sendFacebookApi(id2, id2, data, {});
}

function sendGender(id) 
{
	var data={ "text": la.BATDAU_GENDER}
	
	data["quick_replies"] = facebook.quickbtns_gender;
	facebook.sendFacebookApi(id, id, data, {});
}

function sendFacts(id, id2, notInChat) 
{
	var data=getFactData();
	
	if (notInChat) data["quick_replies"] = facebook.quickbtns;
	else data["quick_replies"] = facebook.quickbtns_mini;
	facebook.sendFacebookApi(id, id, data, {});
	if (id2 != null) facebook.sendFacebookApi(id2, id2, data, {});
}

function sendCatPic(id, id2, notInChat) {
	getCatData(function(data) {
		if (notInChat) data["quick_replies"] = facebook.quickbtns;
		else data["quick_replies"] = facebook.quickbtns_mini;
		facebook.sendFacebookApi(id, id, data, {});
		if (id2 != null) facebook.sendFacebookApi(id2, id2, data, {});
	});
}


function sendDogPic(id, id2, notInChat) {
	getDogData(function(data) {
		if (notInChat) data["quick_replies"] = facebook.quickbtns;
		else data["quick_replies"] = facebook.quickbtns_mini;
		facebook.sendFacebookApi(id, id, data, {});
		if (id2 != null) facebook.sendFacebookApi(id2, id2, data, {});
	});
}

function getFactData() 
{
	var val=randomIntFromInterval(1,MAX_FACT);
	if (16<val && val<72)
	{
		var val2=randomIntFromInterval(1,100);
		if (30<val2 && val2<=70) val=randomIntFromInterval(1,16);
		if (val2>70) val=randomIntFromInterval(72,MAX_FACT);
	}
	return solveFactData(val);
}


var getCatData = function(callback) {
	var img=randomIntFromInterval(1,MAX_CAT_IMG);
	var url='';
	if (img <= 9360) {
		url='nuimeow.github.io/jpg/'+img+'.jpg';
	} else {
		url='nuimeow.github.io/gif/'+img+'.gif';
	}
	callback({
		"attachment":{"type":"image",
		"payload":{
			"url":'https://'+url
		}}
	});
}

var getDogData = function(callback) {
	var img=randomIntFromInterval(1,MAX_DOG_IMG);
	var url='';
	if (img <= 5169) {
		url='nuimeow.github.io/dog/jpg/'+img+'.jpg';
	} else {
		url='nuimeow.github.io/dog/gif/'+img+'.gif';
	}
	callback({
		"attachment":{"type":"image",
		"payload":{
			"url":'https://'+url
		}}
	});
}

function solveFactData(val)
{
	if (val <= 71) {
		var url='hungbacktracking.github.io/facts.github.io/'+val+'.jpg';
		data={
			"attachment":{"type":"image",
			"payload":{"url":'https://'+url} }
		}
	}
	if (72 <= val && val <=MAX_FACT) 
		data={ "text": FACT[val-72]}
	if (val==MAX_FACT+1) data={"text": "Bạn đã xem hết Facts về Lê Quý Đôn rồi, mời bạn nhắn trogiup để xem thêm các tùy chọn khác ^^"}
	return data;
}

module.exports = {
	sendClub: sendClub,
	sendClub_2: sendClub_2,
	sendGender: sendGender,
	sendFacts: sendFacts,
	sendCatPic: sendCatPic,
	sendDogPic: sendDogPic,
	getFactData: getFactData,
	getCatData: getCatData,
	getDogData: getDogData,
	solveFactData: solveFactData
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
