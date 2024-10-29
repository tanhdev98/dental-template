$(document).ready(function () {
    $('.nav-wrap .icon-hamburger-bar').click(function () {
        $('.side-nav-res').toggleClass('showMenu');
        $(this).toggleClass('close active');
        $('.full-screen-overlay').addClass('overlay-block');
    });
    $('.frame-section .icon-hamburger-bar,.full-screen-overlay').click(function () {
        $('.full-screen-overlay').removeClass('overlay-block');
        $('.side-nav-res').removeClass('showMenu');
        $('.nav-wrap .icon-hamburger-bar').removeClass('close active');
    });
    $('.side-nav-res .frame-section .menu-nav-child').click(function (e) {
        e.stopPropagation();
        const isActive = $(this).hasClass('active');
        $('.submenu').slideUp().removeClass('active');
        $('.side-nav-res .frame-section .menu-nav-child').removeClass('active');
        if (!isActive) {
            $(this).toggleClass('active');
            $(this).find('.submenu').slideDown().toggleClass('active');
        }
    });


});