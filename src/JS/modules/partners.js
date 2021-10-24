import '../libs/slick.min.js';

export default function partners() {
    const partnersItems = document.querySelectorAll('.about-page-partners__item');

    if (window.innerWidth < 810 || partnersItems.length > 5 && partnersItems) {
        $('.about-page-partners__items').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
    }
}