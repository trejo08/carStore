$(function(){
	$('#customer_login').validate({
		rules: {
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
			'contact[mensaje]': {
				required: true
			}
		}
	});
});