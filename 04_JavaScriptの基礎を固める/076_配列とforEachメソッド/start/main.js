const arry = [1, 2, 3, 4, 5, 6];

//forEachの場合
arry.forEach(function (v, i, ary) {
  console.log(v, i, ary);
});
//以下のように簡潔にできる（引数や文が一行の場合）
arry.forEach((v) => console.log(v));
//for文よりforEachを使おう
//簡略化できるし簡潔にかける

//forの場合
for (let i = 0; i < arry.length; i++) {
  const v = arry[i]; //forEachに比べるとここが余分
  console.log(v);
}
