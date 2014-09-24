function Page()
{
	var currentPage;

	this.goto = function(page, action)
	{
		$('.header ul li a').css({
			border: 'none',
			color: '#333333'
		});
		console.log(this.pages);
		this.currentPage = page;
		var page = $('.' + this.currentPage);
		var scrollPage = page.offset().top;
		$('html,body').animate({
			scrollTop: scrollPage
		}, 2000);
		if (action != null && typeof(action) == 'function') action();
	}

	this.onScroll = function(bottom, top)
	{
		var scrollPoint = 0;

		$(window).on('scroll', function(){
			if ($(window).scrollTop() >= scrollPoint) {
				bottom();
			} else {
				top();
			}
			scrollPoint = $(window).scrollTop();
		});
	}
}

$(function(){

	var page = new Page();

	page.onScroll(function(){
		if ($(window).scrollTop() > 300) {
			$('.header').stop().animate({
				height: 70
			});
			$('.header img').stop().animate({
				marginTop: 15
			});
			$('.header ul').stop().animate({
				marginTop: 25
			});
		}
	}, function(){
		if ($(window).scrollTop() < 100) {
			$('.header').stop().animate({
				height: 100
			});
			$('.header img').stop().animate({
				marginTop: 30
			});
			$('.header ul').stop().animate({
				marginTop: 40
			});
		}
	});

	$('div[data-type="background"]').each(function(){
    	var $scroll = $(this);
        $(window).scroll(function() {
        	var yPos = -($(window).scrollTop() / $scroll.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });

	$('.link').click(function(){
		var _this = $(this);
		page.goto($(this).attr('data-page'), function(){
			_this.css({
				borderBottom: '1px solid #E6A759',
				color: '#E6A759'
			});
		});
	});

	$('.header ul li a').hover(function(){
		$(this).css({
			color: '#E6A759',
			borderBottom: '1px solid #E6A759'
		});
	}, function(){
		if (page.currentPage != $(this).attr('data-page')) {
			$(this).css({
				color: '#333333',
				borderBottom: 'none'
			});
		}
	});
});