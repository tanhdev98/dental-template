; (function ($) {
    $(document).ready(function () {
        $(document).on('click', '.tabs-form button:not(button.active)', function () {
            $('.tabs-form button').toggleClass('active');
        })
    });

})(jQuery);

$(function() {
    $('#loginTabs li a').click(function() {
        var elIndex = $(this).parent().index();

        $('#loginTabs li a').removeClass('active');
        $(this).addClass('active');
        
        if (elIndex === 0) {
        } else {}
    })
})