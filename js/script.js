$(window).load(function() {
    $('.slider')._TMS({
        preset: 'diagonalExpand',
        easing: 'easeOutQuad',
        duration: 800,
        pagination: true,
        slideshow: 6000
    });
});
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
        if (jQuery('.totop').hasClass('visible') == false) {
            jQuery('.totop').stop().animate({
                right: '0px'
            }, function() {
                jQuery('.totop').addClass('visible')
            });
        }
    } else {
        if (jQuery('.totop').hasClass('visible') == true) {
            jQuery('.totop').stop().animate({
                right: '-300px'
            }, function() {
                jQuery('.totop').removeClass('visible')
            });
        }
    }
});
