$(document).on('click', '.view-more-btn', function () {
    const $this = $(this);
    const $contentTerms = $this.closest('li').find('.content-terms');
    const $currentActiveBtn = $('.view-more-btn.active');
    const $currentActiveLi = $('li.active');

    if (!$this.hasClass('active')) {
        $currentActiveBtn.removeClass('active');
        $currentActiveLi.find('.content-terms').slideUp();
        $currentActiveLi.removeClass('active');

        $this.addClass('active').closest('li').addClass('active');
        $contentTerms.stop(true, true).slideDown();
    } else {

        $this.removeClass('active').closest('li').removeClass('active');
        $contentTerms.stop(true, true).slideUp();
    }
});
