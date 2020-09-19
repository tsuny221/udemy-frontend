//オブジェクトリテラル（オブジェクトの初期化）//
const person = {
  name: "Code Mafia", //文字列オブジェクト
  arry: ["Code", "Mafia"], //配列オブジェクト
  age: 32,
  gender: "male",
  interests: {
    sports: "soccer",
    music: "piano",
  }, //オブジェクトの中にオブジェクトもOK

  //オブジェクトはメソッドも定義可能
  getFullName: function () {
    console.log(this.arry[0] + this.arry[1]);
  },
};
//ドット記法で値の取得
console.log(person.name);
console.log(person.name[0]); // ０番目の文字表示
console.log(person.interests.music);

const ageKey = "age";
person[ageKey] = 12; //ブラケットは変数として保存する場合
person.age = 12; //constでもオブジェクトの中は変更は可能
console.log(person.age); //12
console.log(person[ageKey]); //12
person.getFullName(); //フルネームの取得可能
