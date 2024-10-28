$(document).ready(function () {
    $('.nav-wrap .icon-hamburger-bar').click(function () {
        $('.side-nav-res').toggleClass('showMenu');
        $(this).toggleClass('close active');
        $('.full-screen-overlay').addClass('overlay-block');
        console.log('aaaaaaa');
    });
    $('.frame-section .icon-hamburger-bar,.full-screen-overlay').click(function () {
        $('.full-screen-overlay').removeClass('overlay-block');
        $('.side-nav-res').removeClass('showMenu');
        $('.nav-wrap .icon-hamburger-bar').removeClass('close active');
    });
    $('.side-nav-res .frame-section .menu-nav-child').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $(this).find('.submenu').slideToggle().toggleClass('active');
    });
});