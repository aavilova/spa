$(document).ready(function() {
let url = "https://cdnjs.cloudflare.com/ajax/libs/onepage-scroll/1.3.1/jquery.onepage-scroll.min.js";

if ($(window).width() > 414 && $(window).width() > 769) {
  $.getScript( url, function() {
    $(".fordesktop").onepage_scroll({
      sectionContainer: ".fordesktop1",
      easing: "ease",

      animationTime: 1000,
      pagination: true,
      updateURL: false,

     beforeMove: function(index) {},
     afterMove: function(index) {},
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
     });
  });
} else if ($(window).width() > 414 && $(window).width() < 769) {
  $.getScript( url, function() {
    $(".forwidth768").onepage_scroll({
      sectionContainer: ".forwidth768_1",
      easing: "ease",

      animationTime: 1000,
      pagination: true,
      updateURL: false,

     beforeMove: function(index) {},
     afterMove: function(index) {},
     loop: false,
     keyboard: true,
     responsiveFallback: false,
     direction: "vertical"
     });
  });
}
});
