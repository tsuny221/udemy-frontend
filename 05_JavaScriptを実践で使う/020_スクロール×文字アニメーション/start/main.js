document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".animate-title"); //elsはelementsの略
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target); //初期化　//entry.targetは交差したHTML要素
        ta.animate(); //animateを動かす
        observer.unobserve(entry.target); //監視を切る
      } else {
      }
    });
    // alert('intersecting');
  };
  const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1],
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});
