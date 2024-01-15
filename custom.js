$(document).ready(function(){
    $.scrollify({
        section : ".slide",
        scrollSpeed: 200,
        setHeights: true,
        offset: '',
        sectionName:false,
        interstitialSection:"header,footer"
    });
    $(".navbar-toggler").click(function() {
        $(this).toggleClass("on");
        $(".navbar-collapse").slideToggle();
    });

      $('.testi-slider').slick({
           // arrows: false,
            dots: true,
            prevArrow: '#testi-prev',
            nextArrow: '#testi-next'
      });

    
});




