function hello(name = "Tom") {
  console.log("hello" + name);
}

const hello = function (name = "Tom") {
  console.log("hello" + name);
};

hello("Code Mafia");
hello("Code Mafia 2");
hello(); //defaultの引数を設定できる

///アロー関数///
const hello = (name) => console.log("hello" + name); //引数一つなら()いらん

const hello = (name, age) => console.log("hello" + name + age); //引数二つつなら()いる

const hello = (name, age) => {
  console.log("hello" + name + age);
  console.log("hello" + name + age);
}; //中身が二文以上なら{}がいる

const hello = (name, age) => {
  return 40;
}; //helloに40

const hello = (name, age) => 40; //helloに40

//ループさせる場合の記述の簡略化
const arry = [1, 2, 3, 4, 5, 6];

arry.forEach(function (value) {
  console.log(value);
});
//上を簡略化できる
arry.forEach((value) => console.log(value));

hello("Code Mafia", 10);
