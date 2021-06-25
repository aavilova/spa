$(document).ready(function() {
  $('.a1').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#border' ? 10 : 30;
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
  $(window).on('scroll', function() {
    $('.scrollstroke').css("opacity", (-$(window).scrollTop() + 40));
  });

  $(window).scroll(function(){
      if ( $(this).scrollTop() > 450 ) {
          $('.a1').addClass('open');
      } else {
          $('.a1').removeClass('open');
      }
  });

  $(document).ready(function(){
      if ( $(this).offset().top >= 750 ) {
          $('.a1').addClass('open');
      } else {
          $('.a1').removeClass('open');
      }
  });

  $('.a1').click(function() {
    $('.a1').toggleClass('open')
  });
});
