function hello(name) {
  console.log("hello" + name());
}

function getName() {
  return "Code Mafia";
}
hello(getName);
//出力helloCode Mafia
//nameにgetNameという関数が渡ることになるのでname()とすると表示できる
//hello(name)のname部分をコールバック関数という(関数がもどってはいっているので）

function hello(callback) {
  console.log(callback);
  console.log("hello" + callback());
}

function getName() {
  return "Code Mafia";
}
hello(getName());
//出力Code Mafia

function hello(callback, lastname) {
  console.log("hello" + callback(lastname));
}

hello(function (name) {
  return "Code" + name;
}, "Mafia");
//出力Code Mafia
//lastnameがnameに入る;

function doSomething(a, b, callback) {
  console.log(a);
  console.log(b);
  console.log(callback);
  const result = callback(a, b);
  console.log(result);
}
function multiply(a, b) {
  return a * b;
}

doSomething(2, 2, multiply);
//２＊２をして４というresultが出る
