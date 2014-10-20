$(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() < 100) {
			$('.menu').stop().animate({
				height: 100
			});
			$('.menu img').stop().animate({
				margin: '15px 0 0 0'
			});
			$('.menu ul').stop().animate({
				margin: '40px 0 0 0'
			});
			$('.menu iframe').stop().animate({
				margin: '40px 0 0 40px'
			});
		} else {
			$('.menu').stop().animate({
				height: 80
			});
			$('.menu img').stop().animate({
				margin: '5px 0 0 0'
			});
			$('.menu ul').stop().animate({
				margin: '30px 0 0 0'
			});
			$('.menu iframe').stop().animate({
				margin: '30px 0 0 40px'
			});
		}
		
		$('.link').on('hover', function(){
			$('.link').css({
				opacity: 0.6
			});
		}, function(){
			$('.link').css({
				opacity: 1
			});
		});
		
	});
	$('.link').on('click', function(){
		var link = $(this).data('link');
		atual = $('.page[data-page="' + link + '"]');
		$('html, body').animate({
			scrollTop: atual.offset().top - 70
		}, 1000);
	});
	$('div[data-type="background"]').each(function(){
    	var $scroll = $(this);
        $(window).scroll(function() {
        	var yPos = -($(window).scrollTop() / $scroll.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});