; (function ($) {
    $(document).ready(function () {
        $(document).on('click', '.wrap-tab-form button:not(button.active)', function () {
            $('.wrap-tab-form button').toggleClass('active');
        })
    });

})(jQuery);
