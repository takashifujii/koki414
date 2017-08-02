//= require_tree .

$(function(){
  var $window = $(window);

  $(".slider").slick({
    "dots": false,
    "autoplay": true,
    "autoplaySpeed": 2400,
    "arrows": false,
    "fade": true
  });

  $window.on("load", function(){
    $(".title span").addClass('change');
  });
});
