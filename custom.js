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




