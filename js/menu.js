$(document).ready(function () {
    $(document).on('click', '.menu .icon-popup-mega-menu', function () {
        $(this).toggleClass('active');
        $('.mega-menu').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('i').addClass('icon-x').removeClass('icon-hamburger-bar');
        }
        else {
            $(this).find('i').removeClass('icon-x').addClass('icon-hamburger-bar');
        }
    });

    $(document).on('click', function (event) {
        if ($('.icon-popup-mega-menu').hasClass('active')) {
            if (!$(event.target).closest('.mega-menu').length && !$(event.target).closest('.icon-popup-mega-menu').length) {
                $('.mega-menu').removeClass('active');
                $('.icon-popup-mega-menu').removeClass('active');
                $(this).find('i.icon-x').removeClass('icon-x').addClass('icon-hamburger-bar');
            }
        }
    });

});
