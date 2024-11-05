; (function ($) {
    $(document).ready(function () {
        $(document).on('click', '.tabs-form button:not(button.active)', function () {
            $('.tabs-form button').toggleClass('active');
        })
    });

})(jQuery);
