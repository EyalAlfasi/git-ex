(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  //Parallax scrolling hero section
  var background_image_parallax = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
        var from_top = $doc.scrollTop(),
            bg_css = '0px ' + (multiplier * from_top) + 'px';
        $object.css({ "background-position": bg_css });
    });
};

background_image_parallax($("header.masthead"));

background_image_parallax($("header.masthead"), 0.5);

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
