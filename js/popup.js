$(document).ready(function () {
    $(document).on('click', 'button', function () {
        let idx = $(this).attr('id');
        $('.popup[for="' + idx + '"]').toggleClass('active');
    });
});
