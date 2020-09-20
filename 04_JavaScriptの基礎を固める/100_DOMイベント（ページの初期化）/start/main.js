const dcl = document.querySelector(".dcl");
const load = document.querySelector(".load");

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "red";
  dcl.classList.add("done");
}); //windowでもOK

window.addEventListener("load", function () {
  load.classList.add("done");
}); //documentは登録できない
