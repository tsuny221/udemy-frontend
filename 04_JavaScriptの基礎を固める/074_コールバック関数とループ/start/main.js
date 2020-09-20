// const arry = [1, 2, 3, 4, 5];

// function forEach(ary) {
//   for (let i = 0; i < ary.length; i++) {
//     console.log(ary[i]);
//   }
// }

// forEach(arry);
// //aryにarryが入る

//コールバック関数で書き換え
const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    // console.log(callback); //logの関数が入っているのがわかる
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}
function double(val) {
  val = val * 2;
  log(val);
}
forEach(arry, double);
//aryにarryが入る doubleにval = val * 2;log(val);がはいる　つまりarryを２倍にしてfor文を行う
