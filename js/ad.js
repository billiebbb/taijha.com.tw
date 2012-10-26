var Ad = function(){
	var ad_data;
	var full_img = [];
	var full_thumb = [];
	var init = function(){
		ad_data = ADData;
		
		var flows = "";
		$.each(ad_data, function(i){
			flows += "<div title='" + this.name + "' class='flow_item'><img src='" + this.thumb + "' /></div>";
			
			full_img.push(this.image);
			full_thumb.push(this.thumb);
		});
		
		$("#ad_flow").append(flows);
		$("#ad_flow").coverscroll({
			items:'.flow_item'
			, minfactor: 48 
  			, scalethreshold: 5
		  	, distribution: 1
		  	, bendamount: 1.5
		  	// , movecallback: function(){
		  		// $("#ad_flow .flow_item").each(function(index) {
					// if($(this).width() <= 1){
						// $(this).hide();
					// }
					// else{
						// $(this).show();
					// }
				// });
		  	// }
		});
		
		
		$("#full_ad").live("click", function(){
			
			LightBox.show({images: full_img, thumbs: full_thumb} );
		});
	};
	
	return {
		init: init
	};
}();

$(function(){
	Ad.init();
});
