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
		
		$title = $_GET["title"];
		$content = $_GET["content"];
		
		$query = "INSERT INTO tj_post (title, content, update_at, category) VALUES ('$title', '$content', NOW(), 'presale')";
		$mysqli->query($query);
		
		$p_id = $mysqli->insert_id;
		
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
		
		$query = "INSERT INTO tj_media (m_type, url, category, p_id) VALUES( 'image', '$new_file', 'presale', $p_id)";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$presale = array("title"=>$title, "img_id"=> $mysqli->insert_id, "thumbs"=>array("uploads/thumb_".$new_file)
			, "images"=> array("uploads/".$new_file), "id"=>$p_id, "content"=>$content);
			$json = array("success" => TRUE, "msg" => "更新成功", "data" => $presale);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
		
	}
	
?>