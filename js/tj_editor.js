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
		});
		
	};
	
	return {
		init: init
	};
}();

$(function(){
	TJEditor.init();
});
