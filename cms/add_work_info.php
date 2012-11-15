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
		
		$p_id = $_GET["pid"];
				
		$qqfile = new qqUploadedFileXhr();
		$file = $qqfile->getName();
		

		$ext = pathinfo($file, PATHINFO_EXTENSION);		
		$new_file = uniqid("tj_").".".$ext;
		
		$qqfile->save("../uploads/".$new_file);
		
		imageinterlace("../uploads/".$new_file, true);
		
		$query = "INSERT INTO tj_media (m_type, url, category, p_id) VALUES( 'info', '$new_file', 'work_project', $p_id)";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$work = array("name"=>$name, "m_id"=> $mysqli->insert_id, "subtitle_id"=> $mysqli->insert_id, "image"=> $new_file, "p_id"=>$p_id);
			$json = array("success" => TRUE, "msg" => "新增成功", "data" => $work);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
	}
	
?>