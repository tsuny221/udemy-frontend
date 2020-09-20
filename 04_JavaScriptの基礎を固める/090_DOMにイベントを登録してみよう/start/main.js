//ボタンの変化
const btn = document.querySelector("#btn");
function hello() {
  alert("hello");
  this.style.color = "red";
}
btn.addEventListener("click", hello);

//h1要素の変化（二つ以上の関数の実行も可能）
const h1 = document.querySelector("h1");

function changeColor() {
  h1.style.color = "red";
}
function changeBgColor() {
  h1.style.backgroundColor = "green";
}

btn.addEventListener("click", changeColor); //btnに対してaddEventListenerを行う(第一引数:clickの時、第二引数:行うイベントの関数名)
btn.addEventListener("click", changeBgColor);
btn.removeEventListener("click", changeBgColor); //行わない

btn.onclick = changeColor; //イベントハンドラ。これには関数が一つしか登録できない。(上書きされてしまう）なのでaddEventListenerのほうがよい
