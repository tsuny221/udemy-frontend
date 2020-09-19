// const arry = new Array(1, 2, 3, 4, 5, 6);
const arry = [1, 2, 3, 4, 5, 6, "moji", false]; //上と同じだけどこの定義の仕方がメジャー
arry[5] = 8; //constでも中身の追加や書き換えは可能
// const arry = [2, 2, 2, 2, 2]; //定義のし直しは不可

//メソッドとプロパティ使える
console.log(arry.length);
arry.push("last item"); //追加
arry.unshift("new item"); //先頭に追加
const val = arry.shift(); //先頭を削除
const val2 = arry.pop(); //一番最後のの値を削除（valに削除した値を代入してみる）
console.log(arry); //表示
console.log(val); //先頭の削除された文字を表示
console.log(val2); //末尾の削除された文字を表示

//ちなみArrayとarrayは予約語になりバグを生むので変数にしないように
