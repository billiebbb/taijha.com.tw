<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		
		<title>泰嘉開發</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
	    <meta name="author" content="Tom Shih,tom@riversense.tw" >
	    <meta name="description" content="" >
	    <meta name="key" content="" >
	    
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    
	    <link href="com/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	    
	    <link href="com/setSlider/slider.css" rel="stylesheet">
	    <link href="com/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/taijha.css" rel="stylesheet">
		<link href="js/lightbox/lightbox.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Rochester' rel='stylesheet' type='text/css'>
		<!-- <link href="com/jquery-ui-1.9.1.custom/css/ui-lightness/jquery-ui-1.9.1.custom.min.css" rel="stylesheet"> -->
<!-- 		<link href='com/jquery-ui-1.8.24/css/ui-lightness/jquery-ui-1.8.24.custom.css' rel='stylesheet' type='text/css'> -->
		
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
		
		<script src="com/jquery.ui.touch-punch/jquery.ui.touch-punch.min.js" type="text/javascript"></script>
		
		
		<script src="com/jquery.parallax/jquery.parallax.js" type="text/javascript"></script>
		<script src="com/jquery.parallax/jquery.event.frame.js" type="text/javascript"></script>
		<script src="com/underscore-min.js" type="text/javascript"></script>
		<script src="com/is_mobile.js" type="text/javascript"></script>
		<script src="com/jquery.hasevent.js" type="text/javascript"></script>
		
		<script src='js/lightbox/lightbox.js' type="text/javascript"></script>
		
		<script src='js/works_data.js' type="text/javascript"></script>
		<script src='js/recent_data.js' type="text/javascript"></script>
		<script src='js/story_data.js' type="text/javascript"></script>
		<script src='js/presale_data.js' type="text/javascript"></script>
		<script src='js/ad_data.js' type="text/javascript"></script>
		
		<script src="js/photowall.js" type="text/javascript"></script>
		<script src="js/home.js" type="text/javascript"></script>
		<script src="js/menu.js" type="text/javascript"></script>
		
		<script src="js/about.js" type="text/javascript"></script>
		<script src="js/recent.js" type="text/javascript"></script>
		<script src="js/works.js" type="text/javascript"></script>
		<script src="js/story.js" type="text/javascript"></script>
		<script src='js/presale.js' type="text/javascript"></script>
		<script src='js/ad.js' type="text/javascript"></script>
		<script src='js/contact.js' type="text/javascript"></script>
		
		<script src="js/stage.js" type="text/javascript"></script>
