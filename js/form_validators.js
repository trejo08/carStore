$(function(){
	$('#customer_login').validate({
		rules: {
			'customer[email]': {
				required: true,
				email: true
			},
			'customer[password]': {
				required: true
			},
			'contact[name]': {
				required: true
			},
			'contact[lastname]': {
				required: true
			},
			'contact[email]': {
				required: true,
				email: true
			},
			'customer[mensaje]': {
				required: true
			}

		}
	});

	$('#reset_password_customer').validate({
		rules: {
			'email': {
				required: true,
				email: true
			}
		}
	});

});