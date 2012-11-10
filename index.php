<?php
	require_once("db_config.inc.php");
	
	session_start();

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		
		<title>泰嘉開發</title>
		
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	    <meta name="author" content="Tom Shih,tom@riversense.tw" >
	    <meta name="description" content="泰嘉建設開發" >
	    <meta name="key" content="泰嘉開發,泰嘉,泰嘉建設,TAIJIA,TAI-JIA,taijia,tai-jia,建設開發,建築設計,水建築,建案開發,預推建案,統發不動產,統發建設,悅讀系建築,高雄,水世紀,水工坊,悅讀工坊,愛上悅讀,悅讀知音,悅讀水世紀,水山硯,水丰景,高雄建案,高雄開發,高雄建設,高雄建築,關於泰嘉,熱銷新案,歷年作品,成家故事,廣告欣賞,泰嘉紀實錄影音檔,沿革,態度" >
	    
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    
	    <link href="com/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	    
	    <link href="com/setSlider/slider.css" rel="stylesheet">
	    <link href="com/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	    
	    <link href="com/redactor/redactor.css" rel="stylesheet">
	    
		<link href="css/taijha.css" rel="stylesheet">
		<link href="js/lightbox/lightbox.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Rochester' rel='stylesheet' type='text/css'>
		<link href="com/fileuploader/fileuploader.css" rel="stylesheet">
		
		
		<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
		<script type="text/javascript"
	      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2nJnFfrLi1fzjNx3vQdSHp5HQWv1wPjw&sensor=true">
	    </script>
		
		<script src="com/jquery-1.8.2.min.js" type="text/javascript"></script>
<!-- 		<script src="com/jquery-ui-1.8.24/js/jquery-ui-1.8.24.custom.min.js" type="text/javascript"></script> -->
		<script src="com/jquery-ui-1.9.1.custom/js/jquery-ui-1.9.1.custom.min.js" type="text/javascript"></script>
		<script src="com/jquery.text-effects.js" type="text/javascript"></script>
		<script src="com/jquery.imagesloaded.min.js" type="text/javascript"></script>
		
		<script src="com/jquery.backgroundPosition.js" type="text/javascript"></script>
		<script src="com/parse-css-number.js" type="text/javascript"></script>
		<script src="com/jquery.tmpl.min.js" type="text/javascript"></script>
		<script src="com/json2.js" type="text/javascript"></script>
		<script src="com/jquery.masonry.js" type="text/javascript"></script>
		<script src="com/resize-to-parent.js" type="text/javascript"></script>
		<script src="com/jquery.zoom-min.js" type="text/javascript"></script>
		<script src="com/jquery.scrollTo-1.4.3.1-min.js" type="text/javascript"></script>
		<script src="com/jquery.localscroll-1.2.7-min.js" type="text/javascript"></script>
		<script src="com/jquery.address-1.4.js" type="text/javascript"></script>
		<script src="com/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
		<script src="com/jquery.viewport.mini.js" type="text/javascript"></script>
		<script src="com/jquery.mousewheel.js" type="text/javascript"></script>
		<script src="com/jquery.maxzindex.js" type="text/javascript"></script>
		<script src="com/jquery.watermark.js" type="text/javascript"></script>
		<script src="com/bootstrap-tooltip.js" type="text/javascript"></script>
		<script src="com/setSlider/slider.js" type="text/javascript"></script>
		<script src="com/jquery.coverscroll.min.js" type="text/javascript"></script>
		<script src="com/jquery.filter_input.js" type="text/javascript"></script>
		
		
		<script src="com/check-email.js"></script>
		
		<script src="com/redactor/redactor.js"></script>
		<script src="com/redactor/langs/zh_tw.js"></script>
		
		<script src="com/fileuploader/fileuploader.js"></script>
		
		<script src="com/jquery.ui.touch-punch/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
		
		
		<script src="com/jquery.parallax/jquery.parallax.js" type="text/javascript"></script>
		<script src="com/jquery.parallax/jquery.event.frame.js" type="text/javascript"></script>
		<script src="com/underscore-min.js" type="text/javascript"></script>
		<script src="com/is_mobile.js" type="text/javascript"></script>
		<script src="com/jquery.hasevent.js" type="text/javascript"></script>
		
		<script src='com/modal-message.js' type="text/javascript"></script>
		<script src='com/bootbox.min.js' type="text/javascript"></script>
		
		<script src='js/lightbox/lightbox.js' type="text/javascript"></script>
		
		<!-- load all data -->
		<script src='js/works_data.js' type="text/javascript"></script>
