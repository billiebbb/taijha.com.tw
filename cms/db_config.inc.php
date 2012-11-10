<?php
	$db_info['server'] = "localhost";
	$db_info['user'] = "root";
	$db_info['pass'] = "50505050";
	$db_info['name'] = "taijia";
	
	// $conn = mysql_connect($db_info['server'], $db_info['user'], $db_info['pass']) or trigger_error("Could not connect: " . mysql_error());
	// mysql_select_db($db_info['name'], $conn) or trigger_error("Could not connect: " . mysql_error());	
	$mysqli = new mysqli($db_info['server'], $db_info['user'], $db_info['pass'], $db_info['name']);
	
	if (mysqli_connect_errno()) {
	    printf("Connect failed: %s\n", mysqli_connect_error());
	    exit();
	}
	
	$query = "SET CHARACTER SET utf8";
	$mysqli->query( $query );
	
	$query = "SET NAMES utf8";
	$mysqli->query( $query );
?>