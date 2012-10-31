var Presale = function(){
	var cur_idx = 0;
	var presale_data;
	var pre_idx;
	var markup = '\
		<table style="width: 100%;">\
			<tbody>\
				<tr>\
					<td valign="top" class="title" colspan="2" style="width: 70px;">${name}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">基地面積:</td>\
					<td valign="top">${base_size}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">建築規劃:</td>\
					<td valign="top">${plan}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">坪數規劃:</td>\
					<td valign="top">${size}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">開工日期:</td>\
					<td valign="top">${start_at}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">預計完工:</td>\
					<td valign="top">${complete_at}</td>\
				</tr>\
				<tr>\
					<td valign="top" style="width: 70px;">座落地點:</td>\
					<td valign="top">${location}</td>\
				</tr>\
			</tbody>\
		</table>\
	';
	var init = function(){
		presale_data = PresaleData;
		$.template( "presaleMeta", markup );
		
		var item_data = "";
		$.each(presale_data, function(i){
			item_data += "<div class='item' rel='tooltip' title='" + this.name + "'><img src='" + this.thumbs[0] + "' /><div class='border'></div></div>";
		});
		
		var item_list = $("#presale #presale_list .item_list");
		item_list.append(item_data);
		item_list.width( 127 * presale_data.length + 10);
		
		$("#presale").find(".next_btn, .prev_btn").live('click', function(){
			if($(this).is(".active")) return;
			
			pre_idx = cur_idx;
			
			if($(this).is(".next_btn")){
				cur_idx++;	
			}
			else{
				cur_idx--;
			}
			
			
			setContent();
		});
		
		$("#presale #presale_list .item").live('click', function(e) {
			if($(this).is(".active")) return;
			
			var idx = $("#presale #presale_list .item").index($(this));
			
			pre_idx = cur_idx;			
			cur_idx = parseInt(idx);
			
			setContent();
		});
		// .tooltip();
		
		$("#presale").find("#map_thumb, #show_map").live("click", function(){
			if($("#presale #map_thumb").is(".active")) return;
			
			LightBox.show({images: [presale_data[cur_idx].map]} );
		});
		
		
		setContent();
	};
	
	var setContent = function(){
		var mydata = presale_data[cur_idx];
		// $("#presale #building").html("<img src='" + mydata.images[0] + "' />");
		
		var nimg = $("<img src='" + mydata.images[0] + "' />");
		var oimg = $("#presale #building img");
		var direction = (cur_idx < pre_idx)? 1 : -1;
		
		if(cur_idx == 0){
			$("#presale .prev_btn").addClass('active');
			$("#presale .next_btn").removeClass('active');
		}
		else if(cur_idx == presale_data.length-1){
			$("#presale .prev_btn").removeClass('active');
			$("#presale .next_btn").addClass('active');
		}
		else{
			$("#presale .prev_btn").removeClass('active');
			$("#presale .next_btn").removeClass('active');
		}
		
		oimg.animate({
			left: direction * $(window).width()
		}, 500, function(){
			$(this).remove();
		});
		 
		nimg.css("left", (direction * $(window).width() * -1) + "px");
		$("#presale #building").append(nimg);
		
		nimg.animate({left: 0}, 500);
		if(mydata.map_thumb){
			$("#presale #map_thumb").html("<img src='" + mydata.map_thumb + "' />");
			$("#presale").find("#map_thumb, #show_map").removeClass('active');	
		}	
		else{
			$("#presale #map_thumb").html("<div class='no_map'>位置圖建構中</div>");
			$("#presale").find("#map_thumb, #show_map").addClass('active');
		}	
		
		
		$("#presale #presale_list .item.active").removeClass('active')
		$("#presale #presale_list .item:eq(" + cur_idx + ")").addClass('active');
		
		var ometa = $("#meta table");
		var nmeta =  $.tmpl( "presaleMeta", [mydata]);
		
		ometa.animate({top: -ometa.width()*3}, 500, function(){
			$(this).remove();
		});
		
		$("#meta").append(nmeta);
		nmeta.css("top", $(window).height() + "px").animate({top: 0}, 500);
		
		var idx_obj = $("#presale .index_object");
		idx_obj.find(".idx").text(cur_idx+1);
		idx_obj.find(".total").text(presale_data.length);
		
		$("#presale #presale_list .item_list").stop().animate({
			left: -127 * cur_idx
		}, 500);
	};
	
	
	
	return {
		init: init
	};
}();

$(function(){
	Presale.init();
});
