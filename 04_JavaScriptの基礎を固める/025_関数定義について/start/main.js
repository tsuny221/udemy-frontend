//関数（使い回ししやすくする）

function hello(name, age) {
  // let name = "Code Mafia";この部分は（）に入れれば同じこと
  console.log("hello" + name + age); //ageやnameを引数と呼ぶ　関数に渡される値が引数
  return name + age; //関数から返される値が戻り値
}

//これも上と同じ。無名関数を変数に代入している（無名関数：コールバック関数で出てくる）
const hello = function (name, age) {
  // let name = "Code Mafia";この部分は（）に入れれば同じこと
  console.log("hello" + name + age); //ageやnameを引数と呼ぶ　関数に渡される値が引数
  return name + age; //関数から返される値が戻り値
};

hello("Code Mafia");
const returnVal = hello("Code Mafia 2", 20);
console.log(returnVal);
