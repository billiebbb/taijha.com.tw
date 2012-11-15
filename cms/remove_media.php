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
		
		$m_id = $_POST["m_id"];
		
		
		$query = "SELECT url FROM tj_media WHERE m_id=$m_id";
		$result = $mysqli->query($query);
		
		
		while($row = $result->fetch_assoc()){
			unlink("../uploads/".$row["url"]);
			unlink("../uploads/thumb_".$row["url"]);
		}
		
		$query = "DELETE FROM tj_media WHERE m_id=$m_id";
		$mysqli->query($query);		
		
		$json = array("success" => TRUE, "msg" => "刪除成功");
		echo json_encode($json);
	}
	
?>