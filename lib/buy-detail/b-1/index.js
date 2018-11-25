$(function() {
    if ($('.canhcam-details .detail-1 .owl-carousel').length) {
        $('.canhcam-details .detail-1 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: true,
            center: false,
            // padding: 10,
            margin: 30,
            navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                992: {
                    nav: true,
                    dots: false
                }

            }
        });
    }

});