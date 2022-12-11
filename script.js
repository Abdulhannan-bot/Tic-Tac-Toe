`use strict`;

const box = document.querySelectorAll(`.column`);

const row1 = document.querySelectorAll(`.row-1`);
const row2 = document.querySelectorAll(`.row-2`);
const row3 = document.querySelectorAll(`.row-3`);

const column1 = document.querySelectorAll(`.column-1`);
const column2 = document.querySelectorAll(`.column-2`);
const column3 = document.querySelectorAll(`.column-3`);

const diagonalR = document.querySelectorAll(`.diag-r`);
const diagonalL = document.querySelectorAll(`.diag-l`);


const player1 = document.querySelector(`.pl1`);
const player2 = document.querySelector(`.pl2`);

const pack = [
  row1,
  row2,
  row3,
  column1,
  column2,
  column3,
  diagonalR,
  diagonalL,
];

const check = function (pack) {
  pack.forEach((node) => {
    if (
      (node[0].textContent + node[1].textContent + node[2].textContent ==
        "XXX") ||
      (node[0].textContent + node[1].textContent + node[2].textContent == "OOO")
    ) {
      node.forEach((x) => (x.style.backgroundColor = "green"));
      player1.textContent = `'${node[0].textContent}' wins`;
      player2.style.display = "none";
    }
  });
};
let val;
let started = false;
box.forEach((x) => {
  x.addEventListener(`click`, function () {
    if(!started) {
      x.textContent = "X";
      val = x.textContent;
      started = true
    }
    else{
      x.textContent = (val == "X") ?"O":"X";
      val = x.textContent;
    }
    check(pack);
  });
});
