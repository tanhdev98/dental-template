$(document).ready(function () {
  var offsetTop =
    $("#topAds").outerHeight(true) +
    $("#header").outerHeight(true) +
    $("#navbar").outerHeight(true) +
    60;

  function calculateLeftPos() {
    var containerWidth = $(".container").width();
    var marginLeft = parseInt($(".container").css("margin-left"), 10);
    if ($(window).width() < 1920) {
      return containerWidth + 30 + marginLeft;
    } else {
      return containerWidth + 175 + marginLeft;
    }
  }

  var leftPos = calculateLeftPos();

  $("#sideAds").css({
    position: "fixed",
    top: offsetTop + "px",
    left: leftPos + "px",
  });

  $(window).scroll(function () {
    var scrollY = $(this).scrollTop();
    leftPos = calculateLeftPos();

    if (scrollY > offsetTop - 60) {
      $("#sideAds").css({
        position: "fixed",
        top: "60px",
        left: leftPos + "px",
      });
      $(".back-to-top").show();
    } else {
      $("#sideAds").css({
        position: "absolute",
        top: offsetTop + "px",
        left: leftPos + "px",
      });
      $(".back-to-top").hide();
    }
  });

  $(window).resize(function () {
    leftPos = calculateLeftPos();
    $("#sideAds").css("left", leftPos + "px");
  });
});
