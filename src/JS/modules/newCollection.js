import '../libs/slick.min.js';

export default function newCollection () {
    if (window.innerWidth < 1447 || document.querySelectorAll('new-collection__item').length > 5) {
        $('.new-collection').slick({
            dots: true,
            dotsClass: 'main-slider-pagination new-collection__pagination',
            slidesToShow: 4,
            infinite: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1264,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 930,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
    }
}