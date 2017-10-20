$(document).ready(function () {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky');
		}
		else {
			$('header').removeClass('sticky');
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('img.home_logo').addClass('home_logo-sticky');
		}
		else {
			$('img.home_logo').removeClass('home_logo-sticky');
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('.menu-link').addClass('sticky_text')
					}
		else {
			$('.menu-link').removeClass('sticky_text')
				}
		
	})
});


$(window).ready(function (){
	$('#hero_but').click(function() {
			var elementClick = $(this).attr("href");
   			var destination = $(elementClick).offset().top-40;
   			
			// $('.content').toggleClass('hidden');
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
			$('#hero').show();
			return false;
		/* Act on the event */
	});
});

$(window).ready(function (){
	$('#about_but').click(function() {
			var elementClick = $(this).attr("href");
   			var destination = $(elementClick).offset().top-40;
   			
			// $('.content').toggleClass('hidden');
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
			$('#about').show();
			return false;
		/* Act on the event */
	});
});

$(window).ready(function (){
	$('#developer_but').click(function() {
			var elementClick = $(this).attr("href");
   			var destination = $(elementClick).offset().top-40;
   			
			// $('.content').toggleClass('hidden');
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
			$('#about').show();
			return false;
		/* Act on the event */
	});
});
$(window).ready(function (){
	$('#contacts_but').click(function() {
			var elementClick = $(this).attr("href");
   			var destination = $(elementClick).offset().top-40;
   			
			// $('.content').toggleClass('hidden');
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
			$('#about').show();
			return false;
		/* Act on the event */
	});
});



    
var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

var moveLayers = function(e) {
    var initialX = (window.innerWidth / 2) - e.pageX
        initialY = (window.innerHeight / 2) - e.pageY;

    [].slice.call(layers).forEach(function (layer, i){
        var divider = i/100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            layerStyle = layer.style,
            transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';

        layerStyle.transform = transformString;
        layerStyle.bottom = '-' + bottomPosition + 'px';
    });
}

window.addEventListener('mousemove', moveLayers);