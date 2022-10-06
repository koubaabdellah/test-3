jQuery(document).ready(function($){
	$('#youtubeModal').on('hide.bs.modal', function (e) {
		$('#youtubeVideo').attr('src','//www.youtube.com/embed/');
	});
	$('#carousel-example-generic').on('slid.bs.carousel', function () {
	  $('.active .carousel-caption').addClass("animated fadeIn");
	});
	$('#carousel-example-generic').on('slide.bs.carousel', function () {
	  $('.active .carousel-caption').removeClass("animated fadeIn");
	});
	$('#product_search_module .product_select').change(function(){
		var extra_q = '';
		
		if(search_module_tp){
			extra_q += '&topic='+search_module_tp;
			search_module_tp = 0;
		}
		if(search_module_os){
			extra_q += '&os='+search_module_os;
			search_module_os = 0;
		}
		$.get('?ajax_action=search_module_html&product_id='+$(this).val()+extra_q,function(d){
			if(d.html){
				$('#product_search_module .product_search_ajax_div').html(d.html);
				intialize_scripts();
			}
		});
	});
	if($('#product_search_module .product_select').val() != 0){
		$('#product_search_module .product_select').trigger('change');
	}
	$('#contact-us-form .product_select').change(function(){
		var extra_q = '';
		$.get('?ajax_action=contact_us_load_os&product_id='+$(this).val()+extra_q,function(d){
			if(d.html){
				$('#contact-us-form .ajax-fill-os').html(d.html);
			}
		});
	});
	if($('#contact-us-form .product_select').val() != 0){
		$('#contact-us-form .product_select').trigger('change');
	}
	$('#contact-us-form').submit(function(e){
		e.preventDefault();
		var errors = 0;
		$('#contact-us-form .crequired').each(function(i,v){
			if($(this).val() == ''){
				errors++;
			}
		});
		if(errors){
			alert('Please fill required fields.');
			return;
		}
		$("#contact__action").attr("disabled",true);
		$.post("?ajax_action=contact_us",$('#contact-us-form').serialize(), function(d){
			if(d.status == 'error'){
				$(".captchacont img").attr('src',$("#stylesheet__uri").val()+'/img.php');				
				alert('Submission failed with the following error: '+d.status_msg);
				$("#contact__action").attr("disabled",false);
			}else{
				$('#contact-us-form input.form-control, #contact-us-form textarea.form-control').val('');
				$("#contact-us-form").trigger("reset");
				$(".captchacont img").attr('src',$("#stylesheet__uri").val()+'/img.php');
				$(".ajax-fill-os").html('');
				alert(d.status_msg);
				$("#contact__action").attr("disabled",false);
			}
		});
	});
	$('.feedback-buttons a.btn-feedback').click(function(e){
		e.preventDefault();
		$.post('?ajax_action=feedback', { post_id: $(this).data('postid'), helpful: $(this).data('feedback')}, function(d){

		});
		$(this).parent().html('<span class="feedback-ty">Thank you for your feedback!</span>');
	});
	$("#pro_cnt_list").change(function(e){
		var att_val = $('option:selected', this).attr('data');
		//$(".product_search_ajax_div").hide();
		//window.location.href=att_val;
		//e.preventDefault();
	});
	$("#submit_action").click(function(e){
		e.preventDefault();
		var urlval='';
		var pod_val = $('#pro_cnt_list option:selected').attr('data');
		var os_val = $("#os_cnt").val();
		var tp_val = $("#sup_topic").val();
		urlval = pod_val;
		if(os_val!='' && os_val!=undefined && os_val != 0){
			urlval+="?os="+os_val;
		}
		if(tp_val!='' && tp_val!=undefined && tp_val != 0){
			if(os_val!='' && os_val!=undefined && os_val != 0){
				urlval+="&topic="+tp_val;
			}else{
				urlval+="?topic="+tp_val;
			}
		}
		window.location.href=urlval;
	});
	$('.mobile-prevent-default').click(function(e){ if($(window).width() < 1200){ e.preventDefault(); } });
});


function PopupCenter(url, title, w, h) {
	// Fixes dual-screen position                         Most browsers      Firefox
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.document.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow
	if (window.focus) {
			newWindow.focus();
	}
}
function intialize_scripts(){
	jQuery("#os_cnt").change(function(e){
		var os_val = jQuery('option:selected', this).val();
		jQuery("#wpp-os-key").val(os_val);
	});
	jQuery("#sup_topic").change(function(e){
		var tp_val = jQuery('option:selected', this).val();
		jQuery("#wpp-topic-key").val(tp_val);
	});
}

//present mobile menu on click
jQuery(document).ready(function($){
	$('button.goto-select').click(function(){
		$('.goto-options').toggle('display');
		$('.primary-menu-mask').toggle();
	});

	$('.explore-unit').click(function(){
		if($(this).hasClass('hide-it')){
			$('#side_wrapper').animate({
				left:"-500px",
				top:"-500px"
			});
			$(this).removeClass('hide-it');
		} else {
			$('#side_wrapper').animate({
				left:"0",
				top:"80px"
			});
			$(this).addClass('hide-it');
		}
	});
	$(document).click(function(e){
	   if($(e.target).closest('button.goto-select').length != 0) return false;
		   $('.goto-options').hide();
			$('.primary-menu-mask').hide();
		});
});
jQuery(window).load(function(){
	jQuery('#contact-us-form .product_select').change(function(){
		var extra_q = '';
		if(jQuery(this).val()==23245){
			jQuery("#other-contact").hide();
			jQuery("#ofc-at-hand").show();			
		}else{
			jQuery("#ofc-at-hand").hide();
			jQuery("#other-contact").show();
		}
	});
});

