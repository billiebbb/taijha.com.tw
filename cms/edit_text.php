<?php
	require_once './db_config.inc.php';
	
	session_start();
	
	header('Content-Type: application/json');
	
	
	if($_SESSION["admin"] !== TRUE){		
		$json = array("error" => TRUE, "msg" => "未登入管理帳號");
		echo json_encode($json); 
	}
	else{
		$content = $_POST["content"];
		$p_id = $_POST["p_id"];
		
		
		$query = "UPDATE tj_post SET content='$content' WHERE p_id=$p_id";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$json = array("success" => TRUE, "msg" => "更新完成");
			echo json_encode($json);
		}else{
			$json = array("error" => TRUE, "msg" => "更新失敗，請重新再試或洽詢系統管理人員");
			echo json_encode($json);
		}
	}
?>