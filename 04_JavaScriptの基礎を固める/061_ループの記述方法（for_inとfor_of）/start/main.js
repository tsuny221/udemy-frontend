const arry = [1, 2, 3, 4, 5, 6];

//for inで配列の添字取得 iは添字という意味が強い
for (let i in arry) {
  console.log(i, arry[i]);
}

//for ofで配列の値取得 vは値という意味
for (let v of arry) {
  console.log(v);
} //arryの値を取得
