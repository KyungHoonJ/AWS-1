// 콜백지옥

setTimeout(() => {
  let n = 100;
  console.log(n);
  setTimeout(() => {
    n += 50;
    console.log(n);
    setTimeout(() => {
      n += 100;
      console.log(n);
      setTimeout(() => {
        n += 150;
        console.log(n);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// const countdown = (n, func, n1) => {
//   setTimeout(() => {
//     console.log(n);
//     if (func) func(n1);
//   }, 1000);
// };
// countdown(50, countdown);

// Promise
const count = function (n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n); // 완료시 결과 전달
    }, 1000);
    reject("에러났어"); // catch로 에러 잡아주기 위해서 전달
  });
};
// count(1)
//   .then((data) => {
//     return count(data + 1);
//     // return undefined;
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     return count(data + 1);
//   })
//   .then((data) => {
//     console.log(data + "완료");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const asyncCount = async () => {
  try {
    // Promise의 상태 :
    // Pending : 코드가 실행되고 있는 상태, 결과가 나오지 않은 상태
    // Fulfilled : 성공(resolve)
    // Rejected : 실패(reject)
    let nowCount = 1;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
    nowCount++;
    await count(nowCount);
  } catch (err) {
    console.log(err);
  }
};
asyncCount(); // == Promise 인스턴스 객체과 같다
