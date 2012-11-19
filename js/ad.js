var Ad = function(){
	var ad_data;
	var full_img = [];
	var full_thumb = [];
	var initialized = false;
	
	var init = function(){
		setFlow();	
		
		$("#full_ad").live("click", function(){
			
			LightBox.show({images: full_img, thumbs: full_thumb} );
		});
	};
	
	var setFlow = function(){
		ad_data = ADData;
		
		var flows = "";
		$.each(ad_data, function(i){
			flows += "<div title='" + this.name + "' class='flow_item'>";
			flows += "<img src='" + this.thumb + "' />";
			if(is_admin){
				// flows += "<div class='tj_btn edit image' action='cms/edit_media.php?m_id=" + this.m_id + "'>";
				// flows += "<div class='icon-picture icon-white'></div>編輯圖片</div>";
				flows += "<div class='tj_btn edit remove rm_ad' style='right: 70px;' p_id='" + this.p_id + "' action='cms/remove_post.php'>";
		    	flows += "<div class='icon-remove icon-white'></div>"
	    		flows += "</div>";	
			}
			flows += "</div>";
			
			full_img.push(this.image);
			full_thumb.push(this.thumb);
		});
		
		$("#ad_flow").empty().append(flows);
		$("#ad_flow").coverscroll({
			items:'.flow_item'
			, minfactor: 48 
  			, scalethreshold: 5
		  	, distribution: 1
		  	, bendamount: 1.5
		});
	};
	
	var addAd = function(data){
		ADData.unshift(data);
		setFlow();
	};
	
	var removeAd = function(pid){
		// console.log(pid);

		for(var key in ADData){
			if(ADData[key].p_id == pid){
				ADData.splice(key, 1);
				break;
			}
		}
		
		setFlow();
	};
	
	return {
		init: init
		,addAd: addAd
		,removeAd: removeAd
	};
}();

$(function(){
	// Ad.init();
});
