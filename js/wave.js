var Wave = function(){
	var canvas;
	
	var init = function(){
		if(typeof(canvas) != "undefined") return;
		
		if($.browser.msie){
			
		}else{
			canvas = $('<canvas height="100%" width="100%" data-processing-sources="./processing/new_wave_curve.pde" id="newwavecurve" tabindex="0"></canvas>');
			$("#wave").append(canvas);
		}
		
		$(window).resize(waveResize);
		waveResize();
	};
	
	var waveResize = function(e){
		
		if($.browser.msie){
			
		}else{
			canvas.width($(window).width()).height($(window).height()+100);	
		}
		
		// var pCanvas = Processing.getInstanceById('newwavecurve');
		// pCanvas.resize($(window).width(),$(window).height());
	};
	
	
	return {init: init};
}();
	


$(function(){
	Wave.init();
	// setTimeout(Wave.init, 300);
});
