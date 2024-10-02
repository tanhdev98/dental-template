$(document).ready(function () {
    var top = $('#sideAds').offset().top - parseFloat($('#sideAds').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#sideAds').outerHeight();

    $(window).scroll(function () {
        var y = $(this).scrollTop() + 30;
        if (y > top) {
            if (y < maxY) {
                $('#sideAds').css({
                    top: (y - top) + 'px'
                });
            } else {
                $('#sideAds').css({
                    top: (maxY - top - 30) + 'px'
                });
            }
        } else {
            $('#sideAds').removeAttr('style');
        }
    });
});
