$(document).ready(function () {
    const popup = $('#topAds');
    if (!localStorage.getItem('closedBanner')) {
        popup.show();
    } else {
        popup.hide();
    }
    $(document).on('click', '.close-ads', function () {
        localStorage.setItem('closedBanner', "true");
        $(this).parents('#topAds').hide();
        return false;
    });
});