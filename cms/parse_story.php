<?php
	require_once("./com/FirePHPCore/FirePHP.class.php");
	// $firephp = FirePHP::getInstance(true);	require_once './db_config.inc.php';
	
	
	$json = json_decode($_POST["json"]);
	$query = "INSERT INTO tj_comment (title, project, name, content) VALUES";
	
	foreach ($json as $key => $value) {
		$query .= "( '".$value->title."', '".$value->project."', '".$value->name."', '".$value->content."'),";		
	}
				
	$query = substr($query, 0, strlen($query)-1);
	$mysqli->query($query);
	
	echo json_encode($json);
	
?>