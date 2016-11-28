$('.card-header').click(function() {
    $('.fa-accordion').removeClass('active-fa');
    if ($(this).hasClass('collapsed')) {
        $(this).find('.fa-accordion').addClass('active-fa');
    }
})
