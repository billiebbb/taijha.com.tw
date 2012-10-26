var pkey, key1, key2;
var menu_section = {
	home: 0
	, about: 1
	, recent: 2
	, work: 3
	, story: 4
	, presale: 5
	, ad: 6
	, contact: 7
};

var about_sub_session = {
	press: 0
	, attitude: 1
	, documentary: 2
};

var Menu = function(){	
	var menu, logo;
	var divid = 5;
	var markup = '<li class="item sub year" key="${year}" id="y${year}">${year}</li>';
	var mark_width = 64;
	
	var init = function(){
		menu = $('#menu').show();
		logo =$('#logo');
			
		createWorksSubmenu();
		
		menu.find(".item").live("mouseenter", function(e){
			if($(this).is(".active, .sub")) return;
			
			$(this).width(120).css({"opacity": "1", left: 0});
			$(this).stop(true, true).animate({width: 125, backgroundColor: "#666"}, 100);
		}).live("mouseleave", function(e){
			if($(this).is(".active, .sub")) return;
			
			$(this).stop(true, true).animate({width: 120, backgroundColor: "#9A9A9A"}, 100, function(){
				$(this).width("").css('backgroundColor', '');
			});
		}).live("click", function() {
			var name;
			
			if($(this).is(".sub.year")){
				var year = $(this).attr("key");
				name = $(".work_item[year='" + year + "']").attr("id");
			}
			else{
				name = $(this).attr("key");
				if(name == "about") name = "press";
			}
			
			goToSection(name);
		});
		
		$("#menu.shrink").live('mouseenter', function(){
			openMenu();
		}).live('mousemove', function(){
			openMenu();
		});
		
		$("#menu.lock").live('mouseleave', function(){
			shrinkMenu(500);
		});
		
		
		$('#page_swaper li').live('click', function(e){
			
			if($(this).is('#down_page')){
				swapSection(-1);
			}
			else{
				swapSection(1);
			}
		});
		
		$(window).resize(menuResize);
		
		
		shrinkMenu(5000);

	};
	
	var menuResize = function(){
		
		
		menu.css({
			margintop: parseInt(-menu.height/2)
			, top: '50%'
			, left: -50
		});


	};
	
	var createWorksSubmenu = function(){
		$.template( "yearSub", markup );
		var years = [];
		
		var yl = WorksData.getYearsList();
		$.each(yl, function(idx, val){
			years.push({year: val});
		});
		
		$.tmpl( "yearSub", years).appendTo( "#work_sub" );
	};
	
	var menuTimer;
	var openMenu = function(duration){
		duration = duration || 10;
		
		$('#menu').addClass('expansion').removeClass('shrink');
		clearTimeout(menuTimer);
		$('#menu .item:not(".sub,.active")').stop(true);
		
		menuTimer = setTimeout(function(){
			$('#menu .item:not(".sub,.active")').stop(true, true).animate({
				marginLeft: 0
				, paddingRight: 10
			}, 500, function(){
				clearTimeout(menuTimer);
			});
		}, duration);
		
	};
	
	var shrinkMenu = function(duration){
		
		if(isMobile.iOS() || isMobile.Android()){
			return;
		}
		
		duration = duration || 3000;
		
		clearTimeout(menuTimer);
		$('#menu .item:not(".sub,.active")').stop(true);
		
		menuTimer = setTimeout(function(){
			$('#menu .item:not(".sub,.active")').stop(true, true).animate({
				marginLeft: -90
				, paddingRight: 30
			}, 500, function(){
				$(this).width("").css({backgroundColor: ''});
				$('#menu').addClass('shrink').removeClass('expansion');		
				clearTimeout(menuTimer);
			});
		}, duration);
		
	};
	
	
	var setCurrentMenu = function(k1, k2){
		
		
		k1 = k1 || key1;
		
		if($("#" + k1).is('.work_item')){
			k1 = $("#" + k1).attr('year');	
		}
		
		if($('.item[key="' + k1 + '"]').is('.sub')){
			k2 = k1;
			k1 = $('.sub[key="' + k1 + '"]').parent().attr('key');
		}
		
		if(k1 == "about" && !k2){
			k2 = $('#' + k1 + '_sub .sub:first').attr("key");
		}
		else if(k2){
			$("#menu .item.sub[key='"+k2+"']").addClass("active");
			
		}
		
		var actBtn = $("#menu .item.active:not('.sub'):not([key='" + k1 + "'])");
		var deactBtn = $("#menu .item[key='"+k1+"']:not(.active)");
		actBtn.removeClass('active').mouseleave();
		deactBtn.stop(true, true).addClass("active").css('backgroundColor', '');
		
		if(!isMobile.iOS() && !isMobile.Android()){
			actBtn.animate({
				marginLeft: -90
				, paddingRight: 30
			}, 500);

			deactBtn.animate({
				marginLeft: 0
				, paddingRight: 10
			}, 500);
		}
		$("#menu .item.sub.active:not([key='" + k2 + "'])").removeClass('active');
		if(k2) $("#menu .item.sub[key='" + k2 + "']").addClass('active');
		
				
		pkey = k1 || "";		
		
		// setting swap button status		
		if(k1 == 'home' ){
			$('#up_page').addClass('active');
			$('#down_page').removeClass('active');
			
			$('#page_mark').stop(true, true).fadeOut();
		}else if(k1 == 'contact'){
			
			$('#up_page').removeClass('active');
			$('#down_page').addClass('active');
			
			$('#page_mark').stop(true, true).fadeIn();
		}
		else{
			$('#up_page, #down_page').removeClass('active');
			$('#page_mark').stop(true, true).fadeIn();
		}
		
		if(k1 != 'home'){
			$('#page_mark').animate({
				backgroundPosition: '0 -' + (menu_section[k1]-1)*mark_width + 'px'
			}, 800);
		}
		
		if(k1 == 'about' || k1 == 'work'){
	
			$('.submenu:not("#' + k1 + '_sub")').hide();
	
			
			if(!$('#' + k1 + '_sub:visible').length){
				$('#' + k1 + '_sub').show();
			}		
		}
		else {
			$('.submenu:visible').hide();
		}
		
		
		$("#menu").css({
			top: $(window).height()/2
			, marginTop: - $("#menu").height()/2
		});
	};
	
	return {
		init: init
		, setCurrentMenu: setCurrentMenu
	};
}();

$(function(){
	$('#menu').hide();
	setTimeout(Menu.init, 500);
});
