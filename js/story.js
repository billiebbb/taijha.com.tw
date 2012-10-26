var Story = function(){
	var story_data;
	var cur_page = 1;
	var cur_story = 0;
	var page_size = 7;
	var total_page;
	var pager_amount = 6;
	var view_type = "default";
	
	var markup = '\
		<tr>\
        	<td>${title}</td>\
        	<td>${project}</td>\
        	<td>${name}</td>\
       	</tr>';
       	
	var init = function(){
		story_data = StoryData.stories;
		total_page = Math.ceil(story_data.length / page_size);
		
		$.template( "storyListItem", markup );
		
		var list_body = $("#story_list");
		$.tmpl( "storyListItem", story_data).appendTo( list_body );
		
		// list_body.find("tr:first").addClass('active');		
		var pager = $("#story_pager");
		var prev_btn = pager.find(".prev");
		
		var pages = "";
		var idx;
		
		for(var i=1; i<=total_page; i++){
			pages += "<li class='page' idx='" + i + "'><a>" + i +"</a></li>";
		}
		
		
		prev_btn.after(pages);
		
		$("li.page:first").addClass('active');
		
		
		$("#story_list tr").live('click', function(){
			if($(this).is('.active')) return;
			
			var idx = $("#story_list tr").index($(this));
			
			$("#story_list tr.active").removeClass('active');
			$(this).addClass('active');
			
			setContent(idx);
			
			if(view_type == "default"){ 
				swapContent();
			}
		});
		
		$("#story #back_story").live("click", function(){
			swapContent();
		});
		
		$("#story_pager .page").live('click', function(){
			swapPage($(this).attr("idx"));
		});
		
		$("#story_pager").find('.next, .prev').live('click', function(){
			if($(this).is(".disabled")){
				return;
			}
			
			if($(this).is('.prev')){
				swapPage(cur_page-1);
			}else{
				swapPage(cur_page+1);
			}
			
		});
		
		$( "#story_content" ).live("mouseenter", function(){
			if($(".slider-wrap").length) blockwheel = true;
		}).live("mouseleave", function(){
			blockwheel = false;
		});
		
		// setContent();
		
		$("#stories").css("left", $(window).width()*2);
		setPager();
		setList();
	};
	
	var swapContent = function(){
		
		if(view_type == "default"){
			view_type = "read";
			pager_amount = 3;
			$("#story").find(".title_img, .content_title").each(function(i){
				if(!$(this).data("oleft")) $(this).data("oleft", parseCssNumber($(this).css("left")));
				
				$(this).stop(true).delay(i * 100).animate({
					left: -$(window).width()*2
				}, 800);
			});
			
			$("#story #stories").stop(true).animate({
				left: -200
			}, 800);
			
			$("#story #story_main").stop(true).animate({
				left: -350
				, width: 200
			}, 800, function(){
				$("#story .pagination-right").removeClass('pagination-right')
			});
			
			$("#story_table th:first").width("100%");
			
			$("#story_table tr").each(function(i){
				$(this).find("th:gt(0), td:gt(0)").hide();
			});
			
		}else{
			pager_amount = 6;
			
			view_type = "default";
			
			$("#story_list tr.active").removeClass('active');
			
			$("#story #story_main").stop(true).animate({
				left: 0
				, width: 400
			}, 800);
			
			$("#story #stories").stop(true).animate({
				left: $(window).width() * 2
			}, 800, function(){
				$("#story_table th:first").width("45%");
				$("#story_table tr").find("th:hidden, td:hidden").fadeIn(300);
			});
			
			$("#story").find(".title_img, .content_title").each(function(i){
				$(this).stop(true).delay(i * 200).animate({
					left: $(this).data("oleft")
				}, 800);
			});
			
			$("#story .pagination").addClass('pagination-right')
			
		}
		
		setPager();
	};
	
	var setContent = function(idx){
		cur_story = (idx == null)? cur_story : idx;
		
		var mystory = story_data[cur_story];
		var html = '<div class="story_item"><div class="body">' + mystory.content + '</div></div>';
		
		$("#stories .story_header").html( mystory.project + "　‧　" + mystory.name);
		$("#story_content").html(html);
		
		setSlider($( "#story_content" ));        
		
	};
	
	var setPager = function(){
		var pager = $("#story #story_pager");
		var sp, ep;
		var cnum = Math.ceil(pager_amount/2);
		
		
		pager.find(".page").hide();
		
		if(cur_page <= cnum){
			sp = 0;
			ep = pager_amount;
			
			pager.find(".page:lt(" + ep + ")").show();
						
			
		}
		else if(cur_page > total_page - cnum){
			
			
			sp = total_page - pager_amount;
			sp = (sp < 0)? 0 : sp;
			ep = total_page;
			
			if(sp == 0){
				pager.find(".page:lt(" + (sp + pager_amount) + ")").show();
			}else{
				pager.find(".page:gt(" + sp + ")").show();	
			}
			
			
		}
		else{
			
			sp = cur_page - cnum;
			ep = cur_page + cnum;
			
			pager.find(".page:gt(" + (sp-1) + "):lt(" + pager_amount + ")").show();
		}
		
		if(cur_page == 1){
			pager.find(".prev").addClass('disabled');
			pager.find(".next").removeClass('disabled');
		}
		else if(cur_page == total_page){
			pager.find(".prev").removeClass('disabled');
			pager.find(".next").addClass('disabled');
		}
		else{
			pager.find(".next").removeClass('disabled');
			pager.find(".prev").removeClass('disabled');
		}
	};
	
	var setList = function(){
		var list_body = $("#story #story_list");
		var sidx = (cur_page-1) * page_size;
		var eidx = sidx + page_size;
		
		list_body.find("tr").hide();
		
		if(sidx == 0){
			list_body.find("tr:lt(" + eidx + ")").show();	
		}
		else if(eidx >= story_data.length){
			list_body.find("tr:gt(" + (sidx-1) + ")").show();
		}
		else{
			list_body.find("tr:gt(" + (sidx-1) + "):lt(" + page_size + ")").show();
		}
		
	};
	
	var swapPage = function(page){
		cur_page = parseInt(page);
		
		$("#story #story_pager .page.active").removeClass("active");
		$("#story #story_pager .page[idx='" + cur_page + "']").addClass("active");
		
		setPager();
		setList();
	};
	
	return {
		init: init
		, setContent: setContent
	}
}();

$(function(){
	Story.init();
});
