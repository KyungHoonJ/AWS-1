const arr = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 0, 29],
  [31, 32, 33, 34, 35, 30],
];

console.log(arr[5][5]);
// const max = [6, 6];
const max = { i: 6, j: 6 };
// const now = [4, 4];
const now = { i: 4, j: 4 };

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
