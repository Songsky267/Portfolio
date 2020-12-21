/* Demo purposes only */
$(document).ready(function () {
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  $(window).scroll(function () {
    var currentScl = $(window).scrollTop();
    console.log(currentScl);
    if (currentScl > 1000) {
      $(".skill .box").addClass("view");
    } else {
      $(".skill .box").removeClass("view");
    }
  });


  $("#portfolio .conts .cont").click(function(){
    var $hdtit = $(this).find(".hidden").text();
    var $tit = $(this).find(".txt").text();
    var $imgSrc = $(this).find("img").attr("src");
    var $findSite = $(this).find(".square").hasClass("site");

    if(!$findSite) {
      $(".pop-head a").css("display","none");
    }else {
      $(".pop-head a").css("display","inline-block");
    }
    $(".pop-head h3").text($hdtit);
    $(".pop-head p").text($tit);
    $(".pop-preview img").attr("src", $imgSrc);
    $(".pop-site").fadeIn();
  });
  $(".pop-site .pop-cont .close, .pop-site .pop-bg").click(function(){
    $(".pop-site").fadeOut();
  });
});
