const modal = document.querySelector(".modal");
// console.log(modal);

// modal.addEventListener("mouseover", function () {
//   modal.style.backgroundColor = colors[0];
// });
// modal.addEventListener("mouseover", function () {
//   modal.style.backgroundColor = "";
// });
//  for (let i = 0; i < color.length; i++) {
//     modal.style.backgroundColor = color[i];
//     i++;
// let i = 0;
// function change() {
//   const color = ["black", "red", "white"];
//   modal.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);
// setInterval(change, 3000);
// const changeColor = ["red", "black", "black"];
// function change() {
//   for (i = 0; i < changeColor.length; i++) {
//     modal.style.backgroundColor = changeColor[i];
//   }
// }

// changeColor.forEach(function (modal, index) {
//   modal.style.backgroundColor = changeColor[index];
// });
// let i = 0;
// function change() {
//   const color = ["black", "red", "white"];
//   modal.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change(), 3000);

// function change() {
//   const color = ["black", "red", "white"];
//   for (let i = 0; i < color.length; i++) {
//     modal.style.backgroundColor = color[i];
//   }
//   change();
// }
// setInterval(change, 1000);
// function change() {
//   const color = ["black", "red", "white"];
//   if ((i = color.length)) {
//     let i = 0;
//     modal.style.backgroundColor = color[i];
//   }
//   //   modal.style.backgroundColor = color[i];
//   //   change();
// }
// setInterval(change, 1000);
// let i = 0;
// function change() {
//   const color = ["black", "red", "white"];
//   modal.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 3000);

const color = ["black", "red", "white", "pink"];
let i = 0;
function change() {
  modal.style.backgroundColor = color[i % 4];
  i++;
}
setInterval(change, 1000);
