//获取url中参数
//var URL_ARGUMENTS = {};
//if(location.search.length) {
//	var args = location.search.slice(1).split('&');
//	for(var i = 0; i < args.length; i++) {
//		var arg = args[i].split('=');
//		URL_ARGUMENTS[arg[0]] = arg[1];
//	}
//}
//
//function GET() {
//	if(arguments.length) {
//		if(arguments[0] in URL_ARGUMENTS) {
//			return URL_ARGUMENTS[arguments[0]];
//		} else {
//			//throw '"' + arguments[0] + '"参数不存在！';
//			return false;
//		}
//	} else {
//		return URL_ARGUMENTS;
//	}
//}
//if(GET('from')) {
//	for(var i in data) {
//		if(GET('from') == i) {
//			$('#PushGame').attr('href', data[i].downUrl);
//			$('#PushGame img').attr('src', data[i].src);
//			$('#PushGame div h4').text(data[i].name);
//			$('#PushGame div .game-size').text(data[i].size);
//			//$('#swiperWrapper').html('');
//			for(var j = 0; j < data[i].picList.length; j++) {
//				$('#swiperWrapper').append('<a href="' + data[i].picList[j].picUrl + '" class="swiper-slide">' +
//					'<img src="' + data[i].picList[j].picSrc + '" />' +
//					'</a>');
//			}
//		}
//	}
//}