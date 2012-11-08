var TJEditor = function(){
	var init = function(){
		// $("#home_title").append("<div class='tj_btn edit text' key='home'>編輯</div>");
		$(".tj_btn.edit").live('click', function(event) {
			
			if($(this).is(".text")){
				blockwheel = true;
				
				var action = $(this).attr("action");
				
				var clone = $(this).parent().clone();
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
						label: '確定'
						, class: 'btn-success'
						, callback: function(){
							blockwheel = false;
							// console.log(content.find(".text_editor").html());
						}
					}
					,{
						label: '取消'
						, class: 'btn-link'
						, callback: function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: $(this).text()
				});	
			}
			else if($(this).is(".image")){
				
				var action = $(this).attr("action");
				
				var markup = '\
				<div class="tj_editor_container">\
					<div class="file_upload_btn btn btn-success">\
						<i class="icon-upload icon-white"></i> 上傳新的圖片\
					</div>\
				</div>';
				
				var content = $(markup);
				
				var qquploader = new qq.FileUploaderBasic({
					button: content.find(".file_upload_btn")[0]
					, action: 'do-nothing.htm'
					, debug: true
					, allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
					, sizeLimit: 2000 * 1024 // 1mb 
					, onSubmit: function(id, fileName) {
						$messages.append('<div id="file-' + id + '" class="alert" style="margin: 20px 0 0"></div>');
		 			}
			 		, onUpload: function(id, fileName) {
			        	
					}
					, onProgress: function(id, fileName, loaded, total) {
			 			if (loaded < total) {
			 				var progress = Math.round(loaded / total * 100) + '% of ' + Math.round(total / 1024) + ' kB';
			 				
							
				        } else {
							
				        }
			      	}
			      	, onComplete: function(id, fileName, responseJSON) {
			        	if (responseJSON.success) {
			          		
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
				
				bootbox.dialog( content, [
					{
						label: '確定'
						, class: 'btn-success'
						, callback: function(){
							blockwheel = false;
							// console.log(content.find(".text_editor").html());
						}
					}
					,{
						label: '取消'
						, class: 'btn-link'
						, callback: function(){
							blockwheel = false;			
						}
					}
					
				], {
					header: $(this).text()
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