<!-- 		<script src='js/recent_data.js' type="text/javascript"></script> -->
		<script src='js/story_data.js' type="text/javascript"></script>
		<script src='js/presale_data.js' type="text/javascript"></script>
		<script src='js/ad_data.js' type="text/javascript"></script>
		
		
		
		<script src="js/stage.js" type="text/javascript"></script>
		<script src="js/menu.js" type="text/javascript"></script>
		
		
		<script src="js/year_widget.js" type="text/javascript"></script>
		<script src="js/photowall.js" type="text/javascript"></script>
		<script src="js/home.js" type="text/javascript"></script>
		
		<script src="js/about.js" type="text/javascript"></script>
		<script src="js/recent.js" type="text/javascript"></script>
		<script src="js/works.js" type="text/javascript"></script>
		<script src="js/story.js" type="text/javascript"></script>
		<script src='js/presale.js' type="text/javascript"></script>
		<script src='js/ad.js' type="text/javascript"></script>
		<script src='js/contact.js' type="text/javascript"></script>
		
		<?php if($_SESSION["admin"]){ ?>
			<script src='js/tj_editor.js' type="text/javascript"></script>
		<?php } ?>
		
		<!-- recent data -->
		<script type="text/javascript">
			<?php
				$query = "SELECT A.p_id AS p_id, B.m_id AS m_id, A.title AS name, A.content AS link, B.url AS image";
				$query .= " FROM tj_post AS A, tj_media AS B";
				$query .= " WHERE A.category='recent_project' AND A.p_id=B.p_id ORDER BY A.p_id ASC";
				
				$result = $mysqli->query($query);
				$json = array();
				
				while ($row = $result->fetch_assoc()) {
			    	$arr = array("p_id"=>$row["p_id"], "name"=>$row["name"], "link"=>$row["link"], "image"=>"uploads/".$row["image"]);
					array_push($json, $arr);
			    }
			?>
			
			var RecentData = <?php echo json_encode($json); ?>;
		</script>
		
		
		<script type="text/javascript">
		
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-36121338-1']);
		  _gaq.push(['_setDomainName', 'taijia.com.tw']);
		  _gaq.push(['_setAllowLinker', true]);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>
		
		<?php if($_SESSION["admin"]){ ?>
		<script type="text/javascript">
			var is_admin = true;	
		</script>
		<?php } ?>
		
		
	</head>
	<body>
		<div id="modal_bg"></div>
		
		<div id="auto_play">
			<div id="play_btn">
				<div style="float: left; color: #fff; margin-right: 10px; height: 16px; line-height: 16px; font-weight: bold; font-size: 14px;">自動播放</div>
				<div class="icon-play icon-white"></div>
			</div>
			<div id="pause_btn">
				<div style="float: left; color: #fff; margin-right: 10px; height: 16px; line-height: 16px; font-weight: bold; font-size: 14px;">停止播放</div>
				<div class="icon-pause icon-white"></div>
			</div>
		</div>
		
		
		
		<div id="wall_bg"></div>
		<div id="wave_bg"></div>
		
		<div id="years_widget">
			<div class="number"></div>
			<div class="number"></div>
			<div class="number"></div>
			<div class="number"></div>
		</div>
		
		
		
		<div id="page_mark"></div>
		<!-- <div class="dot_pattern v1"></div>
		<div class="dot_pattern v2"></div> -->
		
		<div id="main">
			<?php if($_SESSION["admin"]){ ?>
			<a href="cms/logout.php"><div id="logout_btn" class="tj_btn red">
				<div class="icon-circle-arrow-up icon-white"></div>
				登出管理帳號
			</div></a>
			<?php } ?>
			<article>
			<!-- home content start -->
				<section id="home" class="active">
					<div id="home_title" class="content_title">
						
						<?php
							$query = "SELECT content,p_id FROM tj_post WHERE category='home'";
							$result = $mysqli->query($query);
							
							$obj = $result->fetch_object();
							echo $obj->content;
						?>
						
						<?php if($_SESSION["admin"]){ ?>
							<div class='tj_btn edit text' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>">
								<div class="icon-pencil icon-white"></div>編輯文字
							</div>
						<?php } ?>
					</div>
					<ul id="photo_wall" class="photo_wall">
					</ul>
				</section>
				
				<!-- home content end -->
				
				
				<!-- about content start -->
				<!-- <section id="about"> -->
					<section id="press">
						
						
						<div class="v_line" ></div>
						
						<div class="content_title span10" style="position: absolute;
					    top: -200px;
					    width: 400px;" >
							<?php
								$query = "SELECT content FROM tj_post WHERE category='press'";
								$result = $mysqli->query($query);
								
								
								$obj = $result->fetch_object();
								echo $obj->content;
							?>
							
							<?php if($_SESSION["admin"]){ ?>
								<div class='tj_btn edit text' key='press' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>"><div class="icon-pencil icon-white"></div>編輯文字</div>
							<?php } ?>
						</div>
						
						<div style="
						left: -370px;
					    position: absolute;
					    top: 50px;
						">
							<?php
								$query = "SELECT m_id, url FROM tj_media WHERE category='press' AND m_type='title'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
							?>
							<img id="press_tit" src='uploads/<?php echo $obj->url; ?>' />
							
							<?php if($_SESSION["admin"]){ ?>
								<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯標題圖片</div>
							<?php } ?>
							
						</div>
						
						<div style="
						left: -370px;
					    position: absolute;
					    top: -200px;
					    ">
					    	<?php
								$query = "SELECT m_id, url FROM tj_media WHERE category='press' AND m_type='image'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
							?>
							<img src='uploads/<?php echo $obj->url; ?>' />
							
						    <?php if($_SESSION["admin"]){ ?>
						    	<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯圖片</div>
					    	<?php } ?>
					    </div>
					</section>
					
					<section id="attitude"  style="margin-top: 150px;">
						
						<div class="content_title" style="
						left: -360px;
					    position: absolute;
					    top: -200px;
					    width: 430px" >
							<?php
								$query = "SELECT content FROM tj_post WHERE category='attitude'";
								$result = $mysqli->query($query);
								
								
								$obj = $result->fetch_object();
								echo $obj->content;
							?>
							
							<?php if($_SESSION["admin"]){ ?>
								<div class='tj_btn edit text' key='attitude' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>"><div class="icon-pencil icon-white"></div>編輯文字</div>
							<?php } ?>
						</div>
						
						<div style="
						left: -360px;
					    position: absolute;
					    top: -370px;">
					    	<?php
								$query = "SELECT m_id, url FROM tj_media WHERE category='attitude' AND m_type='title'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
							?>
							<img src='uploads/<?php echo $obj->url; ?>' />
					    	
					    	<?php if($_SESSION["admin"]){ ?>
					    		<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯標題圖片</div>
				    		<?php } ?>
					    </div>
							

						<div class="v_line" style='left: 100px;'></div>
						
						<div style="
						left: 120px;
					    position: absolute;
					    top: -380px;">
							<?php
								$query = "SELECT m_id, url FROM tj_media WHERE category='attitude' AND m_type='image'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
							?>
							<img src='uploads/<?php echo $obj->url; ?>' />
							<?php if($_SESSION["admin"]){ ?>
								<div class='tj_btn edit image' action="cms/edit_media.php?m_type=image&p_id=<?php echo $obj->p_id; ?>"><div class="icon-picture icon-white"></div>編輯圖片</div>
							<?php } ?>
						</div>
						
					</section>
					
					<section id="documentary" >
						
						<div id='documentary_movie'
						 style="box-shadow: 0 0 10px 10px #ccc;
						  	left: -325px;
						  	top: -185px;
						   	position: absolute; 
						    padding: 10px;
							background-color: #fff;">
							<?php
								$query = "SELECT content FROM tj_post WHERE category='documentary'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
								
								if($obj->content != NULL){
									echo $obj->content;
								}else{
							?>
								<div class="no_mov">建構中</div>
							<?php
								}
							?>
							
							<?php if($_SESSION["admin"]){ ?>
								<div class='tj_btn edit movie' key='documentary' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>">編輯影片</div>
							<?php } ?>
						</div>
						
					</section>
				<!-- </section> -->
		<!-- 		end of about -->
				<section id="recent" >
					
					<div style="
					left: -320px;
				    position: absolute;
				    top: -270px;">
				    	<?php
							$query = "SELECT m_id, url FROM tj_media WHERE category='recent' AND m_type='title'";
							$result = $mysqli->query($query);
							$obj = $result->fetch_object();
						?>
						<img src='uploads/<?php echo $obj->url; ?>' />
						
						<?php if($_SESSION["admin"]){ ?>
					    	<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯標題圖片</div>
					    <?php } ?>
				    </div>
				    
				    <div id='recent_line' class="h_line" style='
				    top: -160px;
				    '></div>
					
					<div id="recent_main">
						
						<!-- 							start of recent repeat content -->
						<div id="recent_content" ></div>
						<!-- 							end of recent content repeat -->		
						
					</div>
					
					
					
				</section>
				<!--end of recent -->
				
				<!-- start of works -->
				<section id="work">
						
					<div class="content_title" style="
					left: -320px;
				    position: absolute;
				    top: -100px;
				    width: 220px;
					">
						
						<?php
							$query = "SELECT content FROM tj_post WHERE category='work'";
							$result = $mysqli->query($query);
							
							
							$obj = $result->fetch_object();
							echo $obj->content;
						?>
						<?php if($_SESSION["admin"]){ ?>
							<div class='tj_btn edit text' key='work' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>"><div class="icon-pencil icon-white"></div>編輯文字</div>
						<?php } ?>
					</div>
					
					<div style="
						left: -390px;
					    position: absolute;
					    top: -220px;">
					    
			    			<?php
								$query = "SELECT m_id, url FROM tj_media WHERE category='work' AND m_type='title'";
								$result = $mysqli->query($query);
								$obj = $result->fetch_object();
							?>
							<img src='uploads/<?php echo $obj->url; ?>' />
			    		<?php if($_SESSION["admin"]){ ?>
				    		<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯標題圖片</div>
			    		<?php } ?>
					</div>
					
					<div class="v_line" style='
					    left: -75px;
				    '></div>
				    
				    <div id="work_logo_container">
				    	<div id="logo_list"></div>
				    </div>
				    
				    <div id="logo_pager">
						<div class="prev_btn active" style="margin-right: 2px; float: left;"></div>
						<div class="next_btn" style="margin-right: 2px; float: left;"></div>
					</div>
				    
				</section>
					
				<div id="work_content">
					
				</div>
				
				<!-- end of works -->
				<!-- start of story -->
				<section id="story">
					<div class="title_img v_line" style='
				    left: -390px;
				    '></div>
				    
				    <div class="title_img" style="
						left: -360px;
					    position: absolute;
					    top: -240px;
					    ">
					    
				    	<?php
							$query = "SELECT m_id, url FROM tj_media WHERE category='story' AND m_type='title'";
							$result = $mysqli->query($query);
							$obj = $result->fetch_object();
						?>
						<img src='uploads/<?php echo $obj->url; ?>' />
			    		<?php if($_SESSION["admin"]){ ?>
				    		<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯標題圖片</div>
			    		<?php } ?>	
				    </div>
					
				    <div class="title_img" style="
					left: -360px;
				    position: absolute;
				    top: -20px;
				    ">
				    	<?php
							$query = "SELECT m_id, url FROM tj_media WHERE category='story' AND m_type='image'";
							$result = $mysqli->query($query);
							$obj = $result->fetch_object();
						?>
						<img src='uploads/<?php echo $obj->url; ?>' />
			    		<?php if($_SESSION["admin"]){ ?>
				    		<div class='tj_btn edit image' action="cms/edit_media.php?m_id=<?php echo $obj->m_id; ?>"><div class="icon-picture icon-white"></div>編輯圖片</div>
			    		<?php } ?>	
				    </div>
				    			    
					
					<div class="content_title" style="
					left: -360px;
				    position: absolute;
				    top: -120px;
				    width: 340px;
					">
						
						<?php
							$query = "SELECT content FROM tj_post WHERE category='story'";
							$result = $mysqli->query($query);
							
							$obj = $result->fetch_object();
							echo $obj->content;
						?>
						
						<?php if($_SESSION["admin"]){ ?>
							<div class='tj_btn edit text' action="cms/edit_text.php" p_id="<?php echo $obj->p_id; ?>"><div class="icon-pencil icon-white"></div>編輯文字</div>
						<?php } ?>
					</div>
					
					
					<div id="stories" style="position: absolute; top: 1px;">
						
						<div id="back_story" class="tj_btn" style="
						left: -150px;
					    position: absolute;
					    height: 36px;
					    line-height: 36px;
					    top: -200px;">
							<div class="icon-arrow-left icon-white"></div> 
							<div style="float: left;">返回成家故事</div>
						</div>
						
						<div class="story_header" style="
						left: 100px;
					    position: absolute;
					    top: -200px;
					    width: 500px;
						"></div>
						
						<div id="story_content">
							
						</div>
						
						<div class="v_line" style='
					    left: 70px;
					    '></div>
						    
					    <div class="v_line" style='
					    left: 600px;
						'></div>
				    </div>
					
					<div id="story_main" style="
					left: 0;
				    position: absolute;
				    top: -150px;
				    width: 400px;
				    ">
				    	<div class="pagination pagination-right" style="position: relative; margin-top: 0;">
				            <ul id="story_pager">
				                <li class="prev"><a>«</a></li>
				                
				                <li class="next"><a>»</a></li>
				            </ul>
			            </div>
			            
						<table class="table table-bordered" id="story_table" style="background-color: #fff; position: relative; float: left;">
							<thead>
				                <tr>
				                	<th style="width: 45%;">故事標題</th>
				                	<th style="width: 25%;">建案</th>
				                	<th style="width: 30%;">住戶</th>
				            	</tr>
				            </thead>
				            <tbody id="story_list"></tbody>
						</table>
					</div>
				</section>
				<!-- end of story -->
				
				<!-- start of presale -->
				<section id="presale">
					
					<div class="v_line" style="left: 140px;"></div>
					
					<div id="building" class="building" >
						
					</div>
					
					<div id="show_map" class="tj_btn" style="
				    left: -10px;
				    position: absolute;
				    top: -260px;
				    width: 100px;
					"><div class="icon-map-marker icon-white"></div><div>顯示位置圖</div></div>
					
					<div id="map_thumb" style="">
						
					</div>
					
					<div id="meta">
						
					</div>
					
					<div id="presale_pager">
						<div class="prev_btn active" style="margin-right: 2px; float: left;"></div>
						<div class="next_btn" style="margin-right: 2px; float: left;"></div>
						<div class="index_object">
							<span class="idx"></span>/
							<span class="total"></span>
						</div>
					</div>
					
					<div id="presale_list">
						<div class="item_list"></div>
					</div>
					
				</section>
				<!-- end of presale -->
				
				<!-- start of ad -->
				<section id="ad">
					<div id="full_ad" class="tj_btn" style="
				    left: 260px;
				    position: absolute;
				    top: -260px;
				    width: 100px;
				    z-index: 780;
					"><div class="icon-zoom-in icon-white"></div><div>全螢幕顯示</div></div>
					<div id="ad_flow">
						
					</div>
				</section>
				<!-- end of ad -->
				
				<!-- start of contact -->
				<section id="contact">
					<div id="map_container">
						<div id="map_canvas"></div>	
					</div>
					<div class="v_line" style="left: 35px"></div>
					
					<form id="contact_form" method="POST" style="z-index: 700;" action="sendmail.php">
						<div style="float: left; font-size: 14px; line-height: 32px; height: 32px; margin-right: 10px;">選擇訊息類型</div>
						
						<div id="type_btn" class="btn-group" style="margin-bottom: 10px; float: right;">
							<div class="btn active">客戶服務</div>
							<div class="btn">成家故事</div>
							<div class="btn">資料索取</div>
						</div>
						
						<input id="ctype" type="hidden" name="ctype" value="客戶服務" />
						
						<input id="cname" name="cname" type="text" placeholder="* 請輸入您的暱稱" />
						<div>
							<input id="cemail" name="cemail" type="text" placeholder="* 請輸入您的聯絡信箱" />
							<div id="exclamation" class="icon-exclamation-sign" style="position: absolute; right: -22px; margin-top: 8px; display: none;"></div>
						</div>
						<input id="csubject" name="csubject" type="text" placeholder="* 請輸入您的訊息主旨" />
						
						<textarea id="ccomment" name="ccomment" style="height: 90px;" placeholder="* 請輸入訊息內容" /></textarea>
						
						<div style="float: left; height: 36px; line-height: 36px;">* 必填欄位</div>
						<div id="submit" class="tj_btn active" style="float: right;">
							<div class="icon-envelope icon-white"></div>
							送出訊息
						</div>
					</form>
					
					<div id="contact_info">
						<div style="margin-bottom: 15px; padding: 0 30px 15px 0; border-bottom: #ccc solid 1px; font-size: 14px;">
							任何問題可直接透過填寫下方聯絡我們表單與我們互動，我們將以最熱枕的服務態度、最快的速度回應
						</div>
						<div style="margin-bottom: 15px; padding: 0 30px 15px 0; border-bottom: #ccc solid 1px; font-size: 14px;">
							<table style="width: 100%;">
								<tbody>
									<tr>
										<td class="title">電話:</td>
										<td class="info">07-552-4567</td>
										<td class="title">傳真:</td>
										<td class="info">07-554-7700</td>
									</tr>
									<tr>
										<td class="title">地址:</td>
										<td class="info" colspan="3">804 高雄市鼓山區明華路315號20樓</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>
				<!-- end of contact -->
			</article>
			
			<header>
				<div id="logo" class="lock">
					<div id="white"></div>
				</div>
			</header>
			
			<nav>
				<div id="menu" class="lock">
					<div key="home" class="item lv1">首頁</div>
					<div key="about" class="item lv1">關於泰嘉</div>
					<div id="about_sub" class="submenu lv1" key="press">
						<div class="item sub" key="press">沿革</div>
						<div class="item sub" key="attitude">態度</div>
						<div class="item sub" key="documentary">紀實</div>
					</div>
					<div key="recent" class="item lv1">熱銷新案</div>
					<div key="work" class="item lv1">歷年作品</div>
					<div id="work_sub" class="submenu" key="work">
						
					</div>
					<div key="story" class="item lv1">成家故事</div>
					<div key="presale" class="item lv1">預推新案</div>
					<div key="ad" class="item lv1">廣告欣賞</div>
					<div key="contact" class="item lv1">聯絡我們</div>
				</div>
			</nav>
			
			<aside>
				<ul id="page_swaper">
					<li id="up_page"><a></a></li>
					<li id="down_page"><a></a></li>
				</ul>
			</aside>
		</div>
	</body>
</html>