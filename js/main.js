$(document).ready(function () {
    "use strict";
    /*-------------------------------------------------------------------------------
    javaScript for sticky header
    -------------------------------------------------------------------------------*/
    $(".header_area").sticky();


    $(".navbar-toggler").on("click", function () {
        $(".header_area").toggleClass("active");
    });


    /*-------------------------------------------------------------------------------
    about Slider 
    -------------------------------------------------------------------------------*/
    $('.about-thumb-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false
    });

    /*-------------------------------------------------------------------------------
    clients Slider 
    -------------------------------------------------------------------------------*/
    $('.clients-slider-wrap').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        autoHeight: true,
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*-------------------------------------------------------------------------------
    features Slider 
    -------------------------------------------------------------------------------*/
    $('.features-slider-wrap').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        autoHeight: true,
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1441: {
                items: 5
            }
        }
    });

    /*-------------------------------------------------------------------------------
    clients Slider 
    -------------------------------------------------------------------------------*/
    $('.case-studies-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    /*-------------------------------------------------------------------------------
    mobile Slider 
    -------------------------------------------------------------------------------*/
    // $('.slider_active').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     autoplayHoverPause: false,
    // });

    /*-------------------------------------------------------------------------------
    Javascript for magnificPopup
    -------------------------------------------------------------------------------*/
    $('.video-play-button').magnificPopup({
        type: 'video'
    });


    /*---------------------------------
    Javascript for wow animation
    ----------------------------------*/
    new WOW().init();

    $('[data-toggle="tooltip"]').tooltip({
        'placement': 'top'
    });
    $('[data-toggle="popover"]').popover({
        trigger: 'hover',
            'placement': 'top'
    });
});


/*-------------------------------------------------------------------------------
Add class in media query 
-------------------------------------------------------------------------------*/
var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww > 767) {
        $('.pricing-area .nav.nav-tabs').removeClass('slider_active');
    } else {
        $('.pricing-area .nav.nav-tabs').addClass('slider_active');
    };
};

$(window).resize(function () {
    alterClass();
});

//Fire it when the page first loads:
alterClass();