// document.addEventListener("DOMContentLoaded", function () {
//   const el = document.querySelector(".animate-title");
//   console.log(el.innerHTML.trim());
//   const str = el.innerHTML.trim(); //中身のみ取り出し空白を削る
//   let concatStr = ""; //初期化
//   for (let c of str) {
//     c = c.replace(" ", "&nbsp"); //半角入れる場合
//     concatStr += `<span class="char">${c}</span>`; //+=で結合、concatStr + でもOK//classを加えて文字列をひとつづつfor文で表示していく
//   }
//   el.innerHTML = concatStr; //HTMLを上書きしてあげる
//   console.log(concatStr);
// });
// 出力結果
// <span class="char">A</span>
// <span class="char">N</span>
// <span class="char">I</span>
// <span class="char">M</span>
// <span class="char">A</span>
// <span class="char">T</span>
// <span class="char">I</span>
// <span class="char">O</span>
// <span class="char">N</span>

//reduceの書き換え
document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split(""); //配列に置き換え
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(" ", "&nbsp");
    return `${accu}<span class="char">${curr}</span>`;
  }, ""); //HTMLを上書きしてあげる
  console.log(concatStr);
});
