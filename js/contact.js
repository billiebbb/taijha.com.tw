

var Contact = function(){
	var map;
	var marker;
	var initialized = false;
	
	var init = function(){
		
		if($.browser.msie){
			$("#contact_form").find("input[placeholder], textarea[placeholder]").each(function(index) {
				$(this).watermark($(this).attr("placeholder"));
			});
		}
		
		$("#contact_form #type_btn .btn").live("click", function(){
			if($(this).is(".active")) return;
			
			$("#contact_form #type_btn .btn.active").removeClass("active");
			$(this).addClass("active");
			
			$("#contact_form #ctype").val($(this).text());
		});
		
		$("#contact_form").find("input, textarea").keyup(checkForm).val("");
		
		$("#contact_form #cemail").filter_input({regex:'[\.a-z0-9@-]'}); 
		
		initMap();
	};
	
	var checkForm = function(){
		var cf = $("#contact_form");
		var cemail = cf.find("#cemail").val();
		var ctype = cf.find("#ctype").val();
		if(!ctype){
			cf.find("#ctype").val(cf.find("#type_btn .btn.active").text());
			ctype = cf.find("#ctype").val();
		}
		var csubject = cf.find("#csubject").val();
		var cname = cf.find("#cname").val();
		var ccomment = cf.find("#ccomment").val();
		var email_vailed = checkEmail(cemail);
		
		if($(this).is("#cemail")){
			if(!email_vailed){
				cf.find("#exclamation:hidden").show();
				return;
			}else{
				cf.find("#exclamation:visible").hide();
			}	
		}
		
		if(ctype && csubject && cname && ccomment && email_vailed){
			cf.find("#submit.active").removeClass("active").click(function(){
				$.ajax({
					type: "POST",
					url: "sendmail.php",
					data: {
						cname: cname
						, csubject: csubject
						, ctype: ctype
						, ccomment: ccomment
						, cemail: cemail
					},
					success: function() {
						ModalMessage.show({
							message: "您的訊息已送出"
							, autoHide: 3000
							, hideCancel: true
						});
						
						
						$("#contact_form").find("input, textarea").keyup(checkForm).val("");
						
						$("#contact_form").find("#exclamation:visible").hide();
					}
				});
			});
		}
		else{
			cf.find("#submit:not(.active)").addClass("active").unbind("click");
		}
		
	};
	
	var initMap = function() {
	
	  	// Create an array of styles.
		var styles = [
		  {
		    "featureType": "landscape",
		    "stylers": [
		      { "color": "#ddeced" },
		      { "saturation": -57 }
		    ]
		  },{
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      { "saturation": -100 },
		      { "lightness": 100 },
		      { "gamma": 0.65 },
		      { "weight": 1 }
		    ]
		  },{
		    "featureType": "water",
		    "stylers": [
		      { "color": "#b8e8fe" },
		      { "saturation": -53 },
		      { "lightness": -18 },
		      { "gamma": 1.47 }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "gamma": 1.09 },
		      { "saturation": -56 }
		    ]
		  },{
		    "featureType": "poi",
		    "stylers": [
		      { "saturation": -85 },
		      { "lightness": 17 }
		    ]
		  }
		];
	  
		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		var latlng = new google.maps.LatLng(22.663403,120.300807);
		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var mapOptions = {
		    zoom: 16,
		    center: latlng,
		    disableDefaultUI: true,
		    zoomControl: true,
		    mapTypeControlOptions: {
		    	mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		    }
		};
		  
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		
		// Define Marker properties
		var image = new google.maps.MarkerImage('images/marker.png',
			// This marker is 129 pixels wide by 42 pixels tall.
			new google.maps.Size(125, 64),
			// The origin for this image is 0,0.
			new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 18,42.
			new google.maps.Point(48, 30)
		);
	
		// Add Marker
		marker = new google.maps.Marker({
			position: latlng,
			map: map,
			icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
		});
		
		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	};
	
	var refreshMap = function(){
		google.maps.event.trigger(map, 'resize');
		map.setCenter(marker.getPosition());
	};
	
	return {
		init: init
		, refreshMap: refreshMap
	}
}();

$(function(){
	// Contact.init();
});
