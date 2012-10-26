var Works = function(){
	var pyear;
	var work_logo_index = 0;
	var markup = '\
	<section id="project-${id}" year="${year}" class="work work_item">\
			<div class="logo" style="background-image: url(${logo});"></div>\
			<div class="subtitle">\
				<img src="${subtitle}" />\
			</div>\
			<div class="v_line" style="\
		    left: -120px;\
		    "></div>\
			<div class="media">\
				<div class="slider_thumb">\
					{{each thumbs}}\
					<div class="thumb" class="loading_black">\
						<img src="${$value}" />\
						<div class="border"></div>\
					</div>\
					{{/each}}\
				</div>\
				<div class="slider_controller">\
					<div class="prev_btn item arrow"></div>\
					<div class="next_btn item arrow"></div>\
					<div class="idx_obj item">1/${images.length}</div>\
					<div class="full_btn item tj_btn">\
						<div class="icon-zoom-in icon-white"></div>\
						<div style="float: left;">全螢幕顯示</div>\
					</div>\
				</div>\
				<div class="slider_img loading_black">\
					<img src="${images[0]}" />\
				</div>\
			</div>\
	</section>'; 
	
	var markup2 = '\
		<div class="work_logo"  rel="tooltip" title="${year}" pid="project-${id}">\
			<img src="${logo}" />\
		</div>\
	';
	
	var init = function(){
		createWork();
		
		$(".work_item .media .thumb:not(.active)").live("click", function(){
			var media = $(this).parents('.media');
			if(!media.data('data')){
				media.data('data', WorksData.works[$('.work_item .media').index(media)]);
			}
			
			var data = media.data('data')
			var slider_img = media.find('.slider_img');
			var idx = media.find('.thumb').index($(this));
			media.find('.thumb.active').removeClass('active');
			$(this).addClass('active');
			
			media.find('.idx_obj').text( idx+1 + '/' + data.images.length);
			
			slider_img.find('img').css('position', 'absolute').stop(true, true).fadeOut(500, function(){
				$(this).remove();
			}); 
			
			var img = $('<img src="' + data.images[idx] + '" />');
			slider_img.append(img);
			img.resizeToParent({fadeIn: 500, type: 'fixed', align: 'lt'});
			setMediaArrow(media, idx);
		});
		
		$(".work_item .media .arrow:not(.active)").live("mouseenter", function(){
			var media = $(this).parents('.media');
			
			var pos = ($(this).is('.prev_btn')) ? "-36px 0" : "36px 0";
			
			$(this).stop(true, true).animate({
				backgroundPosition: pos 
			}, 500, function(){
				$(this).css('backgroundPosition', '');
			});
		});
		
		$(".work_item .media .arrow:not(.active)").live("click", function(){
			var media = $(this).parents('.media');
			if(!media.data('data')){
				media.data('data', WorksData.works[$('.work_item .media').index(media)]);
			}
			
			var data = media.data('data');
			var slider_img = media.find('.slider_img');
			var idx = media.find('.thumb').index(media.find('.thumb.active'));
			
			idx = ($(this).is('.prev_btn'))? idx-1 : idx+1;
			
			setMediaArrow(media, idx);
			
			media.find('.thumb:eq(' + idx + ')').click();
		});
		
		$(".work_item .media .full_btn").live('click', function(){
			var media = $(this).parents('.media');
			if(!media.data('data')){
				media.data('data', WorksData.works[$('.work_item .media').index(media)]);
			}
			
			var data = media.data('data');
			var idx = media.find('.thumb').index(media.find('.thumb.active'));
			
			LightBox.show({images: data.images, index: idx, thumbs: data.thumbs} );
		});
		
		$(".work_logo").live("click", function(){
			goToSection($(this).attr("pid"));
		});
		// .tooltip();
		
		
		var wcon = $("#work #work_logo_container");
		var wlist = $("#work #logo_list");
		
		$("#work").find(".next_btn, .prev_btn").live("click", function(){
				
			if($(this).is(".active")) return;
			
			if($(this).is(".next_btn")){
				work_logo_index -= 1;
			}
			else{
				work_logo_index += 1;
			}
			
			
			var pos_to = wcon.height() * work_logo_index;
			
			if(pos_to > -1){
				$("#work .prev_btn").addClass('active');
				$("#work .next_btn").removeClass('active');
			}
			else if(wlist.height() + pos_to <= wcon.height()){
				$("#work .prev_btn").removeClass('active');
				$("#work .next_btn").addClass('active');
			}
			else{
				$("#work").find(".prev_btn, .next_btn").removeClass('active');
			}
			 
			wlist.stop().animate({
				top: pos_to
			}, 500);
		});
		
		$(window).resize(workResize);
		// .scroll(onWorkScroll);
	};
	
	var setMediaArrow = function(media, idx) {
		var data = media.data('data');
		
		if(idx == data.images.length -1){
			media.find('.next_btn').stop(true, true).addClass('active');
			media.find('.prev_btn').stop(true, true).removeClass('active');
		}
		else if(idx == 0){
			media.find('.next_btn').stop(true, true).removeClass('active');
			media.find('.prev_btn').stop(true, true).addClass('active');
		}
		else {
			media.find('.next_btn.active, .prev_btn.active').removeClass('active');;
		}
	};
	
	var createWork = function(){
		$.template( "workItem", markup );
		$.template( "logoItem", markup2 );
		
		var yl = WorksData.getYearsList();
		var data = WorksData.getYears();
		var mydata = '';
		var year_con, work_con = $("#work_content");
		var yd;
		var logo_list = $("#logo_list");
		
		$.each(yl, function(i, val){
			
			yd = data[val];
			
			// year_con = $("<div class='year_con'></div>");
			// year_con.append($('<div class="year_text" key="' + val + '">' + val + '</div>'));
			// work_logo_list.append(year_con);
			$.tmpl( "logoItem", yd).appendTo(logo_list);
			
			$.tmpl( "workItem", yd).appendTo(work_con );
		});
		$.each($('.work_item .media'), function(){
			$(this).find('.thumb:first, .prev_btn').addClass('active');
		});
		
	};
	
	var workResize = function(){
		
		var media = $(".work_item .media");
		// media.width($(window).width() * 0.6);
		
		if($(window).width() > 1280){
			media.addClass('l');
		}
		else{
			media.removeClass('l');
		}
		$(".work_item .loading_black").removeClass('loading_black');
		$(".work_item.active .thumb img").resizeToParent();
		
		if($("#work.active").length){
			var wcon = $("#work #work_logo_container");
			var wlist = $("#work #logo_list");
			
			$("#work #logo_list").css("top", "5px");
			
			if( wlist.height() > wcon.height() ){
				$("#work").find(".next_btn, .prev_btn").show();	
			}else{
				$("#work").find(".next_btn, .prev_btn").hide();
			}
			
			$("#work .work_logo img").resizeToParent({type: 'fixed'});
		}
	};
	
	var refreshYear = function(){
		
		var inview = $(".work_item:in-viewport:eq(0)");
		var yw = $("#years_widget");
		var y;
		
		var ty = "";
		
		if(inwork.length){
			ty = inview.attr('year');
		}
		else if(yw.is(":visible")){
			ty = "0000";
		}
		
		
		// if(yw.data("year") == ty && !inwork.length || ty == "0000" || ty==""){
			// yw.stop().animate({opacity: 0});
			// return;
		// }
// 		
		// yw.show().stop(true).animate({opacity: 1});

		setYear(ty);
		yw.data('year', ty);
	};
	
	var setYear = function(year){
		if(year == pyear || !year) return;
		pyear = year;
				
		var h = 138;
		var arr = year.split('');
		$("#years_widget").show();	
		$.each(arr, function(i){
			$("#years_widget .number:eq(" + i + ")").stop().animate({
				backgroundPosition: '0 -' + parseInt(this)*h + 'px'
			}, 300);
		});
	};
		
	return {
		init: init
		, resize: workResize
		, refreshYear: refreshYear
	};
}();

$(function(){
	setTimeout(Works.init, 800);
});