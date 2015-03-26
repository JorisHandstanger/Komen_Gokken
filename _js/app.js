

(function(){

	fallback.load({
		jQuery: [
		'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
		'js/vendor/jquery/dist/jquery.min.js'
		],
		Modernizr: [
		'//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',
		'js/vendor/modernizr/modernizr.js'
		]
	});


	function init(){

		jQuery(document).ready(function($){
	//open menu
	$('.cd-menu-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-main-content').addClass('move-out');
		$('.main-nav').addClass('is-visible');
		$('.cd-shadow-layer').addClass('is-visible');

		$(".cd-main-content").css("overflow-x, hidden;");

	});
	//close menu
	$('.cd-close-menu').on('click', function(event){
		event.preventDefault();
		$('.cd-main-content').removeClass('move-out');
		$('.main-nav').removeClass('is-visible');
		$('.cd-shadow-layer').removeClass('is-visible');
	});


});



	}

	fallback.ready(init);

})();
