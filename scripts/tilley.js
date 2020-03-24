$(document).ready(function () {

    // Collapsable Header
    // On window scroll
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        // If not at the top of the page
        if (scrollPos > 0) {
            // Collpase the header
            $('header').addClass('collapsed');
        } else {
            // Otherwise, show the full header
            $('header').removeClass('collapsed');
        }
    });

    // Sliders
    // Home Slider
    $('#home .slider').slick({
        dots: true,
        arrows: false
    });

});