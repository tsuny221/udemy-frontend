// var, let, const →　let, constを基本使う

//var letは書き換えられる
let name = "Tom";
name = "Tim";
console.log("hello" + name);

//constは書き換えられない
const age = 1;
age = 2;
console.log(age);

//データ型
//Number, String, Boolean. Undifined, Null, Symbol

let variable = "str";
variable = 12;
variable = false;
variable = undefined;

console.log(typeof variable);
//など格納する値によって変数の型が変わる動的片付け言語
