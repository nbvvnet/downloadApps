/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var baseUrl = '../GMPlatform';
var getNewPlayerUrl = baseUrl + '/GetNewPlayer.html?t=' + Math.random();
var getLivePlayerUrl = baseUrl + '/GetLivePlayer.php?t=' + Math.random();
var getRetainedPlayerUrl = baseUrl + '/GetRetainedPlayer.html?t=' + Math.random();;
var getPayPlayerUrl = baseUrl + '/GetPayPlayer.html?t=' + Math.random();;
var buyRecordUrl = baseUrl + '/BuyRecord.html?t=' + Math.random();;
var systemAwardUrl = baseUrl + '/SystemAward.html?t=' + Math.random();;
var gameRechargeUrl = baseUrl + '/GameRecharge.html?t=' + Math.random();;
var myInfoUrl = baseUrl + '/MyInfo.html?t=' + Math.random();;
var giftCardDetailUrl = baseUrl + '/GiftCardDetail.html?t=' + Math.random();;
var addAgentUrl = baseUrl + "/AddAgent.html";
var updateInfoUrl = baseUrl + "/UpdateInfo.html?t=" + Math.random();
var updatePasswordUrl = baseUrl + "/UpdatePassword.html?t=" + Math.random();


//推广员操作
var gmNewProxyUrl = baseUrl + '/GmNewProxy.html?t=' + Math.random();
var gmProxyBuyCardUrl = baseUrl + '/GmProxyBuyCard.html?t=' + Math.random();
var gmProxyChargeUrl = baseUrl + '/GmProxyCharge.html?t=' + Math.random();
var gmProxySellCardUrl = baseUrl + '/GmProxySellCard.html?t=' + Math.random();
var gmPlayerRechargeUrl = baseUrl + "/GetPlayerRecharge.html?t=" + Math.random();

var gmGetTotalDataForFinanceUrl = baseUrl + "/GetTotalDataForFinance.html?t=" + Math.random();

//获得年月日      得到日期oTime  
function getMyDate(str){  
	var oDate = new Date();
	oDate.setTime(str * 1000);
	var oYear = oDate.getFullYear(),  
	oMonth = oDate.getMonth()+1,  
	oDay = oDate.getDate(),  
	oHour = oDate.getHours(),  
	oMin = oDate.getMinutes(),  
	oSen = oDate.getSeconds(),  
	oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
	return oTime;  
}; 
//获得年月日      得到日期oTime  
function getMyDateWithOutHour(str){  
	var oDate = new Date();
	oDate.setTime(str * 1000);
	var oYear = oDate.getFullYear(),  
	oMonth = oDate.getMonth()+1,  
	oDay = oDate.getDate(),  
	oHour = oDate.getHours(),  
	oMin = oDate.getMinutes(),  
	oSen = oDate.getSeconds(),  
	oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
	return oTime;  
};
//补0操作  
function getzf(num){  
	if(parseInt(num) < 10){  
		num = '0'+num;  
	}  
	return num;  
}
function SetMenu()
{
	var li1 = '<li><a id = "getNewPlayerUrl" href=""><i class=" icon-arrow-up"></i>查询新增</a></li>';
	var li2 = '<li><a id = "getLivePlayerUrl" href=""><i class="icon-bullhorn"></i>查询活跃</a></li>';
	var li3 = '<li><a id = "getRetainedPlayerUrl" href="/MyAgent.html"><i class="icon-sitemap"></i>查询留存</a></li>';
	var li4 = '<li><a id = "getPayPlayerUrl" href="toRecommendedAward"><i class="icon-yen"></i>查询房卡</a></li>';
	var li5 = '<li><a id = "buyRecordUrl" href="/toBuyRecord"><i class="icon-credit-card"></i>购卡统计</a></li>';
	var li6 = '<li><a id = "systemAwardUrl" href="toSystemReward"><i class="icon-dollar"></i>房卡奖励</a></li>';
	var li7 = '<li><a id = "gameRechargeUrl" href="toGameRecharge"><i class="icon-jpy"></i>购买房卡<span style="background: #f00;color: #FFF;border-radius: 9px !important;width: 29px;height: 18px;position: relative;top: -8px;left: 5px;display: inline-block;text-align: center;font-size: 10px !important;line-height: 15px;">new</span></a></li>';
	var li8 = '<li><a id = "myInfoUrl" href="toMyInfo"><i class="icon-user"></i>我的信息</a></li>';
	var li9 = '<li id="Logout" style=""><a id = "logoutButton" href="javascript:void(0);"><i class="icon-signout"></i>退出</a></li>';
	$("#menu").append("");
	//$("#menu").append(li1 + li2 + li3 + li4 + li5 + li6 + li7 + li8 + li9);
	$("#menu").append(li1 + li2 + li3 + li4 + li9);
	$('#getNewPlayerUrl').attr('href', getNewPlayerUrl);
	$('#getLivePlayerUrl').attr('href', getLivePlayerUrl);
	$('#getRetainedPlayerUrl').attr('href', getRetainedPlayerUrl);
	$('#getPayPlayerUrl').attr('href', getPayPlayerUrl);
	$('#buyRecordUrl').attr('href', buyRecordUrl);
	$('#systemAwardUrl').attr('href', systemAwardUrl);
	$('#gameRechargeUrl').attr('href', gameRechargeUrl);
	$('#myInfoUrl').attr('href', myInfoUrl);
	$('#addAgentUrl').attr('href', addAgentUrl);
	$('#updateInfoUrl').attr('href', updateInfoUrl);
	$('#cancelUpdateInfoUrl').attr('href', myInfoUrl);
	$('#updatePasswordUrl').attr('href', updatePasswordUrl);
	$('#cancelUpdatePassword').attr('href', myInfoUrl);
	
	//绑定退出事件
	$('#logoutButton').bind("click", logoutFun);
	SetPromoterMenu();
}

