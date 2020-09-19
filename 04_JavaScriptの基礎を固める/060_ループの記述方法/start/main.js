///ループ///

for (let i = 0; i < 5; i = i++) {
  console.log(i);
}
//let i = 0; i < 5;, i = i + 1はインクリメント
//0からはじめて5になるまで、順に一足し出力する

const arry = [1, 2, 3, 4, 5];
for (let i = 0; i < arry.length; i = i + 1) {
  console.log(arry[i]);
}
//配列の全ての要素をforでループして出力
