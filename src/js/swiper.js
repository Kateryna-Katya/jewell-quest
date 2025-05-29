import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
    let reviewsSwiper = null;

    function initReviewsSwiper() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1439 && !reviewsSwiper) {
            reviewsSwiper = new Swiper('.reviews-swiper', {
                slidesPerView: 3,
                spaceBetween: 24,
                loop: true,
                slideClass: 'reviews-swiper-slide',
                wrapperClass: 'reviews-swiper-wrapper',
                direction: 'horizontal',
            });
        } else if (screenWidth < 1439 && reviewsSwiper) {
            reviewsSwiper.destroy(true, true);
            reviewsSwiper = null;
        }
    }

    // Виклик при завантаженні
    initReviewsSwiper();

    // Слухай resize
    window.addEventListener('resize', initReviewsSwiper);

    // Gallery Swiper – постійно активний
    new Swiper('.gallery-swiper', {
        breakpoints: {
            374: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1439: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },
        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',
    });
});