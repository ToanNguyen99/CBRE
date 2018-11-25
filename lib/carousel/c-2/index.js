 if ($(window).width() > 992) {
     $(function() {
         if ($('.canhcam-carousel-2 .list-items').length) {
             $('.canhcam-carousel-2 .list-items').owlCarousel({
                 animateIn: 'fadeIn',
                 animateOut: 'fadeOut',
                 items: 2,
                 loop: false,
                 center: false,
                 margin: 30,
                 navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
                 nav: true,
                 dots: false,
                 autoplay: false,
                 autoplayTimeout: 5000,
                 autoplayHoverPause: true,
                 callbacks: true,

             });
         }

     });
 }
 $(document).ready(function() {
     $('.canhcam-carousel-2 .list-items').children(':lt(2)').show()
     $('.canhcam-carousel-2 .showmore').on('click', function() {
         $('.canhcam-carousel-2 .list-items .item').show('slow')
         $(this).hide()
         $('.canhcam-carousel-2 .showless').show()
     })
     $('.canhcam-carousel-2 .showless').on('click', function() {
         $('.canhcam-carousel-2 .list-items .item').hide()
         $('.canhcam-carousel-2 .list-items .item:lt(2)').show()
         $(this).hide()
         $('.canhcam-carousel-2 .showmore').show()
     })
 });