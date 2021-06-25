$(document).ready(function() {
    $(window).on('scroll', function() {
      $('.scrollstrokemobile').css("opacity", (-$(window).scrollTop() + 40));
    });
});
