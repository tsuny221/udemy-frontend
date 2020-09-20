const arry = [1, 2, 3, 4, 5];
//reduceメソッド(配列の中身の足しあわせや文字列としての結合に使用)
arry.reduce(function (accu, curr) {
  //accu は蓄積 currはcurrent
  console.log(accu, curr);
  return accu + curr; //足しあわせていく
  //accuが前のループの足しあわせた数、currは次たしあわせるものがはいる
});
//出力結果
// 1 2
// 3 3
// 6 4
// 10 5

//currにarryの中身を全て渡すには
arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu * curr;
}, 10); //１０はaccu用の初期値
//出力結果
// 10 1
// 10 2
// 20 3
// 60 4
// 240 5

//文字列を分割して<a>,<b>のように分けて表示
const str = "animation";
const strArry = str.split("");

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  // return `${accu}<${curr}>`;
  return accu + "<" + curr + ">"; //最後のループがresultに入るので、accuに蓄積してあげないと最後の<n>のみしか表示しない
}, ""); //第二引数がないとaがかっこでかこまれない

console.log(result);
//出力結果<a><n><i><m><a><t><i><o><n>

//テンプレートリテラル
// return accu + "<" + curr + ">";これは
// `${accu}<${curr}>`に書き換え可能
