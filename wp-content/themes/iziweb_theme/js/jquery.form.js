jQuery(document).ready(function(){
"use strict";
	$('#submit').click(function(){

//		var action = $('#contactform').attr('action');
		var action = ajax_url;

		$("#message").fadeOut(200,function() {
		$('#message').hide();

 		$('#submit')
			.attr('disabled','disabled');

		$.post(action, {
                        action: 'contact_submit',
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').fadeIn(200);
				$('.hide').hide(0);
				$('#submit').removeAttr('disabled');
//				if(data.match('success') != null) $('#contactform').fadeOut('slow');

			}
		);

		});

		return false;

	});


});