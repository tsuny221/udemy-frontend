// const hero = new HeroSlider(".swiper-container");
// hero.start();

// const cb = function (el, isIntersecting) {
//   if (isIntersecting) {
//     const ta = new TweenTextAnimation(el);
//     ta.animate();
//   }
// };
// const so = new ScrollObserver(".tween-animate-title", this.cb);

// const _inviewAnimation = function (el, inview) {
//   if (inview) {
//     el.classList.add("inview");
//   } else {
//     el.classList.remove("inview");
//   }
// };
// const so2 = new ScrollObserver(".cover-slide", _inviewAnimation);

// const header = document.querySelector(".header");
// const _navAnimation = function (el, inview) {
//   if (inview) {
//     header.classList.remove("triggered"); //画面に入ったら
//   } else {
//     header.classList.add("triggered"); //画面から出たら
//   }
// };
// const so3 = new ScrollObserver(".nav-trigger", _navAnimation, {
//   once: false,
// });
document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
  main.destroy();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.sides = document.querySelectorAll(".side");
    this._observers = [];
    this._init();
  }

  set observers(val) {
    this.observers.push = val;
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this.hero = new HeroSlider(".swiper-container");
    Pace.on("done", this._paceDone.bind(this)); //ロードが遅い際にアニメーションが先に済んでしまうのを防ぐ
  }
  _paceDone() {
    this._scrollInit();
  }
  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove("triggered"); //画面に入ったら
    } else {
      this.header.classList.add("triggered"); //画面から出たら
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  }
  _sideAnimation(el, inview) {
    if (inview) {
      this.sides.forEach((side) => side.classList.add("inview"));
    } else {
      this.sides.forEach((side) => side.classList.remove("inview"));
    }
  }
  _textAnimation(el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }
  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop(); //画面外は表示なくす
    }
  }
  _destroyObservers() {
    this.observers.forEach((ob) => {
      ob.destroy(); //やりたくないアニメーションの停止ができる
    });
  }

  destroy() {
    this._destroyObservers();
  }

  _scrollInit() {
    this.observers = new ScrollObserver(
      ".nav-trigger",
      this._navAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation);
    this.observers = new ScrollObserver(".appear", this._inviewAnimation);
    this.observers = new ScrollObserver(
      ".tween-animate-title",
      this._textAnimation,
      { rootMargin: "-200px 0px" }
    );
    this.observers = new ScrollObserver(
      ".swiper-container",
      this._toggleSlideAnimation.bind(this),
      { once: false }
    );
    this.observers = new ScrollObserver(
      "#main-content",
      this._sideAnimation.bind(this),
      { once: false, rootMargin: "-300px 0px" } //初期状態では表示しないように（サイドの文字）
    );
  }
}
