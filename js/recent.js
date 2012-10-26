var Recent = function(){
	var markup = "\
	<a href='${link}' target='blank'>\
		<div class='recent_item'>\
			<div class='body'>\
				<img src='${image}' />\
			</div>\
			<div class='footer'>\
					<div class='info_btn'>前往官方網站</div>\
			</div>\
		</div>\
	</a>";	
	
	var init = function(){
		
		createRecent();
		$(window).resize(recentResize);
		
		// .scroll(recentScroll);
		
	};
	
	var createRecent = function(){
		$.template( "recentItem", markup );
		$.tmpl( "recentItem", RecentData).appendTo( "#recent_content" );
		
		recentResize();
		// $("#recent_content").find(".pic").imagesLoaded(recentResize);
	};
	
	var recentResize = function(){
		var recent = $('#recent_main');
		var line = $('#recent_line');
		var mt = $('#recent').position().top;
		
		recent.data('mt', mt);
		line.data('mt', -line.height() / 2 + $('#recent').position().top + 150);		
		// if($(window).width() > 1024){
			// $(".recent_item").addClass('l');
		// }
		// else{
			// $(".recent_item").removeClass('l');
		// }
		
		$(".recent_item").find(".loading").removeClass('loading');

		
		// $('.recent_item .pic img').resizeToParent();
		// $('.recent_item .logo img').resizeToParent({type: 'fixed'});
				
	};
	
	var recentScroll = function(){
		
		var recent = $('#recent_main');
		var line = $('#recent_line');
				
		var my = $("#recent").position().top - $(window).scrollTop() ;
		var min = 50, max = $("#recent_content").height();
		
		my = (my < min) ? min : my;
		my = (my > max) ? max : my;
		
		recent.stop(true, true).animate({
			marginTop: my
		}, 50, 'linear');
	};
	
	return {
		init: init
		,recentResize: recentResize
	};
}();

$(function(){
	setTimeout(Recent.init, 800);
});
