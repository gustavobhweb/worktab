function Page()
{
	var currentPage;

	this.goto = function(obj)
	{
		$('.header ul li a').css({
			border: 'none',
			color: '#333333'
		});
		obj.css({
			borderBottom: '1px solid #E6A759',
			color: '#E6A759'
		});
		this.currentPage = obj.attr('data-page');
		var page = $('.' + this.currentPage);
		var scrollPage = page.offset().top;
		$('html,body').animate({
			scrollTop: scrollPage
		});
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
		console.log('desce');
		if ($(window).scrollTop() > 500) {
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

	$('.link').click(function(){
		page.goto($(this));
	});
});