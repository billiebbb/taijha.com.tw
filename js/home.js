	
var Home = function(){
	var body, logo,white,black,menu,title;
	var pscroll = 0;
	var h_divid = 4;
	
	var init = function(){
		
		body = $("#home");
		logo = $("#logo");
		menu = $("#menu");
		title = $("#home_title");
		
		$("#up_page a, #down_page a").mouseover(function(e){
			if($(this).parent().is('.active')) return;
			var par = $(this).parent();
			var pos = (par.is("#up_page"))? "0 -36px" : "0 36px";
			$(this).stop().animate(
				{backgroundPosition: pos}
				, 500
				, function(){
					$(this).css('backgroundPostion', '');
				}
			);
		}).mouseout(function(e){
			if($(this).parent().is('.active')) return;
			
			$(this).css("backgroundPosition", "");
		});
		
		// logo.css("opacity", 0).animate({opacity: 1}, 500);
		// title.css({top: parseInt($(window).height()/h_divid) + 'px'});
		// set text animation
		// title.typewriter();

		
		// $(window).resize(homeResize);
		// homeResize();
		
		// $(window).scroll(homeScroll);
		// homeScroll();
	};
	
	var homeResize = function(e){
		
		// set home logo, menu, text position
		
		// if(!logo.hasClass('lock')){
			// logo.css("top", parseInt($(window).height()/h_divid)+"px");
		// }
		// else{
			// logo.css("top", 0);
		// }
		
		
		// title.css("left", parseInt($(window).width() * 0.1)  + 280 + "px");
		// title.css({top: parseInt($(window).height()/h_divid) + 'px'});
		
		
	};
	
	var homeScroll = function(e){
		// console.log("$(window).scrollTop(): %s", $(window).scrollTop());		
		
		if($(window).scrollTop() > logo.offset().top + logo.height() && !logo.hasClass('lock')){
			logo.addClass('lock');
			logo.css("top", 0);
			logo.hide().fadeIn();
			logo.find('#black').hide();
			logo.find('#white').show();
			// white.fadeIn();
		}
		else if($(window).scrollTop() < 30 && logo.hasClass('lock')){
			logo.removeClass('lock');
			logo.css("top", parseInt($(window).height()/2)+"px");
			logo.find('#black').show();
			logo.find('#white').hide();
			logo.hide().fadeIn();
		}
		
	};
	
	
	return {
		init: init,
		homeResize: homeResize
	};
}();
	

$(function(){
	Home.init();
});
