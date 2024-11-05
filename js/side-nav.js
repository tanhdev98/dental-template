$(document).ready(function () {
    $(document).on('click', '#icon-side-nav', function () {
        $('.overlay').toggleClass('active');
        $('#side-nav').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).addClass('close').appendTo('#side-nav').css({
                "position": "absolute",
                'top': '10px',
                'left': '5px',
                'right': 'auto',
            });
        }
        else {
            $(this).removeClass('close').appendTo('#top-sub-page').css({
                'left': 'auto',
                'right': '15px',
                'top': '15px'
            });
        }
    });
    $(document).on('click', '.overlay', function () {
        $(this).toggleClass('active');
        $('#side-nav, #icon-side-nav').toggleClass('active');
        $('#icon-side-nav').removeClass('close').appendTo('#top-sub-page').css({
            'left': 'auto',
            'right': '15px',
            'top': '15px'
        });
    });
});