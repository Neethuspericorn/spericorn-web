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

// accordion code start here

        var accItem = document.getElementsByClassName("acco-head"),
        accBody = document.getElementsByClassName("acco-body");
        for (i = 0; i < accItem.length; i++) accItem[i].onclick = function() {
            var e = !this.classList.contains("active");
            setClass(accItem, "active", "remove"), setClass(accBody, "show", "remove"), e && (this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show"), this.nextElementSibling.clientHeight)
        };

// var acc = document.getElementsByClassName("acco-head");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
function setClass(e, t, s) {
  for (var a = 0; a < e.length; a++) e[a].classList[s](t)
}
// accordion code end here


  $(document).ready(function () {

    // $(".bnr-icon-slide").slick({
    //   mobileFirst: true, 
    //   arrows: false,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //         breakpoint: 991,
    //         settings: "unslick",
    //     }
    //   ]
    // })

    // $(".tab-slide").slick({
    //   mobileFirst: true, 
    //   slide: 'li',
    //   arrows: false,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //         breakpoint: 767,
    //         settings: "unslick",
    //     }
    //   ]
    // })

    function initSlider() {
      return $('.tab-slide').slick({
        mobileFirst: true, 
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: "unslick"
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: true,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }
          },
        ]
      });
    }
  
    // Initialize the slider
    var slider = initSlider();
  
    // Reinitialize the slider on window resize
    $(window).on('resize', function() {
      var windowWidth = $(window).width();
  
      if (windowWidth >= 767) {
        // If the slider is initialized, destroy it
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
      } else {
        // If the slider is not initialized, initialize it with the specific settings
        if (!slider.hasClass('slick-initialized')) {
          slider = initSlider();
        }
      }
    });
  

  });






