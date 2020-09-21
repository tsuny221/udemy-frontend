class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el,{
      // Optional parameters
      // direction: "vertical", //上下方向
      loop: true,
      grabCursor: true,
      effect: "coverflow", //fadeとか
      centeredSlides: true,
      sildesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2, //windowサイズによって枚数変える
        },
      },
    });
  }
  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false, //手動で動かしたあとも自動変化ありにする
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
