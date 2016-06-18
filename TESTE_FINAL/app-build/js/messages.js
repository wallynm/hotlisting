$(document).ready(function() {
	var emptyTpl = '<div class="empty-placeholder" style="opacity: 0; height: 0px; padding: 0px;"><div>Todas mensagens foram removidas!</div><span>Atualize a página para recuperá-las<span></div>';
	var $deleteBtn = $('.toolbar .btn .icon-trash');
	var $message = $('.message-list .message-item');
	var $toggleList = $('.message-list .selection [type=checkbox]');

	// Applies selected class to li
	$toggleList.click(function(e){
		var $el = $(e.currentTarget);
		$el.parents('li').toggleClass('selected');
	});

	// Select checkbox when clickd on message li
	$message.click(function(e){
		var $el = $(e.currentTarget);
		$el.parents('li').find('input[type=checkbox]').click();
	});

	// Removes each selected item list
	$deleteBtn.click(function(){
		$('.message-list .selected').slideUp('slow', function(){ 
			$(this).remove();

			if($('.message-list li').length == 0){
				$('.message-list').append(emptyTpl);
				$('.pagination').css('opacity', 0);
				
				setTimeout(function(){
					$('.empty-placeholder').removeAttr('style');
				}, 100);
			}
	 	});
	});	
})