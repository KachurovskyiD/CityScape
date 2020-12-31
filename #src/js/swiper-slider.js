// Slider

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000
})