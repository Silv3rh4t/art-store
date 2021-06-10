//Animate button on masthead, also dependent on index.css

$(".zoom").hover(function(){
	$(this).addClass('transition');
}, function(){
	$(this).removeClass('transition');
});
