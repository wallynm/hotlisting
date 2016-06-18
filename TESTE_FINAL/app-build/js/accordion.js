$(document).ready(function() {
	var whash = window.location.hash;
	var $heading = $('.accordion .panel-heading');

	// Applies accordion animation and hashcontrol
	$heading.click(function(e){
		var $el = $(e.currentTarget);

		var hash = $($el).attr('href');
		var scroll = document.body.scrollTop;

		$(".content a").not(this).hide("slow");
		$('.accordion .panel-heading').not(this).removeClass('collapse');
		$('.accordion .panel-heading').not(this).find('+ .accordion-body').slideUp();

		$el.toggleClass('collapse');
		$el.next('.accordion-body').slideToggle('600', 'swing');

		window.location.hash = hash;
		document.body.scrollTop = scroll;		
		e.preventDefault();
	});

	// If page refreshed with rash, selects option for user identification
	if($('[href="'+whash+'"]').length != 0)
		$('[href="'+whash+'"]').click();	
})