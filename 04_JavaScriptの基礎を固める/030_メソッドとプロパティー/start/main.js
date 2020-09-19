///プロパティ(()なし）///
//length(プロパティ。ドット機能で取得可能)

let hello = "hello world";
console.log(hello.length);

///method(メソッド(()あり）特定の処理を行うもの。この場合文字列オブジェクトのメソッドがいくつか初期登録されているので使えている)///
//toUppercase大文字に変化
console.log(hello.toUpperCase());
//subString(先頭から5文字切り取り)
console.log(hello.substring(0, 5));
//slice(特定の文字数で切り取り)
console.log(hello.slice(0, 5));
//split(文字の分割この場合半角スペースで分割)
console.log(hello.split(" "));

//methodは自分で定義も可能
