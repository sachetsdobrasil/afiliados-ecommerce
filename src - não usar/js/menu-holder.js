$(document).ready(function() {

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

var callback = function() {
	var menu = $('.principal-menu')
	var menuPosition = menu.scrollTop();

	if (window.pageYOffset >= 38) {
        menu.addClass("little-menu")
    } else {
        menu.removeClass("little-menu")
    }
}

$(window).on('scroll', throttle(callback, 30));

});
