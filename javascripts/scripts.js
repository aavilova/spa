$(document).ready(function(){
  $('.cartb').click(function(){
    $(this).toggleClass('cartbactive')
  });
  $('.cartitem').click(function(){
    $(this).toggleClass('cartitemactive')
  });
  $('.buttonaf').click(function(){
    $(this).toggleClass('buttonafactive')
  });
  $('.buttonmobile').click(function(){
    $(this).toggleClass('buttonmobileactive')
  });
  $(window).on('scroll', function() {
    $('.shop').css("left", parseInt(-$(window).scrollTop() + 40));
  });
  $(window).on('scroll', function() {
    $('.scrollstrokeleft').css("opacity", (-$(window).scrollTop() + 40));
  });
  $(window).on('scroll', function() {
    $('.scrollleft').css("opacity", (-$(window).scrollTop() + 40));
  });
  VANTA.FOG({
    el: "#background, #second",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x0,
    midtoneColor: 0xff2000,
    lowlightColor: 0xd70707,
    baseColor: 0x0,
    blurFactor: 0.35,
    speed: 0.50,
    zoom: 1
  })
});
