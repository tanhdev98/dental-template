

$(document).ready(function () {
    $('.accordion-question').on('click', function () {
        $('.accordion-ans').slideUp();
        $('.accodion-item').removeClass('active');
        $(this).closest('.accodion-item').addClass('active').find('.accordion-ans').slideDown();
    });
});