<?php
	require_once './db_config.inc.php';
	require_once './com/fileuploader/php.php';
	require_once './simpleImage.php';
	require_once("./com/FirePHPCore/FirePHP.class.php");
	
	$firephp = FirePHP::getInstance(true);
	
	session_start();
	
	header('Content-Type: application/json');
	
		
	if($_SESSION["admin"] !== TRUE){
		$json = array("error" => TRUE, "msg" => "未登入管理帳號");
		echo json_encode($json);
	}
	else{
		
		$m_id = $_GET["m_id"];
		
		$qqfile = new qqUploadedFileXhr();
		$file = $qqfile->getName();
		
		
		// chdir("../uploads");
	
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
			
			if($w > $h){
				$img->resizeToWidth(320);	
			}
			else{
				$img->resizeToHeight(320);
			}	
		}
		
		
		$query = "UPDATE tj_media SET url='$new_file' WHERE m_id=$m_id";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$json = array("success" => TRUE, "msg" => "更新成功", "filename" => $new_file);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "更新失敗");
			echo json_encode($json);
		}	
		
	}
	
?>