document.addEventListener("DOMContentLoaded", function () {
  const ta = new TextAnimation(".animate-title"); //TextAnimationでも動けば継承ができているということ（htmlのクラスも変更してね）
  ta.animate(); //メソッド
});

class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle("inview");
  }
}
//クラスの継承
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el); //親のconstractorが呼び出される
    //ここにさらに追加も可能
    this.DOM.chars = this.DOM.el.querySelectorAll(".char");
  }

  animate() {
    this.DOM.el.classList.add("inview");
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, 0.6, {
        ease: Back.easeOut,
        delay: i * 0.05,
        startAt: { y: "-50%", opacity: 0 }, //初期位置
        y: "0%",
        opacity: 1,
      }); //別のライブラリTweenMaxを利用
    });
  }
}