function SetPromoterMenu()
{
	var li1 = '<li><a id = "gmNewProxyUrl" href="toRecommendedAward"><i class="icon-bullhorn"></i>代理新增</a></li>';
	var li2 = '<li><a id = "gmProxyBuyCardUrl" href="toRecommendedAward"><i class="icon-bullhorn"></i>代理购卡</a></li>';
	var li3 = '<li><a id = "gmProxyChargeUrl" href=""><i class=" icon-bullhorn"></i>代理充值</a></li>';
	var li4 = '<li><a id = "gmProxySellCardUrl" href=""><i class="icon-bullhorn"></i>代理售卡</a></li>';
	var li5 = '<li><a id = "gmGetTotalDataForFinanceUrl" href=""><i class="icon-bullhorn"></i>微信后台数据</a></li>';
	var li6 = '<li><a id = "gmGetPlayerRechargeUrl" href=""><i class="icon-bullhorn"></i>玩家充值</a></li>';
	$("#promoterMenu").append("");
	$("#promoterMenu").append(li1 + li2 + li3 + li4 + li6);
	$('#gmNewProxyUrl').attr('href', gmNewProxyUrl);
	$("#gmProxyBuyCardUrl").attr('href', gmProxyBuyCardUrl);
	$('#gmProxyChargeUrl').attr('href', gmProxyChargeUrl);
	$('#gmProxySellCardUrl').attr('href', gmProxySellCardUrl);
	$('#gmGetTotalDataForFinanceUrl').attr('href', gmGetTotalDataForFinanceUrl);
	$('#gmGetPlayerRechargeUrl').attr('href', gmPlayerRechargeUrl);
	//绑定退出事件
	$('#logoutButton').bind("click", logoutFun);
}

function logoutFun(){
	window.location.href ="./php/login/logout.php?t="+Math.random();
}

function IsQueryTimeInRange()
{
	var startTime = 0;
	var endTime = 0;
	//取的是毫秒数
	startTime = new Date($("#startDate").val());
	endTime = new Date($("#endDate").val());
	
	if(endTime.valueOf() - startTime.valueOf() > 32 * 24 * 3600 * 1000)
	{
			bootbox.alert({
			buttons: {
				ok: {
					label: '确认',
					className: 'btn-myStyle'
				}
			},
			message: '查询期限不可超过30天',
			callback: function() {}
		});
		return true;
	}
	else
	{
		return false;
	}
}

function GetQueryString(name) 
{ 
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) 
		return unescape(r[2]);
	return null;
}

//if($("#mycounttop").size()>0)
//{
//	$.ajax({
//	url: baseUrl +'/proxy/login/getRemainCard.php?t=' + Math.random(),
//	type: 'GET',
//	dataType: 'JSON',
//	success: function(response) {
//		if(response.enable == 'forbidding'){
//			window.location.href = '../login/logout';
//		}else{
//			cardNum = 0;
//			if(response.cardNum != null)
//			{
//				cardNum = response.cardNum;
//			}
//			$("#mycounttop").html(' 剩余房卡 ：' + response.cardNum + ' 用户名：' + response.name);
//		}		
//	},
//	error: function() {
//		bootbox.alert({
//			buttons: {
//				ok: {
//					label: '确认',
//					className: 'btn green'
//				}
//			},
//			message: '请求失败，请联系管理员',
//			callback: function() {}
//		});
//	}
//});

//}
