$.fn.resizeToParent = function(options) {
	
	return this.each(function() {
	    var o = $.extend({}, options || {});
	    var obj = $(this);
		var src = obj.attr('src');
		
		var parent = (typeof(o.parent) != "undefined")? obj.parents(o.parent) : obj.parent();
		
		parent.addClass('loading');
		
		
	    // bind to load of image
	    
	    obj.load(function() {
	    	
	    	if(!obj.width() || !obj.height()){
	    		return;
	    	}
			// dimensions of the parent
	      	if(!obj.data("ow") && obj.width()) obj.data("ow", obj.width());
	      	if(!obj.data("oh") && obj.height()) obj.data("oh", obj.height());
	      	
			var w = obj.data("ow");
			var h = obj.data("oh");
			var pw = parent.width();
			var ph = parent.height();
			var tw, th;
			
			// if(src == "http://localhost/taijha/uploads/08.jpg") {
				// console.log("w: %s, h: %s", w, h)
			// }			
			tw = pw;
			th = Math.ceil(pw/w*h);
			
			if(o.type == 'fixed') {
				if(th > ph){
					th = ph;
					tw = Math.ceil(ph/h*w);
				}	
			}
			else{
				if(th < ph){
					th = ph;
					tw = Math.ceil(ph/h*w);
				}	
			}
			
			
			
			var css = {
	      		width: tw + 'px'
	      		, height: th + 'px'
	      		, left: (o.align == 'lt')? 0 : Math.ceil(pw/2) + 'px'
	      		, top: (o.align == 'lt')? 0 : Math.ceil(ph/2) + 'px'
	      		, margin: ((o.align == 'lt')? 0 : parseInt(-th/2)) + 'px 0 0 ' + ((o.align == 'lt')? 0 : parseInt(-tw/2)) + 'px'
	      		, position: 'relative'
	      		, maxWidth: 'none'
	      		, minWidth: 'none'
	      		, maxHeight: 'none'
	      		, minHeight: 'none'
	      		, float: 'left'
	  		};
	  		
	      	obj.css(css);
	      	
	      	if(o.fadeIn){
	      		obj.hide().fadeIn(o.fadeIn, function(){
	      			if(o.zoom == 'drag'){
	      				$(this).draggable({scroll: false});
	      			}
	      		});
	      	}
	      	
	      	parent.removeClass('loading');
	    });
		
	    // force ie to run the load function if the image is cached
	    if (this.complete) {
	      obj.trigger('load');
	    }
	});
}