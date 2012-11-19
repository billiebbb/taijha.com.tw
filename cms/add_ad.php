<?php
	require_once './db_config.inc.php';
	require_once './com/fileuploader/php.php';
	require_once './simpleImage.php';
	
	session_start();
	
	header('Content-Type: application/json');
	
		
	if($_SESSION["admin"] !== TRUE){		
		$json = array("error" => TRUE, "msg" => "未登入管理帳號");
		echo json_encode($json);
	}
	else{
		
		$name = $_GET["name"];
		
		
		$qqfile = new qqUploadedFileXhr();
		$file = $qqfile->getName();
		
		$ext = pathinfo($file, PATHINFO_EXTENSION);		
		$new_file = uniqid("tj_").".".$ext;
		
		$qqfile->save("../uploads/".$new_file);
		
		imageinterlace("../uploads/".$new_file, true);
		
		$thumb = "../uploads/thumb_".$new_file;
		
		if($qqfile->save($thumb)){
			
			// $firephp->log("thumb has been saved.");

			
			$img = new SimpleImage();
			$img->load($thumb);
			$w = $img->getWidth();
			$h = $img->getHeight();
			
			
			$img->resizeToWidth(420);	
				
		}
		
		$query = "INSERT INTO tj_post (title, content, update_at, category) VALUES ('$name', '$new_file', NOW(), 'ad')";
		$mysqli->query($query);
		
		$p_id = $mysqli->insert_id;
		
		if($mysqli->affected_rows == 1){
			$recent = array("name"=>$name, "p_id"=> $mysqli->insert_id, "image"=> "uploads/".$new_file, "thumb"=>"uploads/thumb_".$new_file);
			$json = array("success" => TRUE, "msg" => "更新成功", "data" => $recent);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
		
	}
	
?>