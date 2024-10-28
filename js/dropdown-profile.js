$(document).ready(function () {
    $(document).on('click', '.profile-setting', function (e) {
        $(this).toggleClass('active');
        $(this).children('.sub-menu').slideToggle().toggleClass('active');
        $(this).parent().find('.profile-setting-popup').toggleClass('active');
    });
});
