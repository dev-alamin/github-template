(function ($) {
    "use strict";


    //   owlcarousel     



    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".row.main-menu-bg").removeClass("sticky");
        } else {
            $(".row.main-menu-bg").addClass("sticky");
        }
    });
  
    
    
    //wow js animation

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 120, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();


    //Counter activation
    $('.project-1st').countTo({
        from: 0,
        to: 986,
        speed: 10000,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    $('.project-2nd').countTo({
        from: 0,
        to: 276,
        speed: 20000,
        refreshInterval: 100,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    $('.project-3rd').countTo({
        from: 0,
        to: 700,
        speed: 10000,
        refreshInterval: 100,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });

    //count to start end




    $(function () {
        $.scrollUp({
            scrollName: 'scroll-to-top', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });








    //Hero slider active
    //    $(".home-slide").owlCarousel({
    //        items: 1,
    //        loop: true,
    //        nav: true,
    //        dots: false,
    //        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //        smartSpeed: 1000,
    //        autoplay: false,
    //        autoHeight: false,
    //        singleItem: true,
    //        animateOut: 'slideOutDown',
    //        //    animateIn: 'slideOutUp',
    //        stopOnHover: true,
    //        autoplayHoverPause: true,
    //
    //
    //    });


    $('.home-slide').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //Testimonial slider active

    $('.testimonial-carousel-wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })





    $(".main-menu").slicknav({
        prependTo: ".responsive-menu-wrap"
    });

    
    
    
    
      $(".image-filtering-btn li").on('click', function () {

        $(".image-filtering-btn li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".parent-texting").isotope({
            filter: selector
        });

    });
    
    
    
    
    
    
    
    
    
    
    
    

})(jQuery);


$(".parent-texting").isotope({});

//using jQuery document ready function is must here
jQuery(document).ready(function ($) {
  

});
