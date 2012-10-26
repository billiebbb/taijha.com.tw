var scrollLock = false;
var pre_section;

var goToSection = function(sname){
	if(scrollLock) return;
	
	$.address.value(sname);
};

var swapSection = function(direction){
	
	if(scrollLock) return;
	
	var section = $("section");
	var act_section = $("section.active");
	var next_section;
	var idx = section.index(act_section);
	var prev_idx = idx;
	var out_top, in_top, in_pos;
	var act_id, next_id;
	
	if(direction < 0){
		idx +=1;
	}
	else{
		idx-=1;
	}
	
	idx = (idx < 0)? 0 : idx;
	idx = (idx > section.length -1 )? section.length -1 : idx;	
	
	if(idx == prev_idx) return; 
	
	next_section = $("section:eq(" + idx + ")");
	 
	goToSection(next_section.attr("id"));
	// setSection(act_section, next_section, direction);
};

var setSection = function(act_section, next_section, direction){
	
	var out_top, in_top, in_pos;
	var act_id, next_id;
	
	scrollLock = true;
	
	if(direction < 0){
		out_top = -$(window).height() * 2;
		in_top = 0;
		in_pos = $(window).height() * 2;
	}
	else{
		out_top = $(window).height() * 2;
		in_top = 0;
		in_pos = -$(window).height() * 2;
	}
	
	act_section.removeClass('active').stop(true, true).animate({
		top: out_top
	}, 800, function(){
		$(this).hide();
		scrollLock = false;
	});
	
	next_section.show().css({
		top: in_pos + "px"
	}).addClass('active').stop(true, true).animate({
		top: in_top
	}, 800);
	
	
	
	key1 = next_section.attr("id");	
	key2 = "";
	var reg = new RegExp('project', 'g');
	if(key1 == "press" || key1 == "attitude" || key1 == "documentary"){
		key2 = key1;
		key1 = 'about';
	}
	else if(reg.test(key1)){
		key2 = next_section.attr('year');
		key1 = 'work';
	}
	
	Menu.setCurrentMenu(key1, key2);
	
	sectionInterAnimate(next_section, act_section, direction);
	
	setWaveBg();
};
var setWaveBg = function(){
	var sec = $("section");
	var idx = parseInt(sec.index($("section.active")));
	var piece =  Math.floor(2200 / sec.length);
	
	$("#wave_bg").stop().animate({
		backgroundPosition: "0 -" + (piece * idx * 8) + "px"
	}, 1500, function(){
		setFloatWave();
	});
};

var setFloatWave = function(){
	var wp = $("#wave_bg").css("backgroundPosition");
	wp = parseInt(((wp)? wp.split(" ")[1].replace("px") : 0)) - $(window).height();
	
	$("#wave_bg").stop().animate({
		backgroundPosition: "0 " + wp + "px"
	}, 40000, "linear", function(){
		setFloatWave();
	});
};

var sectionInterAnimate = function(in_section, out_section, direction){
	var out_id = out_section.attr('id'), in_id = in_section.attr('id');
	var win = $(window);
	var reg = new RegExp('project', 'g');
	
	switch(out_id){
		case "home":
			$("#photo_wall").stop(true, true).animate( {
				top: $("#photo_wall").height() * ((direction < 0)? -1 : 1) * 2
			}, 500);
			break;
		// case "press":
		// case "attitude":
		// case "recent":
		default: 
			var children = $('section#' + out_id).children();
			
			children.each(function(i){
				if(!$(this).data('top')) $(this).data('top', ParseCssNumber($(this).css("top")));

				$(this).stop(true, true)
				.animate({
					top: $(this).data('top') + win.height() * ((direction < 0)? 1 : -1) * 0.2 
				}, 500 * (i + 1));
			});
			
			break;
	}
	
	switch(in_id){
		case "home":
			$("#photo_wall").stop(true, true).animate( {
				top: -$(window).height()
			}, 500);
			
			break;
			
		default:
		
			var children = $('section#' + in_id).children();
			
			
			children.each(function(i){
				if(!$(this).data('top')) $(this).data('top', ParseCssNumber($(this).css("top")));
				$(this).css({
					top: $(this).data('top') + win.height() * ((direction < 0)? 1 : -1) * 1.5
				}).stop(true, true)
				.delay(80 * ((direction < 0)? i+1 : children.length-i))
				.animate({
					top: $(this).data('top') 
				}, 500);
			});			
			if(in_id == "recent"){
				$('.recent_item .pic img').resizeToParent();
			}
			break;
	}
	
	if(reg.test(in_id)){
		var obj = $("#" + in_id);
		
		obj.find(".loading_black, .loading").removeClass('loading_black loading');
		obj.find(".thumb img").resizeToParent({fadeIn: 500});
		obj.find(".slider_img img").resizeToParent({fadeIn: 500, type: 'fixed', align: 'lt'});
	}
	else if(in_id == "work") {
		// setTimeout(function(){
			// Works.resize();			
		// }, 500);		
		Works.resize();
	}
	else if(in_id == "contact"){
		Contact.refreshMap();
	}	
};

var blockwheel = false;
$(function(){
	$("section:first").addClass('active').show();	
	$("#menu .item:first").addClass('active');
	
	$(document).mousewheel(function(event, delta, deltaX, deltaY){
		if(blockwheel) return;
		swapSection(delta);
	});
	
	setFloatWave();
	
	$.address.change(function(event){
		
		var sname = event.pathNames[0];
		var sname = (!sname || sname == null || typeof(sname) == "undefined") ? "home" : sname;
		
		var section = $("section");
		var act_section = $("section.active");
		var next_section = $("section#" + sname);
		var idx = section.index(act_section);
		var prev_idx = idx;
		var out_top, in_top, in_pos;
		var act_id, next_id;
		
		idx = section.index(next_section);
		
		if(idx == prev_idx) return; 
		
		var direction = (prev_idx < idx)? -1 : 1;
		
		setSection(act_section, next_section, direction);
	});
});