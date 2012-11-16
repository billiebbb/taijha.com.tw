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
		
		$title = $_POST["title"];
		$name = $_POST["name"];
		$project = $_POST["project"];
		$content = $_POST["content"];
		
		$query = "SELECT title, sort FROM tj_post WHERE category='story_project' AND title='$title'";
		$result = $mysqli->query($query);
		
		if(!$result->num_rows){
			$query = "SELECT MAX(sort) AS sort FROM tj_post WHERE category='story_project'";
			$result = $mysqli->query($query);
			
			$row = $result->fetch_assoc();
			
			$query = "INSERT INTO tj_post (title, sort, category, update_at) VALUES( '$title', " . ($row['sort']+1) . ", 'story_project', NOW())";
			$mysqli->query($query);
		}
		
		
		$query = "INSERT INTO tj_comment (title, name, project, content) VALUES( '$title', '$name', '$project', '$content')";
		$mysqli->query($query);
		
		if($mysqli->affected_rows == 1){
			$work = array("c_id"=>$mysqli->insert_id);
			$json = array("success" => TRUE, "msg" => "新增成功", "data" => $work);
			echo json_encode($json);
		}
		else{
			$json = array("error" => TRUE, "msg" => "新增失敗");
			echo json_encode($json);
		}	
	}
	
?>