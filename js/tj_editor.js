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
				blockwheel = true;
				
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
				if(parent.is(".slider_img")){
					var data = {m_id: $(this).attr("m_id")};
				}
				else{
					var data = {p_id: $(this).attr("p_id")};	
				}
				
				
				bootbox.dialog("確定刪除此筆資料嗎?", [
					{
						'label': '確定'
						, 'class': 'btn-success'
						, 'callback': function(){
							blockwheel = false;
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
							
							if(parent.is(".work_item")){
								goToSection("work");
								WorksData.removeWorkById(data.p_id);
								scrollLock = false;
							}
							else if(parent.is(".slider_img")){
								parent.parents(".media").find(".thumb.active").remove();
								
								parent.parents(".media").find(".thumb:not(.active):first").click();
							}else{
								parent.remove();
							}
							
							
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
			
			// add work
			else if(btn_self.is(".add_work")){
				blockwheel = true;
				
				var action = btn_self.attr("action");
				
				var markup = '\
				<div class="tj_editor_container">\
					<div class="edit_form">\
						<div style="width: 200px; position:relative; float: left; height: 34px;">\
							<input type="text" placeholder="請輸入案名" class="name" style="width: 170px;" />\
						</div>\
						<div class="year">\
							<div style="float: left; position: relative; height: 32px; line-height: 32px; margin-right: 10px;">設定年份</div>\
							<div style="float: left; position: relative; width: 90px;" class="dropdown">\
								<a class="dropdown-toggle btn" role="button" data-toggle="dropdown" href="#">\
									<span class="value" style="margin-right: 5px;">2012</span><b class="caret"></b>\
								</a>\
								<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel" style="min-width: 144px; margin-top: -34px;">\
								</ul>\
							</div>\
						</div>\
					</div>\
					<div class="pendding">\
					</div>\
					<div class="file_upload_btn btn btn-success" style="margin-bottom: 10px; position:relative; float: left;">\
						<i class="icon-upload icon-white"></i> 上傳Logo\
					</div>\
					<div class="img_meta" style="margin: 0; position:relative; float: left;"> </div>\
				</div>';
				
				var checkUpload;
				
				var content = $(markup);
				var pendding = content.find(".pendding");
				content.find(".img_meta").text("請上傳 240x160 pixel 解析度大於 72dpi 透明背景之  png 檔");
				var year_val = content.find(".year .value");
				var cur_year = parseInt(new Date().getFullYear());
				year_val.text(cur_year);
				
				var years = "";
				for(var i=0; i<8; i++){
					years += '<li><a>' + (cur_year-i) + '</a></li>';
				}
				
				content.find(".dropdown-menu").append(years);
				content.find(".dropdown-menu li").click(function(){
					year_val.text($(this).find("a").text());
				});
				
				if($.browser.msie){
					$.each(content.find("input"), function(){
						$(this).watermark($(this).attr("placeholder"));	
					});
				}
				
				var qquploader = new qq.FileUploaderBasic({
					button: content.find(".file_upload_btn")[0]
					, action: action
					, debug: true
					, allowedExtensions: ["png"]
					, sizeLimit: 2000 * 1024 // 2mb 
					, params: {}
					, onSubmit: function(id, fileName) {
						var files = pendding.find(".file_name").length;
						if(files < 1){
							pendding.show().append("<div class='file_name'>Logo: " + fileName +"</div>");
							content.find(".file_upload_btn").text("上傳標題");	
							content.find(".img_meta").text("請上傳 200x360 pixel 解析度大於 72dpi 透明背景之  png 檔");
							content.find(".file_upload_btn, .img_meta").hide();	
						}else if(files == 1){
							pendding.append("<div class='file_name'>標題: " + fileName +"</div>");
							content.find(".file_upload_btn, .img_meta").hide();
						}
						
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
			        		
			          		WorksData.addWork(responseJSON.data);
			          		Work.addWork(responseJSON.data);
			          		
			          		
							blockwheel = false;
							
							box.modal('hide');
							
			          		TJEditor.addWorkInfoByPid(responseJSON.data.p_id);	
			          		          		
			          		
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
							blockwheel = false;
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
					}
					else{
						var val1 = content.find("input.name").val();
					}
								
					if(qquploader._handler._files.length == 1 && val1){
						qquploader.setParams({
			 				name: val1
			 				, year: year_val.text()
			 			});
			 			
						box.find(".modal-footer .btn-success").show();		
					}
					else{
						box.find(".modal-footer .btn-success").hide();
					}
				};
		    	
		    	box.find(".modal-footer .btn-success").hide();
		    	box.width(450).css("marginLeft", "-225px");
			}
			
			else if(btn_self.is(".add_image")){
				addWorkImageByPid(btn_self.attr("p_id"));
			}
		});
		
	};
	
	var addWorkInfoByPid = function(pid){
		
		
		var action = "cms/add_work_info.php";
		
		var markup = '\
		<div class="tj_editor_container">\
			<div class="file_upload_btn btn btn-success">\
				<i class="icon-upload icon-white"></i> 上傳標題圖片\
			</div>\
			<div class="img_meta" style="margin: 0; position:relative; float: left;"> </div>\
		</div>';

		var content = $(markup);
		content.find(".img_meta").text("請上傳 200x360 pixel 解析度大於 72dpi 透明背景之  png 檔");
		
		
		var box = bootbox.dialog( content, [
			
		], {
			header: "上傳標題圖片"
		});
		
		var qquploader = new qq.FileUploaderBasic({
			button: content.find(".file_upload_btn")[0]
			, params: {pid: pid}
			, action: action
			, debug: true
			, allowedExtensions: ["png"]
			, sizeLimit: 2000 * 1024 // 1mb 
			, onSubmit: function(id, fileName) {
				content.find(".file_upload_btn").hide();
 			}
	 		, onUpload: function(id, fileName) {
	        	// box.modal('hide');
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
	      		blockwheel = false;
	        	if (responseJSON.success) {
	        		
	        		box.modal('hide');
	          		
	          		WorksData.addWorksInfo(responseJSON.data);
	          		TJEditor.addWorkImageByPid(responseJSON.data.p_id);	
	          		
	          		
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
	};
	
	var addWorkImageByPid = function(pid){
		blockwheel = true;
				
		var action = "cms/add_work_image.php";
		
		var markup = '\
		<div class="tj_editor_container">\
			<div class="pendding">\
			</div>\
			<div class="file_upload_btn btn btn-success">\
				<i class="icon-upload icon-white"></i> 上傳專案圖片\
			</div>\
			<div class="img_meta" style="margin: 0; position:relative; float: left;"> </div>\
		</div>';
		
		
		
		var content = $(markup);
		var pendding = content.find(".pendding");
		content.find(".img_meta").text("請上傳解析度大於 72dpi 之 jpg 檔,可多選檔案");
		
		var qquploader = new qq.FileUploaderBasic({
			button: content.find(".file_upload_btn")[0]
			, action: action
			, debug: true
			, allowedExtensions: ["jpg"]
			, sizeLimit: 2000 * 1024 // 2mb 
			, params: {pid: pid}
			, onSubmit: function(id, fileName) {
				var files = pendding.find(".file_name").length;
				pendding.show().append("<div class='file_name'>" + fileName +"</div>");
 			}
 			, autoUpload: false
	 		, onUpload: function(id, fileName) {
	 			content.find("input").attr("disabled", "true");			
	        	content.find(".file_upload_btn").hide();
	        	
	        	// box.modal('hide');				box.modal('hide');
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
	      		blockwheel = false;
	        	if (responseJSON.success) {
	          		WorksData.addImage(responseJSON.data);
	          		
	          		if($("#project-" + responseJSON.data.p_id).is(".active")){
	          			var thumb = $('<div class="thumb"><img src="uploads/thumb_' + responseJSON.data.image + '"><div class="border"></div></div>');
	          			$("#project-" + responseJSON.data.p_id).find(".slider_thumb").append(thumb);
	          			thumb.find("img").resizeToParent();
	          		}
	          		
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
					blockwheel = false;
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
			header: "上傳作品圖片"
		});
		
    	box.width(450).css("marginLeft", "-225px");
	};
	
	return {
		init: init
		, addWorkInfoByPid: addWorkInfoByPid
		, addWorkImageByPid: addWorkImageByPid
	};
}();

$(function(){
	TJEditor.init();
});
