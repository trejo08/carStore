$(function(){
	$('#customer_login').validate({
		rules: {
			'customer[email]': {
				required: true,
				email: true
			},
			'customer[password]':{
				required: true,
				password: true,
			}

		}
	});
});