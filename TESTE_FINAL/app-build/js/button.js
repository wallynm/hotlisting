$(document).ready(function() {
	var timeout;
	var $btn = $('.btn');

	// Applies ripple effect when clicked
	$btn.click(function(e){
		var $el = $(e.currentTarget);
		clearTimeout(timeout);
		$el.removeClass('ripple-out');
		$el.addClass('ripple-out');

		timeout = setTimeout(function(){
			$el.removeClass('ripple-out');
		}, 600);

		e.preventDefault();
	})
})

