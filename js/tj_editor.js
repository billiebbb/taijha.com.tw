var TJEditor = function(){
	var init = function(){
		// $("#home_title").append("<div class='tj_btn edit text' key='home'>編輯</div>");
		$(".tj_btn.edit").live('click', function(event) {
			
			var btn_self = $(this);
			var parent = btn_self.parent();
			var action = btn_self.attr("action");
			
			// text update
			if(btn_self.is(".text")){
				blockwheel = true;
				
				var clone = parent.clone();
				clone.find(".tj_btn.edit").remove();
				
				var content = $("<div class='tj_editor_container'><div class='text_editor'></div></div>");
				content.find(".text_editor").append(clone.html());
				content.find(".text_editor").redactor({
					lang: "zh_tw"
					, buttons: ['html', '|', 'formatting', '|', 'bold', 'italic', 'deleted', '|'
						, 'link', '|',
						'fontcolor', 'backcolor', '|', 'alignment', '|', 'horizontalrule']
				});
				
				bootbox.dialog(content, [
					{
						'label': '確定'
						, 'class': 'btn-success'
						, 'callback': function(){
							blockwheel = false;
							
							var data = {
								p_id: btn_self.attr("p_id")
								, content: content.find(".text_editor").getCode()
							};
							
							// console.log(content.find(".text_editor").html());
							$.ajax({
								url: action
								, data: data
								, type: "POST"
								, success: function(result){
									if(result.error){
										bootbox.alert(result.msg);
									}
								}
							});
							
							parent.html(data.content);
							parent.append(btn_self);
						}
					}
					,{
						'label': '取消'
						, 'class': 'btn-link'
						, 'callback': function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: btn_self.text()
				});	
			}
			
			// image update
			else if(btn_self.is(".image")){
				
				var action = btn_self.attr("action");
				var img = parent.find("img");
				var file = img.attr("src");

				var ext = file.substr( (file.lastIndexOf('.') +1) ) || "jpg";
								
				var markup = '\
				<div class="tj_editor_container">\
					<div class="img_meta"> </div>\
					<div class="file_upload_btn btn btn-success">\
						<i class="icon-upload icon-white"></i> 上傳新的圖片\
					</div>\
				</div>';
				
				var content = $(markup);
				content.find(".img_meta").text("請上傳 " + img.width() + "x" + img.height() + " pixel 解析度大於 72dpi 之  " + ext + " 檔");
				
				var box = bootbox.dialog( content, [
					{
						'label': '取消'
						, 'class': 'btn-link'
						, 'callback': function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: btn_self.text()
				});
				
				var qquploader = new qq.FileUploaderBasic({
					button: content.find(".file_upload_btn")[0]
					, action: action
					, debug: true
					, allowedExtensions: [ext]
					, sizeLimit: 2000 * 1024 // 1mb 
					, onSubmit: function(id, fileName) {
						content.find(".file_upload_btn").hide();
		 			}
			 		, onUpload: function(id, fileName) {
			        	
					}
					, onProgress: function(id, fileName, loaded, total) {
			 			if (loaded < total) {
			 				var progress = "已上傳 " + Math.round(loaded / 1024) + ' kB(' + Math.round(loaded / total * 100) + '%)';
			 				content.find(".img_meta").text(progress);							
				        } else {
							var progress = "已上傳 " + Math.round(total / 1024) + ' kB(100%)';
			 				content.find(".img_meta").text(progress);
				        }
			      	}
			      	, onComplete: function(id, fileName, responseJSON) {
			      		
			        	if (responseJSON.success) {
			          		img.attr("src", "uploads/" + responseJSON.filename);
			          		box.modal('hide');
			        	} else {
			        		
		        		}
		        		
		      		}
		      		, messages: {
			            typeError: "{file} 檔案格式錯誤，需選擇以下類型的檔案: {extensions}.",
			            sizeError: "{file} 檔案太大了，最多只能上傳2mb大小之檔案.",
			            // minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
			            // emptyError: "{file} is empty, please select files again without it.",
			            noFilesError: "沒有任何檔案可上傳",
			            onLeave: "檔案正在上傳中，離開將中斷上傳動作"
			        }
		      		, showMessage: function(message){
			            bootbox.alert(message);
			        }
		    	});
				
			}
			
			// add recent
			else if(btn_self.is(".add_recent")){
				var action = btn_self.attr("action");
				var img = parent.find("img");
				var file = img.attr("src");

				var ext = file.substr( (file.lastIndexOf('.') +1) ) || "jpg";
								
				var markup = '\
				<div class="tj_editor_container">\
					<div><input type="text" placeholder="請輸入案名" class="name" style="width: 355px;" /></div>\
					<div><input type="text" placeholder="請輸入網站連結" class="url" style="width: 355px;" /></div>\
					<div class="file_upload_btn btn btn-success" style="margin-bottom: 10px;">\
						<i class="icon-upload icon-white"></i> 上傳圖片\
					</div>\
					<div class="img_meta" style="margin: 0;"> </div>\
				</div>';
				
				var checkUpload;
				var content = $(markup);
				content.find(".img_meta").text("請上傳 170x380 pixel 解析度大於 72dpi 之  jpg 檔");
				
				if($.browser.msie){
					$.each(content.find("input"), function(){
						$(this).watermark($(this).attr("placeholder"));	
					});
				}
				
				var qquploader = new qq.FileUploaderBasic({
					button: content.find(".file_upload_btn")[0]
					, action: action
					, debug: true
					, allowedExtensions: [ext]
					, sizeLimit: 2000 * 1024 // 1mb 
					, params: {}
					, onSubmit: function(id, fileName) {
						
						content.find(".file_upload_btn").text(fileName);						
						checkUpload();
		 			}
		 			, autoUpload: false
			 		, onUpload: function(id, fileName) {
			 			content.find("input").attr("disabled", "true");			
			        	content.find(".file_upload_btn").hide();
					}
					, onProgress: function(id, fileName, loaded, total) {
			 			if (loaded < total) {
			 				var progress = "已上傳 " + Math.round(loaded / 1024) + ' kB(' + Math.round(loaded / total * 100) + '%)';
			 				content.find(".img_meta").text(progress);							
				        } else {
							var progress = "已上傳 " + Math.round(total / 1024) + ' kB(100%)';
			 				content.find(".img_meta").text(progress);
				        }
			      	}
			      	, onComplete: function(id, fileName, responseJSON) {
			      		
			        	if (responseJSON.success) {
			          		Recent.addRecent(responseJSON.data);							blockwheel = false;
			          		box.modal('hide');
			        	} else {
			        		
		        		}
		        		
		      		}
		      		, messages: {
			            typeError: "{file} 檔案格式錯誤，需選擇以下類型的檔案: {extensions}.",
			            sizeError: "{file} 檔案太大了，最多只能上傳2mb大小之檔案.",
			            // minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
			            // emptyError: "{file} is empty, please select files again without it.",
			            noFilesError: "沒有任何檔案可上傳",
			            onLeave: "檔案正在上傳中，離開將中斷上傳動作"
			        }
		      		, showMessage: function(message){
			            bootbox.alert(message);
			        }
		    	});
		    	
		    	
		    	var box = bootbox.dialog( content, [
					{
						'label': '確定'
						, 'class': 'btn-success'
						, 'callback': function(){
							qquploader.uploadStoredFiles();
							return;
						}
					}
					, {
						'label': '取消'
						, 'class': 'btn-link'
						, 'callback': function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: btn_self.text()
				});
				
				content.find("input").keyup(function(){
					checkUpload();
				});
				
				checkUpload = function(){
					
					if(($.browser.msie)){
						var val1 = content.find("input.name").watermarkVal();
						var val2 = content.find("input.url").watermarkVal();
					}
					else{
						var val1 = content.find("input.name").val();
						var val2 = content.find("input.url").val();
					}
					
					if(qquploader._handler._files.length && val1 && val2 ){
						qquploader.setParams({
			 				name: val1
			 				, url: val2
			 			});
			 			
						box.find(".modal-footer .btn-success").show();		
					}
					else{
						box.find(".modal-footer .btn-success").hide();
					}
				};
		    	
		    	box.find(".modal-footer .btn-success").hide();
		    	box.width(400).css("marginLeft", "-200px");
			}
			
			// movie embed code
			else if(btn_self.is(".movie")){
				blockwheel = true;
				
				var clone = parent.clone();
				clone.find(".tj_btn.edit").remove();
				
				var old_html = "<div class='tj_editor_container'>\
					<textarea class='text_editor' style='width: 510px; height: 130px; position: relative; float: left;'>\
					</textarea>\
					<div style='margin: 10px 0; position: relative; float: left;'>*請貼入 Youtube 或 Vimeo 影片嵌入碼，並設定為 640x360 大小</div>\
				</div>";
				
				var content = $(old_html);
				
				var val = (clone.find(".no_mov").length)? "" : $.trim(clone.html());
				content.find(".text_editor").val(val);
				
				bootbox.dialog(content, [
					{
						'label': '確定'
						, 'class': 'btn-success'
						, 'callback': function(){
							blockwheel = false;
							
							var data = {
								p_id: btn_self.attr("p_id")
								, content: content.find(".text_editor").val()
							};
							
							// console.log(content.find(".text_editor").html());
							$.ajax({
								url: action
								, data: data
								, type: "POST"
								, success: function(result){
									if(result.error){
										bootbox.alert(result.msg);
									}
								}
							});
							
							var html;
							if(data.content){
								html = data.content;
							}
							else{
								html = '<div class="no_mov">建構中</div>';
							}
							
							parent.html(html);
							parent.append(btn_self);
						}
					}
					,{
						'label': '取消'
						, 'class': 'btn-link'
						, 'callback': function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: btn_self.text()
				});
				
				
			}
			
			// remove post
			else if(btn_self.is(".remove")){
				var data = {p_id: $(this).attr("p_id")};
				
				bootbox.dialog("確定刪除此筆資料嗎?", [
					{
						'label': '確定'
						, 'class': 'btn-success'
						, 'callback': function(){
							
							$.ajax({
								url: "cms/remove_post.php"
								, data: data
								, type: "POST"
								, success: function(result){
									if(result.error){
										bootbox.alert(result.msg);
									}
								}	
							});
							
							parent.remove();
							
							if($("#recent").is(".active")){
								Recent.setDisplay();
							}
												
							blockwheel = false;
							return;	
						}
					}
					,{
						'label': '取消'
						, 'class': 'btn-link'
						, 'callback': function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: "刪除資料"
				});
			}
		});
		
	};
	
	return {
		init: init
	};
}();

$(function(){
	TJEditor.init();
});
