<?php
	require_once './db_config.inc.php';
	$redirect = "http://localhost/taijha2/";
	$posts = $_POST;
	
	foreach ($posts as $key => $value) {
		$posts[$key] = trim($value);
	}
	
	// var_dump($posts);
	
	function errorLogin(){
		header('Content-Type: application/json');
		$json = array("error" => TRUE, "msg" => "帳號或密碼錯誤");
		echo json_encode($json);
	}
	
	$pass = md5($posts["pwd"]);
	$name = $posts["acct"];
	
	if($pass == null || $name == null ){
		errorLogin();
		exit();
	}
	
	$query = "SELECT name FROM tj_account WHERE pass='$pass' AND name='$name'";
	
	// echo $query;
	// echo $result->num_rows;
	
	if ($result->num_rows == 1) {
		
		$userInfo = $result->fetch_object();
		
		// echo $userInfo->name;	
		
		if ($userInfo->name == $name) {
			
			$lifeTime = 1 * 3600;
			
			$sessionName = session_name();
			$sessionID = $_GET[$sessionName];
			
			session_id($sessionID);			
			session_set_cookie_params($lifeTime);
			
			session_start();
			
			$_SESSION["admin"] = true;
			
			header('Content-Type: application/json');
			
			// $uri = parse_url("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
			// $reurl = "//".$uri["host"].$uri["path"];
			
			$json = array("success" => TRUE, "msg" => "登入成功", "redirect" => $redirect);
			echo json_encode($json); 
		}
		else {
			errorLogin();
		}
		
	}
	else{
		errorLogin();
	}
	
?>