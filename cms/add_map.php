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
		
		$p_id = $_GET["pid"];
				
		$qqfile = new qqUploadedFileXhr();
		$file = $qqfile->getName();
		

		$ext = pathinfo($file, PATHINFO_EXTENSION);		
		$new_file = uniqid("tj_").".".$ext;
		
		$qqfile->save("../uploads/".$new_file);
		
		imageinterlace("../uploads/".$new_file, true);
		
		$thumb = "../uploads/thumb_".$new_file;
		
		if($qqfile->save($thumb)){
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
		
		$query = "DELETE FROM tj_media WHERE m_type='map' AND p_id=$p_id";
		$mysqli->query($query);
		
		$query = "INSERT INTO tj_media (m_type, url, category, p_id) VALUES( 'map', '$new_file', 'presale', $p_id)";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$work = array( "m_id"=> $mysqli->insert_id, "image"=> "uploads/".$new_file, "id"=>$p_id);
			$json = array("success" => TRUE, "msg" => "新增成功", "data" => $work);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
	}
	
?>