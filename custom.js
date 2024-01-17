$(document).ready(function(){
    let scrWidth = 0;
    $(window).on("load resize",function(e){
        scrWidth = screen.width;
    });
    
    // $.scrollify({
    //     section : ".slide",
    //     scrollSpeed: 200,
    //     setHeights: true,
    //     offset: 0,
    //     sectionName:false,
    //     interstitialSection:"header,footer"
    // });
    $(".menu-toggler").click(function() {
        $(this).toggleClass("on");
        $(".menu-collapse").slideToggle();
    });

      $('.testi-slider').slick({
           // arrows: false,
            dots: true,
            prevArrow: '#testi-prev',
            nextArrow: '#testi-next'
      });

    // scrolling scripts

    var selector = ".scroll-panel";

    var $slides = $(selector);

    var currentSlide = 0;
    var isAnimating = false;

    var stopAnimation = function () {
      setTimeout(function () {
        isAnimating = false;
      }, 300);
    };

    var bottomIsReached = function ($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.bottom <= $(window).height();
    };

    var topIsReached = function ($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.top >= 0;
    };

    document.addEventListener(
      "wheel",
      function (event) {
        var $currentSlide = $($slides[currentSlide]);

        if (isAnimating) {
          event.preventDefault();
          return;
        }

        var direction = -event.deltaY;

        if (direction < 0) {
          // next
          if (currentSlide + 1 >= $slides.length) return;
          if (!bottomIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide++;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          if(scrWidth>1300){
            $("html, body").animate(
                {
                  scrollTop: offsetTop - 60
                },
                1000,
                stopAnimation
              );
          }
          
        } else {
          // back
          if (currentSlide - 1 < 0) return;
          if (!topIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide--;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          if(scrWidth>1300){
            $("html, body").animate(
                {
                  scrollTop: offsetTop
                },
                1000,
                stopAnimation
              );
          }
          
        }
      },
      { passive: false }
    );

    // scrolling scripts end here
});

function openService(evt, serviceName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function openFaq(evt, faqName) {
    var i, faqTabcontent, faqTablinks;
    faqTabcontent = document.getElementsByClassName("faq-tabcontent");
    for (i = 0; i < faqTabcontent.length; i++) {
    faqTabcontent[i].style.display = "none";
    }
    faqTablinks = document.getElementsByClassName("faq-tablinks");
    for (i = 0; i < faqTablinks.length; i++) {
    faqTablinks[i].className = faqTablinks[i].className.replace(" active", "");
    }
    document.getElementById(faqName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpener").click();




  $(document).ready(function () {

    $(".tab-slide").slick({
      mobileFirst: true, 
      slide: 'li',
      arrows: false,
      responsive: [
        {
            breakpoint: 767,
            settings: "unslick",
        }
      ]
    })

  });





