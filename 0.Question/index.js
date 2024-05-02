const arr = [1, 2, 3, 4, 5];

const funcA = (item, i) => {
  //   console.log(item + " / " + i);
  return item + " / " + i;
};

const eachArr = arr.forEach(funcA);
console.log(eachArr);

const forEach = (func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i);
  }
};
forEach(funcA);

const funcB = (item, i) => {
  console.log(item + " / " + i + " in map");
  //   return item + " / " + i + " in map";
};

const mapArr = arr.map(funcB);
console.log(mapArr);

const map = (func) => {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(func(arr[i], i));
  }
  return tempArr;
};
// console.log(tempArr);
const mapArr2 = map(funcB);
console.log(mapArr2);

// const eachArr3 = arr.forEach(funcB);
// const mapArr3 = arr.map(funcA);

function o1(arr) {
  console.log(arr); // O(1)
}

function on(arr) {
  // O(n)
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[i]);
  }
}
