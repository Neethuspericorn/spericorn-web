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
    
});