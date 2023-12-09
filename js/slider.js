$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        zIndex: 2,
        dots: true,
        appendDots: $('.article-order__navigation'),
        speed: 200,
        draggable: false,
        swipe: false,
        lazyLoad: 'ondemand',
    });

    $('.slider-big').slick({
        arrows: false,
        dots: true,
        draggable: false,
        swipe: true,
        fade: true,
        zIndex: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        lazyLoad: 'ondemand',
    });

    $('.slider-hero').slick({
        arrows: false,
        fade: true,
        zIndex: 1,
        dots: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        lazyLoad: 'ondemand',
        centerMode: true,
    });
});
