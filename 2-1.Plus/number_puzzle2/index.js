const arr = [
  [1, 2, 3, 4, 5, "☝"],
  [7, 8, 9, 10, 11, 6],
  [13, 14, 15, 16, 17, 12],
  [19, 20, 21, 22, 23, 18],
  [25, 26, 27, 28, 29, 24],
  [31, 32, 33, 34, 35, 30],
];
console.log(isNaN(+"a"));

console.log(arr[5][5]);
// const max = [6, 6];
const max = { i: 6, j: 6 };
// const now = [4, 4];
const now = { i: 5, j: 5 };
let isStart = false;

// const ARROW = {
//   top: 0,
//   right: 1,
//   bottom: 2,
//   left: 3,
// };
const move = (arrow) => {
  // 0~3, 'top', 'bottom'
  if (isNaN(+arrow)) {
    // arrow를 글자로 받았는지 확인
    if (arrow == "top") arrow = 0;
    else if (arrow == "right") arrow = 1;
    else if (arrow == "bottom") arrow = 2;
    else if (arrow == "left") arrow = 3;
    // arrow = ARROW[arrow];
  }

  const next = { ...now };
  if (arrow == 0) {
    next.i -= 1;
    // arr[now.i][now.j] = arr[now.i - 1][now.j];
    // arr[now.i - 1][now.j] = 0;
  } else if (arrow == 1) {
    next.j += 1;
    // arr[now.i][now.j] = arr[now.i][now.j + 1];
    // arr[now.i][now.j + 1] = 0;
  } else if (arrow == 2) {
    next.i += 1;
    // arr[now.i][now.j] = arr[now.i + 1][now.j];
    // arr[now.i + 1][now.j] = 0;
  } else if (arrow == 3) {
    next.j -= 1;
    // arr[now.i][now.j] = arr[now.i][now.j - 1];
    // arr[now.i][now.j - 1] = 0;
  }
  arr[now.i][now.j] = arr[next.i][next.j];
  arr[next.i][next.j] = 0;
  now.i = next.i;
  now.j = next.j;
};
// move("top");
// move("top");
// console.log(arr);

const mix = () => {
  // 랜덤하게 뽑고 옮길수 있는지 확인 후에 옮겨주자. 10번
  for (let i = 0; i < 1000; i++) {
    const randomArrow = Math.floor(Math.random() * 4);
    if (
      (randomArrow == 0 && now.i == 0) ||
      (randomArrow == 1 && now.j == max.j - 1) ||
      (randomArrow == 2 && now.i == max.i - 1) ||
      (randomArrow == 3 && now.j == 0)
    ) {
      i--;
      continue;
    }
    move(randomArrow);
  }
};
// mix();

const numsElems = document.getElementsByClassName("nums");

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] != 0) {
      numsElems[i * 6 + j].innerHTML = arr[i][j];
    }
    // if (arr[i][j] == 0) continue;
    // numsElems[i * 6 + j].innerHTML = arr[i][j];
  }
}

const elems = {
  now: undefined,
  left: undefined,
  top: undefined,
  bottom: undefined,
  right: undefined,
  reset: function () {
    if (elems.now) elems.now.onclick = undefined;
    if (elems.left) elems.left.onclick = undefined;
    if (elems.top) elems.top.onclick = undefined;
    if (elems.bottom) elems.bottom.onclick = undefined;
    if (elems.right) elems.right.onclick = undefined;
  },
};

const setNow = () => {
  elems.reset();

  let tempCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i * max.i + j + 1 == arr[i][j]) tempCount++;
    }
  }
  if (tempCount == 35) {
    isStart = false;
    for (let i = 0; i < max.i; i++) {
      arr[i][5] = i * 6;
    }
    arr[0][5] = document.getElementById("play").innerText;
    document.getElementById("play").innerText = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] != 0) {
          numsElems[i * 6 + j].innerHTML = arr[i][j];
        }
      }
    }
    setStart();
  }

  if (!isStart) return;

  elems.now = numsElems[now.i * 6 + now.j];

  if (now.i > 0) {
    elems.top = numsElems[(now.i - 1) * 6 + now.j];
    elems.top.onclick = () => {
      elems.now.innerHTML = elems.top.innerHTML;
      elems.top.innerHTML = "";

      arr[now.i][now.j] = arr[now.i - 1][now.j];
      arr[now.i - 1][now.j] = 0;

      now.i--;
      setNow();
    };
  }

  if (now.j > 0) {
    elems.left = numsElems[now.i * 6 + (now.j - 1)];
    elems.left.onclick = () => {
      elems.now.innerHTML = elems.left.innerHTML;
      elems.left.innerHTML = "";

      arr[now.i][now.j] = arr[now.i][now.j - 1];
      arr[now.i][now.j - 1] = 0;

      now.j--;
      setNow();
    };
  }

  if (now.i < max.i - 1) {
    elems.bottom = numsElems[(now.i + 1) * 6 + now.j];
    elems.bottom.onclick = () => {
      elems.now.innerHTML = elems.bottom.innerHTML;
      elems.bottom.innerHTML = "";

      arr[now.i][now.j] = arr[now.i + 1][now.j];
      arr[now.i + 1][now.j] = 0;

      now.i++;
      setNow();
    };
  }

  if (now.j < max.j - 1) {
    elems.right = numsElems[now.i * 6 + (now.j + 1)];
    elems.right.onclick = () => {
      elems.now.innerHTML = elems.right.innerHTML;
      elems.right.innerHTML = "";

      arr[now.i][now.j] = arr[now.i][now.j + 1];
      arr[now.i][now.j + 1] = 0;

      now.j++;
      setNow();
    };
  }
};

setNow();

const setStart = () => {
  document.getElementsByClassName("item")[11].onclick = (e) => {
    document.getElementById("play").innerText = arr[0][5];
    arr[0][5] = 0;
    now.i = 0;
    now.j = 5;
    mix();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] != 0) {
          numsElems[i * 6 + j].innerHTML = arr[i][j];
        } else {
          numsElems[i * 6 + j].innerHTML = "";
        }
      }
    }
    document.getElementsByClassName("item")[11].onclick = undefined;
    isStart = true;
    setNow();
  };
};

setStart();
