//リファクタリング
class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options); //二つをassignでマージする
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true); //交差している
          if (this.once) {
            observer.unobserve(entry.target); //オプションとして設定できるようにする
          }
        } else {
          this.cb(entry.target, false); //交差していない
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    this.io.POLL_INTERVAL = 100; //IntersectionObserverが使えないブラウザ用に設定

    this.els.forEach((el) => this.io.observe(el));
  }

  //開放できるようにする
  destroy() {
    this.io.disconnect();
  }
}
