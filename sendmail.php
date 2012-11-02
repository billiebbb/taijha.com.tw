<?php
	require("./phpmailer/class.phpmailer.php");

	$mail = new PHPMailer();
	
	// $mail->IsSMTP();  // telling the class to use SMTP
	// $mail->Host     = "smtp.example.com"; // SMTP server
	$cemail = $_POST["cemail"];
	$csubject = $_POST["csubject"];
	$cname = $_POST["cname"];
	$ccomment = $_POST["ccomment"];
	$ctype = $_POST["ctype"];
	
	$mail->FromName = $cname;
	$mail->From     = $cemail;
	$mail->AddAddress("taijia.tj@msa.hinet.net");
	
	$mail->Subject  = $ctype.": ". $csubject;
	$mail->Body     = $ccomment;
	$mail->WordWrap = 50;
	
	if(!$mail->Send()) {
	  echo 'Message was not sent.';
	  echo 'Mailer error: ' . $mail->ErrorInfo;
	} else {
	  echo 'Message has been sent.';
	}
?>