var About = function(){
	var logo, menu;
	var subcon = [];
	
	var init = function(){
		
		logo = $('#logo');
		menu = $('#menu');
		// var mtop = ParseCssNumber(title.css("top")) + parseInt(title.height()/2 + 30);		
		subcon = ['press', 'attitude', 'documentary'];
		
		$(window).resize(aboutResize);
		// $(window).scroll(aboutScroll);
	};
	
	var aboutResize = function(){
		
		// var img, tit, line, m1, m2, m3;
// 		
		// for(var i = 0; i < subcon.length; i++){
			// img = $('#' + subcon[i] + '_img');
			// tit = $('#' + subcon[i] + '_tit');
			// line = $('#' + subcon[i] + '_line');
// 			
			// m1 = -$(window).height()/3 + $('#' + subcon[i]).position().top + i*150 - img.height();
			// m2 = -$(window).height() / (($(window).height() > 500) ?  5 : 20) + $('#' + subcon[i]).position().top + i*150;
			// m3 = -line.height() / 2 + $('#' + subcon[i]).position().top + i*150;
// 			
			// if(img.length){
				// img.css({
					// marginTop: m1
				// });
// 				
				// img.data('mtop', m1);
			// }
// 	
			// if(tit.length){
				// tit.css({
					// marginTop: m2
				// });
// 				
				// tit.data('mtop', m2);
			// }
// 			
			// if(line.length){
				// line.css({
					// marginTop: m3
				// });
// 				
				// line.data('mtop', m3);
			// }
// 			
		// }
// 		
		// var content = $("#about .content");
		// content.height("auto").height(content.height());		
// 		
		// aboutScroll();
	};
	
	var aboutScroll = function(){
		var mtop;
		
		var img, tit, line, m1, m2, m3;
		
		var offset, max = $(window).height(), min = -$(window).height()*.3;
		
		for(var i = 0; i < subcon.length; i++){
			
			img = $('#' + subcon[i] + '_img');
			tit = $('#' + subcon[i] + '_tit');
			line = $('#' + subcon[i] + '_line');
			
			if(img.length){
				offset = img.data('mtop') + ($('#about').position().top  - $(window).scrollTop() * 0.9);
				offset = (offset > max) ? max : offset;
				offset = (offset < min) ? min : offset;
				
				img.stop().animate({
					marginTop: offset 
				}, 50, 'linear');
			}
			
			if(tit.length){
				
				offset = tit.data('mtop') + ($('#about').position().top - $(window).scrollTop());
				offset = (offset > max) ? max : offset;
				offset = (offset < min) ? min : offset;
				
				tit.stop().animate({
					marginTop: offset
				}, 50, 'linear');
			}
			
			if(line.length){
				offset = line.data('mtop') + ($('#about').position().top - $(window).scrollTop());
				offset = (offset > max) ? max : offset;
				offset = (offset < min) ? min : offset;
				
				line.stop().animate({
					marginTop: offset
				}, 50, 'linear');
			}
		}
	};
	
	return {
		init: init
	};
}();

$(function(){
	About.init();
});
