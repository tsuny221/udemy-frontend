document.addEventListener("DOMContentLoaded", function () {
  const ta = new TextAnimation(".animate-title"); //初期化(インスタンス化)
  const ta2 = new TextAnimation(".animate-title-2"); //初期化(インスタンス化)
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  //プライベートメソッド(クラスの中のみ)実際は呼べちゃうけどエンジニア間での暗黙の了解
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  //パブリックメソッド(他でも使用可能)
  animate() {
    this.el.classList.toggle("inview"); //()中がついてたら削除ついてなかったら追加
  }
}
