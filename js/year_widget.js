var YearWidget = function(){
	var pyear;
	
	var show = function(year){
		setYear(year);
	};
	
	var setYear = function(year){
		if(year == pyear || !year) return;
		pyear = year;
				
		var h = 138;
		var arr = year.split('');
		$("#years_widget").fadeIn(500);
			
		$.each(arr, function(i){
			$("#years_widget .number:eq(" + i + ")").stop().animate({
				backgroundPosition: '0 -' + parseInt(this)*h + 'px'
			}, 800);
		});
	};
	
	var hide = function(){
		if($("#years_widget").is(":visible")){
			setYear("9999");
			$("#years_widget").fadeOut(500);
		} 
	};
	
	return {
		show: show
		, hide: hide
	}
}();


