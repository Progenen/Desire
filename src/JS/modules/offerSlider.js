import'../libs/slick.min.js';

export default function offerSlider () {
    if (document.querySelector('.offer__slider')) {
        $('.offer__slider').slick({
            dots: true,
            infinite: true,
            fade: true,
            arrows: false,
            dotsClass: 'main-slider-pagination',
            speed: 200,
        });
    }
}