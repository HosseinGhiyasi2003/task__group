const swiperSlide = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    spaceBetween: 10,

  },

  slidesPerView: 1,
  breakpoints: {
    '576': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    '1200': {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});