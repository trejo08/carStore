$(function(){
	$('#customer_login').validate({
		rules: {
			'signup[name]': {
				required: true,
				minlength: 3
			},
			'signup[lastname]': {
				required: true,
				minlength: 3
			},
			'signup[email]': {
				required: true,
				email: true
			},
			'signup[password]': {
				required: true,
				password: true,
				minlength: 8
			},
			'signup[password_compare]': {
				required: true,
				equalTo: '#signup_password',
				minlength: 3
			}
		}
	});
});