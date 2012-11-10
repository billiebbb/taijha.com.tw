$(function(){
	$("#login_btn").click(function() {
		
		var data = {
			acct: $("input#acct").val()
			, pwd: $("input#pwd").val()
		};
		
		$.ajax({
			url: "login.php"
			, type: "POST"
			, data: data
			, cache: false
			, success: function(data) {
				bootbox.dialog( data.msg, [
					{
						'label': ((data.success)? '前往首頁進行資料管理' : '確定')
						, 'class': 'btn-success'
						, 'callback': function(){
							if(data["success"]){
								if(data['redirect']) window.location.href = data['redirect'];
							}
						}
					}					
				]);
			}
		});
	});
});
