$(document).ready(function () {
    $(document).on('click', 'button', function () {
        let idx = $(this).attr('id');
        $('.popup[for="' + idx + '"]').toggleClass('active');
    });

    $(document).on('click', '.popup-close', function () {
        $(this).parent().toggleClass('active');
    });

    $(document).on('click', '.support', function () {
        $('.popup-support').toggleClass('active');
    });
});
