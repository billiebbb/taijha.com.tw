var Recent = function(){
	var markup = "\
		<div class='recent_item' p_id='${p_id}' title='${name}'>\
			<a href='${link}' target='blank'>\
				<div class='body'>\
					<img src='uploads/${image}' />\
				</div>\
				<div class='footer'>\
						<div class='info_btn'>前往官方網站</div>\
				</div>\
			</a>\
			<div class='tj_btn edit image' action='cms/edit_media.php?m_id=${m_id}'>\
	    		<div class='icon-picture icon-white'></div>編輯圖片\
    		</div>\
    		<div class='tj_btn edit remove' p_id='${p_id}'>\
	    		<div class='icon-remove icon-white'></div>\
    		</div>\
		</div>";	
	
	var current_idx = 0;
	var display_num = 4;	
	var init = function(){
		
		// createRecent();
		// $(window).resize(recentResize);
		
		// .scroll(recentScroll);
		setDisplay();
		
		$("#recent_main").find(".next_btn, .prev_btn").live("click", function(e){
			if($(this).is(".next_btn")){
				current_idx++;
			}
			else{
				current_idx--;
			}
			
			setDisplay();
		});
	};
	
	var setDisplay = function(){
		var container = $("#recent_content");
		var pos;
		var sp = current_idx;
		var ep = current_idx + display_num;
		$.each(container.find(".recent_item"), function(i){
			if(i<sp){
				pos = -$(window).width()/2;
			}
			else if(i>=ep){
				pos = $(window).width()*1.5;
			}
			else{
				pos = 190 * (i - current_idx);
			}
			
			$(this).stop().animate({left: pos}, 500);
			
		});
	}
	
	var addRecent = function(data){
		$.template( "recentItem", markup );
		$.tmpl( "recentItem", data).css("left", "-500px").prependTo( "#recent_content" );
		
		recentResize();
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
		
		setDisplay();
		
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
		,addRecent: addRecent
		,recentResize: recentResize
		,setDisplay: setDisplay
	};
}();

$(function(){
	// Recent.init();
});
