<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta charset="utf-8" />
		
		<title>泰嘉開發管理員登入</title>
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
	    <meta name="author" content="Tom Shih,tom@riversense.tw" >
	    
	    <link href="com/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	    <link href="com/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	    <link href="css/cms.css" rel="stylesheet">
		
		
		<script src="com/jquery-1.8.2.min.js" type="text/javascript"></script>
		<script src="com/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
		<script src="com/bootbox.min.js" type="text/javascript"></script>
		<script src="js/login.js" type="text/javascript"></script>
	</head>
	<body>
		<div class="login_block">
			<div class="row-fluid logo">
				
			</div>
			<div class="row-fluid" style="text-align: center; width: 240px; margin-bottom: 20px; font-size: 16px; font-weight: bold;">
				管理系統登入
			</div>
			<form class="login_form" name="frmLogin" method="post" action="login.php">
				<div class="row-fluid">
					<span>帳號</span>
					<input type="text" class="input_field" name="acct" id="acct" maxlength="20">
				</div>
				<div class="row-fluid">
					<span>密碼</span>
					<input type="password" class="input_field" name="pwd" id="pwd" maxlength="20">
				</div>
				
				<div class="row-fluid">
					<div class="btn btn-success" id="login_btn">登入</div>
				</div>	
			
			</form>
		</div>
	</body>
</html>