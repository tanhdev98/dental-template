$(document).ready(function () {
    $(document).on('click', 'button[data-type="popup"]', function () {
        let idx = $(this).attr('id');
        $('.popup').removeClass('active');
        $('.popup[for="' + idx + '"]').addClass('active');
    });

    $(document).on('click', '.popup-close', function () {
        $(this).parents('.popup').removeClass('active');
    });

    $(document).on('click', '.group-radio label', function () {
        $('.group-radio label').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '[data-type="slideToggle"]', function () {
        $(this).closest('.popup').find('.box-support').slideToggle();
        $(this).toggleClass('active');
    });

    $(document).on('click', '#rsmPrintViewClose', function () {
        $('.rsm-print').hide();
    })
});
