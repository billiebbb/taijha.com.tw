var PhotoWall = function(){
	var wall, tmpl;
	var collist = ['col1', 'col2', 'col3'];
	var coltype = ['blank', 'img', 'img', 'img', 'img', 'img'];
	var img_amount = 15, img_count = 0;
	var hasImage = {};
	
	var works = [];
	var markup = "\
	<li class='photo_item ${col}' pid='project-${id}'>\
		{{if img}}\
	     	<div class='pitem_container'>\
				<img src='${img}'>\
			</div>\
			<div class='meta'>\
				<div class='body' style='background: transparent url(${logo}) no-repeat center center;'></div>\
			</div>\
		{{/if}}\
	</li>";
	

  	// Compile the markup as a named template
  	
	var init = function(){
		wall = $("#photo_wall");
		
		$('.photo_item:has(.pitem_container)').live('mouseenter', function(e){
			$(this).find('.meta').show();
			$('#modal_bg').show();
			
			$(this).maxZIndex({inc: 5});
			
			var meta = $(this).find('.meta');
			
			if($(this).position().left > 120){
				meta.css('right', 0);
			}
			else{
				meta.css('left', 0);
			}
		}).live('mouseleave', function(e){
			$(this).find('.meta').hide();
			$('#modal_bg').hide();
		}).live('click', function(){
			$(this).mouseleave();
			goToSection($(this).attr("pid"));
		});
		
		$("#modal_bg").live('click', function(){
			$('.photo_item:has(.pitem_container):first').mouseleave();
		});
		works = WorksData.works;
		$.template( "wallPhoto", markup );
		
		$(window).resize(pwResize);
		
		createWall();
	};
	
	var pwResize = function(){
		if(!$("#photo_wall:in-viewport").length) return;
		
		
		$("#photo_wall").css("top", -$(window).height() + "px");		
		
		var pw = $(window).width()/2 - 230;
		
		$("#photo_wall").width(pw);
		
		
		if(pw < 700	){
			$("#photo_wall .photo_item").removeClass("l").find('img').resizeToParent({
				parent: ".photo_item"
				, fadeIn: 300
			});
			
			if($('#photo_wall').is('.masonry')) $('#photo_wall').masonry('option', {columnWidth: 125}).masonry('reload');
			
		}
		else{
			$("#photo_wall .photo_item").addClass("l").find('img').resizeToParent({
				parent: ".photo_item"
				, fadeIn: 300
			});
			
			$("#photo_wall .photo_item:hidden").show();
			
			if($('#photo_wall').is('.masonry')){
				$('#photo_wall').masonry('option', {columnWidth: 185}).masonry('reload');
			}
			
		}
		
	};
	
	
	var createWall = function(){
		var type, colobj = [], rand, meta, img;
		
		while(img_count < img_amount){
			type = coltype[Math.floor(Math.random()*coltype.length)];
			
			rand = Math.floor(Math.random()*works.length);
			
			meta = works[rand];
			img = meta.images[Math.floor(Math.random() * meta.images.length)];
			
			if(!hasImage[img]){
				hasImage[img] = true;
				
				if(type == 'blank'){
					colobj.push({
						col: 'col1 blank'
					});
				}
				else{
					img_count++;
					
					meta = $.extend({
						col: collist[Math.floor(Math.random()*collist.length)] + " loading",
						img: img
					}, meta);
					
					colobj.push(meta);
				}
			}
		}
		
		$.tmpl( "wallPhoto", colobj ).appendTo( "#photo_wall" );
		
		$('.photo_item.col1').each(function(i){
			if(!$(this).find('img').length){
				$(this).css('opacity', Math.random()*.5+.3);
			}
		});
		

		var pw = $(window).width()/2 - 250;

		
		$("#photo_wall").width(pw);
		$("#photo_wall").css("top", -$(window).height() + "px");
		
		wall.hide().imagesLoaded( function(){
			
			wall.find(".pic").show();		
			wall.show().masonry({
				itemSelector : '.photo_item'
				// , isAnimated: true
				, columnWidth: (wall.width() < 430 )? 125 : 185
			}).find('.photo_item').removeClass('loading');
			
			$('.photo_item img').resizeToParent({
				parent: ".photo_item"
				, fadeIn: 300
			});
			
			setTimeout(pwResize, 500);
			
		});
	};
	
	
	return {
		init: init
		, resize: pwResize
		, wall: wall || $("#photo_wall")
	};
}();

$(function(){
	$("#photo_wall").hide();
	PhotoWall.init();
});
