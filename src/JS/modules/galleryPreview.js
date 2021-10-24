import '../libs/slick.min.js';

export default function galleryPreview () {
    if (document.querySelector('.gallery-preview')) {
        $('.gallery-preview').slick({
            dots: true,
            dotsClass: 'main-slider-pagination gallery-preview__pagination',
            slidesToShow: 9,
            slidesToScroll: 9,
            infinite: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 930,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        })
    }
}