//コンソールに入力してみよう
document.querySelector("#main-title"); //#main-titleの中身が取得可能（querySelectorはDOMツリーの中を検索してくれるメソッド）
const h1 = document.querySelector("#main-title");
undefined;
h1.innerHTML;
("JavaScript基礎");
h1.innerHTML = "bbbbbbb";
("bbbbbbb");
h1.innerHTML = 'AAAAA <span style="color: blue;">BBBBB</span>';
('AAAAA <span style="color: blue;">BBBBB</span>');
h1.textContent = 'AAAAA <span style="color: blue;">BBBBB</span>';
('AAAAA <span style="color: blue;">BBBBB</span>');
h1.style.color = "red";
("red");
h1.style.backgroundColor = "gray";
("gray");
h1.classList.add("underline"); //classにunderline追加
("underline");

//liを赤くして、liの一番上だけ黒
const ul = document.querySelector("ul");
ul.style.color = "red";
const firstLi = ul.querySelector("li");
firstLi.style.color = "black";

//ループで一つ一つの要素の変更を行う
const li = document.querySelectorAll("li");
li[0].style.color = "purple";
("purple"); //これだと１番目だけ
li.forEach((node) => (node.style.color = "purple")); //nodeに要素が入っているのでforEachで変更
