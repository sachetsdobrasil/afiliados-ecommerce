$(document).ready(function() {
	let animationEnd = 'transitionend';

	let bar1 = $(".bar1");
	let bar2 = $(".bar2");
	let bar3 = $(".bar3");
	let hiddenMenu = $("#hidden");

	$(".bars").on('click', function() {
		bar1.toggleClass("bar1-toggled");
		bar2.toggleClass("bar2-toggled");
		bar3.toggleClass("bar3-toggled");
		hiddenMenu.toggleClass("animated fadeInDown hidden");	
	});

	$(".link-responsive").on('click', function() {
		bar1.removeClass("bar1-toggled");
		bar2.removeClass("bar2-toggled");
		bar3.removeClass("bar3-toggled");
		hiddenMenu.removeClass("animated fadeInDown");
		hiddenMenu.toggleClass("hidden")

	});

});

