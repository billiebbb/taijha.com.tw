<?php
	
	require_once './db_config.inc.php';
	require_once './com/fileuploader/php.php';
	
	session_start();
	
	header('Content-Type: application/json');
	
	// chdir("../uploads");
	$base = 27;
	for($i=0; $i<7; $i++){
		$dir = '../uploads/0'.$i;	
		$id = $base+$i;
		
		echo "\n=================================\nopen: $dir\n";
		
		if ($handle = opendir($dir)) {
		    echo "Directory handle: $handle\n";
		    echo "Entries:\n";
			
		    /* This is the correct way to loop over the directory. */
		    // $query = "INSERT INTO tj_media (p_id, url, m_type, category) VALUES";
		    while (false !== ($entry = readdir($handle))) {
		    	// echo preg_match('/(\.jpg)|(\.png)/', $entry)."\n";				
		    	if (preg_match('/(\.jpg)/', $entry)){
		    		imageinterlace("../uploads/0$i/$entry".$new_file, true);
		    		// echo "$entry\n";
					// $query .= "($id,'0$i/$entry', 'image', 'work_project'),";
		    	}
		    }
			
			// $query = substr($query, 0, strlen($query)-1);
			// $mysqli->query($query);	
			// echo $query."\n\n";			// echo getcwd();
		    // /* This is the WRONG way to loop over the directory. */
		    // while ($entry = readdir($handle)) {
		        // echo "$entry\n";
		    // }	
		    closedir($handle);
		}
	}
?>