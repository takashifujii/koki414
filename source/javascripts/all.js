//= require_tree .

$(function(){
  const $window = $(window);

  $(".slider").slick({
    "dots": true,
    "autoplay": true,
  });


  $window.on("load", () => {
    setTimeout( () => {
      $(".catch").add(".title").addClass('change');
      $(".brdr").removeClass('st');
    }, 1000);
  });
});