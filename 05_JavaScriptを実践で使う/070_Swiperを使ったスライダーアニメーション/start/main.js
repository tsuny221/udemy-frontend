var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical", //上下方向
  loop: true,
  effect: "coverflow", //fadeとか

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
