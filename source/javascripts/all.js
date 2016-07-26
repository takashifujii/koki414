//= require_tree .

$(function(){
  var $window = $(window);

  $(".slider").slick({
    "dots": true,
    "autoplay": true,
    "arrows": false
  });

  var mainHeight = $(".main-wrapper").innerHeight();
  $(".border").height(mainHeight - 40);


  $window.on("load", function(){
    setTimeout( function(){
      $(".catch").add(".title").addClass('change');
      $(".border").addClass('change');
    }, 1000);
  });
});