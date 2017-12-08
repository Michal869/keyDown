(function($){

var pr  = $('.prilba'),
	overlay = $('#overlay');

	pr.on('click', function() {
		pr.fadeOut('fast');

		overlay.fadeIn('fast', function() {
			overlay.find('.bar').animate({ width: '100%' }, 3000, function() {
				overlay.fadeOut('fast', function() {
					overlay.find('.bar').css({ width: 0 });
				});
				pr.fadeIn('fast');
			});
		});		
	});


	$(document).on('keydown', function(event){

		console.log(event.which);
		switch (event.which) {
			case 38:
				pr.css({ top: '-=5'});
				break;
			case 37:
				pr.css({ left: '-=5'});
				break;
			case 39:
				pr.css({ left: '+=5'});
				break;
			case 40:
				pr.css({ top: '+=5'});
				break;
		}

	});


})(jQuery);