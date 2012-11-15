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
		
		$name = $_GET["name"];
		$year = $_GET["year"];
		
		// $qquploader = new qqFileUploader();
		// $json = $qquploader->getName();
		// echo json_encode($json);
		
		$query = "INSERT INTO tj_post (title, content, update_at, category) VALUES ('$name', '$year', NOW(), 'work_project')";
		$mysqli->query($query);
		
		$p_id = $mysqli->insert_id;
		
		$qqfile = new qqUploadedFileXhr();
		$file = $qqfile->getName();
		
		$ext = pathinfo($file, PATHINFO_EXTENSION);		
		$new_file = uniqid("tj_").".".$ext;
		
		$qqfile->save("../uploads/".$new_file);
		
		imageinterlace("../uploads/".$new_file, true);
		
		$query = "INSERT INTO tj_media (m_type, url, category, p_id) VALUES( 'logo', '$new_file', 'work_project', $p_id)";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$work = array("name"=>$name, "logo_id"=> $mysqli->insert_id, "m_id"=> $mysqli->insert_id, "image"=> $new_file, "p_id"=>$p_id, "year"=>$year
							, "logo"=> "uploads/".$new_file, "id"=>$p_id);
			$json = array("success" => TRUE, "msg" => "新增成功", "data" => $work);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
	}
	
?>