

$(function(){
$(".greenbox").css("background-color", "#000000");
$(".button").css("background-color", "#262626");
$('.button').css("box-shadow", "0 2px 2px #666666")
$("p").css("text-align", "center");
  $("p").css("font-family", "sans-serif");
  $('p').css("font-size", "50px");
  $("p").css("color", "#FFFCE6");

$('ul').css("list-style", "none");

$("input").mouseover(function(){
  $(this).css("background-color", "rgba(255, 255, 255, 0.5)");
});

$("input").mouseout(function(){
  $(this).css("background-color", "transparent");
  $(this).css("color", "#FFFCE6");
});

$("#B1").click(function(){
  $(".input").val('');
  window.alert("Thank you for submitting your information.");
});

  $("#B2").click(function(){
    $(".input").val("");
  });


});
