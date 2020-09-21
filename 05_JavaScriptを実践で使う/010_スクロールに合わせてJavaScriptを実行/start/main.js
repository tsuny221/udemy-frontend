const child = document.querySelector(".child");
const cb = function (entries, obserever) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //要素が入った時
      console.log("inview");
      entry.target.classList.add("inview");
      // obserever.unobserve(entry.target);
    } else {
      //要素が出た時
      console.log("outview");
      entry.target.classList.remove("inview");
    }
  });
  // alert("intersecting"); //オブジェクトchildがwindowに初期では入ってきた時と出て行った時両方
};

//様々なオプション
const options = {
  root: null, //IntersectionObserverは現在の画面に入るか入らないかrootに親要素など入れるとその要素との交差で変化させることも可能

  rootMargin: "-300px 0px 0px 0px", //上から300pxが余白となって、その内側に入ってきた時に変化。つまり少し前の状態が見える。変化させたくない部分を余白にする(pxをつける必要がある)

  //オブジェクトのどこが交差点に当たった時かを指定できる
  // threshold: 0 //初期値、上から入る時下部,下から入る時上部が交差点になる
  // threshold: 1//逆になる
  threshold: [0, 0.5, 1], //[上,真ん中,下]それぞれでコールバック処理
};
//監視を開始する
const io = new IntersectionObserver(cb, options); //初期化
io.observe(child); //ioに監視したい対象のDOM(ここでは.child)を登録
io.observe(child1);
io.observe(child2);
