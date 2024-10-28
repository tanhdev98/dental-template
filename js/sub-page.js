$(document).on('click', '.item-has-child', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $(this).children('.sub-menu').slideToggle().toggleClass('active');
});


$(document).on('click', '.sub-menu *', function (e) {
    e.stopPropagation();
});
