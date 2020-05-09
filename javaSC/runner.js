/** @format */

const man = document.querySelector("#man");
const coin = document.querySelector("#coin");
const points = document.querySelector("#points");
var time;

window.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.key === "ArrowDown") {
    clearInterval(time);
    time = setInterval(moveV, 100, man, 50);
    // moveV(man,50);
  } else if (e.key === "ArrowUp") {
    clearInterval(time);
    time = setInterval(moveV, 100, man, -50);
  } else if (e.key === "ArrowLeft") {
    clearInterval(time);
    time = setInterval(moveH, 100, man, -50);
    man.style.transform = "scale(-1,1)";
  } else if (e.key === "ArrowRight") {
    clearInterval(time);
    time = setInterval(moveH, 100, man, 50);
    man.style.transform = "scale(1,1)";
  }
});

const isTouching = (e1, e2) => {
  const A = e1.getBoundingClientRect();
  const B = e2.getBoundingClientRect();

  // return !((A.left >= B.left + B.width )||
  //         (A.top >= B.top + B.height )||
  //         (B.left >= A.left + A.width )||
  //         (B.top >= A.top + A.height )
  //         )
  return B.x - 50 < A.x && A.x < B.x + 50 && B.y - 50 < A.y && A.y < B.y + 50;
};

const moveV = function (element, amount) {
  if (isTouching(man, coin)) {
    pointsUpdate();
  }

  let hM = parseInt(extractVal(element.style.top));
  hM += amount;
  element.style.top = `${hM}px`;
};
const moveH = function (element, amount) {
  if (isTouching(man, coin)) {
    pointsUpdate();
  }

  let hM = parseInt(extractVal(element.style.left));
  hM += amount;
  element.style.left = `${hM}px`;
};

const extractVal = (height) => {
  if (height === "") {
    return 100;
  } else {
    return height.slice(0, -2);
  }
};

const colorChange = () => {
  const color = [
    "red",
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
  ];

  const colorNo = Math.floor(Math.random() * 7);

  document.bgColor = color[colorNo];
};

const pointsUpdate = () => {
  const hCoin = window.innerHeight - 50;
  const wCoin = window.innerWidth - 50;

  const rH = Math.floor(Math.random() * hCoin);
  const rW = Math.floor(Math.random() * wCoin);

  coin.style.top = `${rH}px`;
  coin.style.left = `${rW}px`;

  colorChange();

  let point = parseInt(points.innerText);
  this.console.log(point)
  point += 1;
  points.innerText = point;
};

