$(document).ready(function () {
    $(document).on('click', '.profile-setting', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.profile-setting-popup').toggleClass('active');
    });

    $(document).on('click', '.profile-setting-popup', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('.profile-setting').removeClass('active');
        $('.profile-setting-popup').removeClass('active');
    });
});
