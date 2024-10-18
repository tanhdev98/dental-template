$(document).ready(function () {
    $(document).on('click', '#icon-side-nav', function () {
        $('#side-nav').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).addClass('close').appendTo('#side-nav').css({
                "position": "absolute",
                'top': '20px',
                'left': '0px',
                'right': 'auto',
            });
        }
        else {
            $(this).removeClass('close').appendTo('#top-sub-page').css({
                'left': 'auto',
                'right': '15px'
            });
        }
    });
});