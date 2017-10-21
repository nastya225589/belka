




$(document).ready(function(){
	function accordion() {
	$(this).toggleClass('page-header__active');
}
	$('.page-header__toggle').on ('click', function() {
		$('.page-header__main').toggleClass('page-header__active')
	});

  $(".comment__block").owlCarousel({
  	nav:true,
  	loop:true,
  	navClass: ['comment__prev','comment__next'],
  	navText: ['',''], 
  	stageClass: 'owl-stage comment__photo',
  	responsive : {
    // breakpoint from 0 up
    0 : {
    	items:1,

    },
    // breakpoint from 320 up
    768 : {
    	items:3,
    }   
    
}
  });


  $(".trails__carousel").owlCarousel({
  	nav:true,
  	loop:true,
  	navClass: ['trails__carousel-prev','trails__carousel-next'],
  	navText: ['',''],
  	stageClass: 'owl-stage trails__photo',
  	responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,
        },
        1200:{
            items:5,
        }
        
    }
  });
  	   
    $(".we-have__photo").owlCarousel({
    	nav:true,
    	loop:true,
  		navClass: ['we-have__photo-prev','we-have__photo-next'],
  		navText: ['',''],
  		stageClass: 'owl-stage we-have__photo--xs',
	  	responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:3
	        }
	        
	    }
	  });

	function accordion() {
		$(this).toggleClass('price__min-link--active');
		$('.price__min-link--xs').not(this).removeClass('price__min-link--active');
	}
		$('.price__min-link--xs').on ('click', accordion)


	$('.footer__header--up').click(function () { 
	$('html, body').animate({ scrollTop: 0 }, 800); 
	return false;
	});

	// $('td').on('click', function () {
	// $(this).css(
	// 		'border' ' 2px''solid' '#960000'
	// 		);	
	// });
	// // $('.box').on('dblclick', function (){
	// // 	$(this).css('opacity', '0');	
	// // });

});

