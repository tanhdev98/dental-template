$(document).ready(function () {
    $(document).on('click', '#icon-side-nav', function () {
        $('#side-nav').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).addClass('close').appendTo('#side-nav').css('position', 'absolute').css('top', '20px').css('left', '0px').css('right', 'auto');
        }
        else {
            $(this).removeClass('close').appendTo('#top-sub-page').css('position', 'fixed').css('top', '50px').css('right', '15px').css('left', 'auto');
        }
    });
});