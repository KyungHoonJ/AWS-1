const slideListElem = document.getElementById("slide-list");
const navElem = document.getElementById("nav");
slideListElem.style.transform = `translateX(-1000px)`;

let idx = 1;
let interval;
let isMoving = false;

const move = () => {
  isMoving = true;
  navElem.getElementsByClassName("on")[0].classList.remove("on");
  navElem.children[(idx + 3) % 4].classList.add("on");

  slideListElem.classList.add("on");
  slideListElem.style.transform = `translateX(-${idx}000px)`;
  console.log(idx);
  setTimeout(() => {
    isMoving = false;
    slideListElem.classList.remove("on");
    if (idx == 5) {
      idx = 1;
    } else if (idx == 0) {
      idx = 4;
    }
    slideListElem.style.transform = `translateX(-${idx}000px)`;
  }, 1000);

  //   if (idx == 5) {
  //     setTimeout(() => {
  //       slideListElem.classList.remove("on");
  //       idx = 1;
  //       slideListElem.style.transform = `translateX(-${idx}000px)`;
  //     }, 1000);
  //   }
  //   if (idx == 0) {
  //     setTimeout(() => {
  //       slideListElem.classList.remove("on");
  //       idx = 4;
  //       slideListElem.style.transform = `translateX(-${idx}000px)`;
  //     }, 1000);
  //   }
};

const createInterval = () => {
  //   return setInterval(() => {
  interval = setInterval(() => {
    idx++;
    move();
  }, 2000);
};

// let interval = createInterval();
createInterval();

const playBtnsElem = document.getElementById("play-btns");

document.getElementById("pause").onclick = () => {
  playBtnsElem.classList.remove("on");
  //   slideListElem.classList.remove("on");
  clearInterval(interval);
};

document.getElementById("play").onclick = () => {
  playBtnsElem.classList.add("on");
  //   slideListElem.classList.add("on");
  //  interval = createInterval();
  createInterval();
};

document.getElementById("prev-btn").onclick = () => {
  if (isMoving) return;
  idx--;
  move();
};

document.getElementById("next-btn").onclick = () => {
  if (isMoving) return;
  idx++;
  move();
};
