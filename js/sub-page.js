$(document).ready(function () {
    $('.tabs li a.active').parent().css('zIndex', '1');
    $(document).on('click', '.item-has-child', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active-child');
        $(this).children('.sub-menu').slideToggle().toggleClass('active');
    });


    $(document).on('click', '.sub-menu *', function (e) {
        e.stopPropagation();
    });
});
