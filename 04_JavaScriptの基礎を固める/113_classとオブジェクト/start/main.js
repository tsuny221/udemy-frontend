//オブジェクト(keyとvalueninarumono)
const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log("hello");
  },
};
console.log(obj.first_name);
obj.printFullName();

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  } //初期化処理

  printFullName() {
    console.log("hello");
  } //function省略可能
}

const obj2 = new MyObj();
//同じものが表示
obj.printFullName();
obj2.printFullName();
