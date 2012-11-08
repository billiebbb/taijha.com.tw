// this js extends bootstrap-modal
if(!window['ModalMessage']){
	var ModalMessage = function(){
		var autohide;
		var modal;
		this.show = function(opts, opts2){
			if(autohide) clearTimeout(autohide);
			
			modal = $('#mystage_modal_msg');
			
			opts = $.extend({}, {show: false}, opts || {}, opts2 || {});
			
			if(!modal.length){
				modal = $('<div class="modal" id="mystage_modal_msg">\
				  <div class="modal-header">\
				    <button class="close" data-dismiss="modal">×</button>\
				    <h3>Modal header</h3>\
				  </div>\
				  <div class="modal-body">\
				    <p>One fine body…</p>\
				  </div>\
				  <div class="modal-footer">\
				    <a class="btn cancel">取消</a>\
				    <a class="btn btn-primary confirm">確定</a>\
				  </div>\
				</div>');
				
				modal.hide().appendTo(document.body);
				
				modal.modal(opts);
				modal.on('show',function(){
					// modal.css('marginTop', Math.ceil( modal.height()/2) + 50 + 'px');
				});
			};
			
			
			var cancelBtn = modal.find('.btn.cancel');
			var confirmBtn = modal.find('.btn.confirm');
			var close = modal.find('button.close');
			var body = modal.find('.modal-body');
			
			
			
			if(opts.onShow){
				opts.onShow();
			};
			
			if(opts.hideCancel){
				modal.find('button.close, .cancel').hide();
			}else{
				modal.find('button.close, .cancel').show();
			}
			
			if(opts.cancelText){
				cancelBtn.text(opts.cancelText);
			}
			
			if(opts.confirmText){
				confirmBtn.text(opts.confirmText);
			}
			
			cancelBtn.unbind('click').click(function(e){
				if(opts.cancelCallback){
					opts.cancelCallback();
				}
				
				modal.modal('hide');
			});
			
			confirmBtn.unbind('click').click(function(e){
				
				if(opts.confirmCallback){
					opts.confirmCallback();
				}
				
				modal.modal('hide');
			});
			
			close.unbind('click').click(function(){
				cancelBtn.click();
			});
			
			if(opts.title){ 
				modal.find('.modal-header').show().find("h3").html(opts.title);
			}
			else{
				modal.find('.modal-header').hide();
			}
			
			if(opts.message) modal.find('.modal-body').empty().append(opts.message);
			
			modal.modal('show');
			
			if(opts.autoHide){
				autohide = setTimeout( function(){
					ModalMessage.hide();
				}, opts.autoHide);
			}
		};
		
		this.hide = function(){
			modal.modal('hide');
		};
		
		return this;
	}();
}
