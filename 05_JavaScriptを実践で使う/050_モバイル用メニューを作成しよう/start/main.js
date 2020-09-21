class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");

    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }
  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click"; //スマホではタッチイベントにする.スマホではwindow.ontouchstartがあるのでその存在で条件分岐
  }
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this)); //clickイベントをカスタマイズできるようにする
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this)); //coverをclickしても閉じる
  }
}

new MobileMenu();
