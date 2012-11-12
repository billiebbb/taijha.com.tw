<?php
	require_once './db_config.inc.php';
	require_once './com/fileuploader/php.php';
	
	session_start();
	
	header('Content-Type: application/json');
	
		
	if($_SESSION["admin"] !== TRUE){		
		$json = array("error" => TRUE, "msg" => "未登入管理帳號");
		echo json_encode($json);
	}
	else{
		
		$p_id = $_POST["p_id"];
		
		$query = "DELETE FROM tj_post WHERE p_id=$p_id";
		$mysqli->query($query);
		
		$query = "DELETE FROM tj_media WHERE p_id=$p_id";
		$mysqli->query($query);
		
		
		$json = array("success" => TRUE, "msg" => "刪除成功");
		echo json_encode($json);
			
		
	}
	
?>