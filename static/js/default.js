function Page(pages, currentPage)
{
	var currentPage;
	var pages;
	var ativ;

	this.construct = function(pages, currentPage)
	{
		this.pages = pages;
		this.currentPage = currentPage;
		this.ativ = true;
		$('.header ul li a[data-page="'+currentPage+'"]').css({
			borderBottom: '1px solid #E6A759',
			color: '#E6A759'
		});
	}

	this.goto = function(page, action, start)
	{
		this.ativ = false;
		$('.header ul li a').css({
			border: 'none',
			color: '#333333'
		});
		$('.header ul li a[data-page="'+page+'"]').css({
			borderBottom: '1px solid #E6A759',
			color: '#E6A759'
		});
		this.currentPage = page;
		var $thisAtiv = this;
		var page = $('.' + this.currentPage);
		var scrollPage = page.offset().top;
		$('html,body').animate({
			scrollTop: scrollPage
		}, 2000, function(){
			setTimeout(function(){
				$thisAtiv.ativ = true;
			}, 200);
		});
		if (action != null && typeof(action) == 'function') action();
	}

	this.nav = function()
	{
		var nav = {};
		for (i in this.pages) {
			i = parseInt(i);
			if (this.currentPage == this.pages[i]) {
				nav.prevPage = typeof(this.pages[i - 1]) != 'undefined' ? this.pages[i - 1] : false;
				nav.nextPage = typeof(this.pages[i + 1]) != 'undefined' ? this.pages[i + 1] : false;
			}
		}
		return nav;
	}

	this.onScroll = function(bottom, top)
	{
		var scrollPoint = 0;

		$(window).on('scroll', function(e){
			e.preventDefault();
			e.stopPropagation();
			if ($(window).scrollTop() >= scrollPoint) {
				bottom();
			} else {
				top();
			}
			scrollPoint = $(window).scrollTop();
		});
	}

	this.construct(pages, currentPage);
}

$(function(){

	var page = new Page(['home', 'services', 'team', 'metodology', 'contact'], 'home');

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
		// if (page.ativ) page.goto(page.nav().nextPage);
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
		// if (page.ativ) page.goto(page.nav().prevPage);
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
		page.goto($(this).attr('data-page'));
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

	$('.btn-more').on('click', function(){
		page.goto('services');
	});
});