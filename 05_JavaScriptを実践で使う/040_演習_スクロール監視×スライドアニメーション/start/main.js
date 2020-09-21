document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("inview"); //ここ変えるだけでスクロールイベントが行える
    }
  };

  const so = new ScrollObserver(".cover-slide", cb);
});
