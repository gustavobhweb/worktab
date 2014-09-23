function Page()
{
	var currentPage;

	this.goto = function(obj)
	{
		this.currentPage = obj.attr('data-page');
		var page = $('.' + this.currentPage);
		var scrollPage = page.offset().top;
		$('html,body').animate({
			scrollTop: scrollPage
		});
	}

	this.onScroll = function(bottom, top)
	{
		var scrollPoint;

		$(window).on('scroll', function(){

		});
	}
}

$(function(){
	var page = new Page();

	$('.link').click(function(){
		page.goto($(this));
	});
});