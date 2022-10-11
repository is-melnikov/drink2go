const swiper = new Swiper ('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-forward',
    prevEl: '.swiper-button-back',
  },
})
