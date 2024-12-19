$(document).ready(function () {
  $(document).on("click", ".menu .icon-popup-mega-menu", function () {
    $(this).toggleClass("active");
    $(".mega-menu").toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).find("i").addClass("icon-x").removeClass("icon-hamburger-bar");
    } else {
      $(this).find("i").removeClass("icon-x").addClass("icon-hamburger-bar");
    }
  });

  $(document).on("click", function (event) {
    if ($(".icon-popup-mega-menu").hasClass("active")) {
      if (
        !$(event.target).closest(".mega-menu").length &&
        !$(event.target).closest(".icon-popup-mega-menu").length
      ) {
        $(".mega-menu").removeClass("active");
        $(".icon-popup-mega-menu").removeClass("active");
        $(this)
          .find("i.icon-x")
          .removeClass("icon-x")
          .addClass("icon-hamburger-bar");
      }
    }
  });
  $(document).on("click", ".item-has-child", function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
    $(this).children(".sub-menu").slideToggle().toggleClass("active");
  });

  // search tabs evenet
  $('#searchTabs li a').click(function(e) {
    e.preventDefault();
    $('#searchTabs li a').removeClass('active');
    $(this).addClass('active');

    var elIndex = $(this).parent().index();
    if (elIndex === 0) {
      $('#recruitment-news').stop().show();
      $('#talent-news').stop().show();
      $('#notices-news').stop().show();
      $('#view-news').stop().show();
    } else if (elIndex === 1) {
      $('#recruitment-news').stop().show();
      $('#talent-news').stop().hide();
      $('#notices-news').stop().hide();
      $('#view-news').stop().hide();
    } else if (elIndex === 2) {
      $('#recruitment-news').stop().hide();
      $('#talent-news').stop().show();
      $('#notices-news').stop().hide();
      $('#view-news').stop().hide();
    } else if (elIndex === 3) {
      $('#recruitment-news').stop().hide();
      $('#talent-news').stop().hide();
      $('#notices-news').stop().show();
      $('#view-news').stop().hide();
    } else if (elIndex === 4) {
      $('#recruitment-news').stop().hide();
      $('#talent-news').stop().hide();
      $('#notices-news').stop().hide();
      $('#view-news').stop().show();
    }
  });
});
