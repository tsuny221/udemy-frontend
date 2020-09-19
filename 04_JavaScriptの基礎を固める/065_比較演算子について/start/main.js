if (1 === "1") {
  console.log("this is true");
} else if (1 == "1") {
  console.log("this is in else if block");
} else {
  console.log("this is false");
}
//== データ型自動で一致させる === データ型も含めて比較

//0 undifined nullなどはfalseになる
// !num　true出ない場合、になるので結果はthis is true
const num = 0;
const bool = Boolean(num);
console.log(bool);

if (!num) {
  console.log("this is true");
} else {
  console.log("this is false");
}