<!-- 		<script src="js/wave.js" type="text/javascript"></script> -->
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
		
		<div id="page_mark"></div>
		<!-- <div class="dot_pattern v1"></div>
		<div class="dot_pattern v2"></div> -->
		
		<div id="main">
			<article>
			<!-- home content start -->
				<section id="home" class="active">
					<div id="home_title" class="content_title">
						<span style="font-size: 22px; font-weight: normal; color: #808080; font-family: Times New Roman, Times;">2012</span>年，高雄的天空一樣的藍。<br />
						<p>
						高雄的建築，一樣有著競相爭豔、分辨不清誰是誰的華麗天際線。<br />
						但泰嘉「水系列」建築，<br />
						包括悅讀水世紀、水工坊、水山硯、水丰景、水舞間…，<br />
						卻以一種清新的姿態，讓高雄的天際線，訴說著另一種不同的聲音！
						</p>
						<p>
						是捨棄市場流行的華麗裝飾的聲音，是以「水」為感性設計主軸的聲音，<br>
						是黑白經典格柵立面的聲音，是簡潔純粹建築線條的聲音…<br>
						</p>
						<p>
						這些聲音都來自泰嘉建築團隊如水般匯聚的能量，<br>
						一點一滴創造出屬於泰嘉建築的生活美學。<br>
						</p>
					</div>
					<ul id="photo_wall" class="photo_wall">
					</ul>
				</section>
				
				<!-- home content end -->
				
				
				<!-- about content start -->
				<!-- <section id="about"> -->
					<section id="press">
							
						<img src='uploads/about_img1.jpg' id='press_img' style="
						left: -370px;
					    position: absolute;
					    top: -200px;
					    " />
						
						
						<img id="press_tit" src='uploads/about_title_1.png' style="
						left: -365px;
					    position: absolute;
					    top: 50px;
						"/>
						
						<div class="v_line" ></div>
						
						<div class="content_title span10" style="position: absolute;
					    top: -200px;
					    width: 400px;" >
							<p>
							<span style="font-size: 18px; font-weight: bold; line-height: 34px;">統發不動產  1997</span><br />
							統發自1997成立至今，共締造了6千多戶之房屋銷售實績，長期累積第一線傾聽消費者的建築意見，讓統發不動產「實用建築趨勢觀念」大大奠基。
							</p>
							<p>
							<span style="font-size: 18px; font-weight: bold; line-height: 34px;">悅讀系建築</span><br />
							演而優則導，統發於2006年自房屋代銷轉型精進與合作業主成立泰緯建設，將傳承自代銷業的建築規劃力，導入建案規劃並催生悅讀系列建築各案在統發的巧思妙手包裝下，呈現創意迭起之建築新思維。
							</p>
							<p>
							<span style="font-size: 18px; font-weight: bold; line-height: 34px;">泰嘉「水建築」</span><br />
							繼悅讀系後，2010更獨資成立泰嘉開發，開創出專屬於泰嘉美學的水建築，從悅讀水世紀、水工坊、水山硯、水丰景到水舞間…以「上善設計，體貼如水」的建築態度，躍升為南台灣精品建築先驅！
							</p>
						</div>
						
					</section>
					
					<section id="attitude"  style="margin-top: 150px;">
						
						
						<img id="attitude_tit" src='uploads/about_title_2.png' style="
						left: -360px;
					    position: absolute;
					    top: -370px;"/>
						
							
						<div class="content_title" style="
						left: -350px;
					    position: absolute;
					    top: -180px;
					    width: 430px" >
							<p>
							芬蘭裔美籍建築師埃羅．沙里寧說：
							「建築就像一本打開的書，
							  從中你能看到一座城市的抱負。」
							</p>
							<p>
							對泰嘉建築而言，建築是值得閱讀一輩子的信仰，
							從外觀美學、造型編排、空間章節，到設計概念，
							不僅傳達創作者對建築的專注態度，
							型塑了居住者的生活方式，
							也主導整個城市的美學印象。
							</p>
							因此，在成本與設計考量的天秤下，
							泰嘉建築始終以「用心蓋好房子」為信仰，
							不惜犧牲利潤來成就自身的使命感。
							</p>
							<p>
							因為建築與一般產業不同，
							它是消費者一輩子的家，也是城市一世紀的風景，
							不該用賺錢的單一角度來衡量。
							</p>
						</div>
						
					
					
					
						<div class="v_line" style='left: 100px;'></div>
						
						<img id='attitude_img' src='uploads/about_img2.jpg' style="
						left: 120px;
					    position: absolute;
					    top: -380px;" />
						
						
						
					</section>
					
					<section id="documentary" >
						
						<div id='documentary_movie'
						 style="box-shadow: 0 0 10px 10px #ccc;
						  	left: -325px;
						  	top: -185px;
						   	position: absolute; 
						    padding: 10px;
							background-color: #fff;">
							<iframe width="640" height="360" src="http://www.youtube.com/embed/iIQ6VqFEN0o" frameborder="0" allowfullscreen></iframe>
						</div>
						
					</section>
				<!-- </section> -->
		<!-- 		end of about -->
				<section id="recent" >
					<img src='uploads/recent_tit.png'  style="
					left: -320px;
				    position: absolute;
				    top: -270px;" />
				    
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
					<img id="work_title" src='uploads/works_tit.png' style="
					left: -390px;
				    position: absolute;
				    top: -220px;" />
					
					<div class="content_title" style="
					left: -320px;
				    position: absolute;
				    top: -100px;
				    width: 220px;
					">
						<p>
						打造一個品牌很容易，累積價值的深度卻不簡單，泰嘉開發，不願追隨大同小異的建築模式，放膽追求異中求變的創作個性，從悅讀水世紀、水工坊、水山硯、水丰景到水舞間…
						</p>
						<p>
						泰嘉建築都成功改變當區地貌、創新當區房價並連奪多座國家卓越建設獎及建築園冶獎之專業獎項高度肯定！
						</p>
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
					
				<div id="years_widget">
					<div class="number"></div>
					<div class="number"></div>
					<div class="number"></div>
					<div class="number"></div>
				</div>
				<!-- end of works -->
				<!-- start of story -->
				<section id="story">
					<div class="title_img v_line" style='
				    left: -390px;
				    '></div>
				    
					<img class="title_img" src='uploads/story_title.png'  style="
					left: -360px;
				    position: absolute;
				    top: -240px;
				    " />
				    
				    <img class="title_img" src='images/story_pic.png'  style="
					left: -340px;
				    position: absolute;
				    top: -20px;
				    " />			    
					
					<div class="content_title" style="
					left: -360px;
				    position: absolute;
				    top: -120px;
				    width: 340px;
					">
						每棟建築，都在尋找與它有著同樣頻率與對味的人。<br>
						就像擅彈琴的伯牙，與懂欣賞的子期，<br>
						交流出的火花，是一種懂得，彼此珍惜著。<br>
						泰嘉建築與住在裡面的人，也是。
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
					
					<div id="contact_form" style="z-index: 700;">
						<div style="float: left; font-size: 14px; line-height: 32px; height: 32px; margin-right: 10px;">選擇訊息類型</div>
						<div class="btn-group" class="contact_type" style="margin-bottom: 10px; float: right;">
							<div class="btn active">客戶服務</div>
							<div class="btn">成家故事</div>
							<div class="btn">資料索取</div>
						</div>
						
						<input id="contact_name" type="text" placeholder="* 請輸入您的暱稱" />
						<input id="contact_email" type="text" placeholder="* 請輸入您的聯絡信箱" />
						<input id="contact_subject" type="text" placeholder="* 請輸入您的訊息主旨" />
						<textarea id="contact_content" style="height: 90px;" placeholder="* 請輸入訊息內容" /></textarea>
						<div style="float: left; height: 36px; line-height: 36px;">* 必填欄位</div>
						<div id="contact_submit" class="tj_btn active" style="float: right;">
							<div class="icon-envelope icon-white"></div>
							送出訊息
						</div>
					</div>
					
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