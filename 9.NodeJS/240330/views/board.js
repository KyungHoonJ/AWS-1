const tagElem = document.getElementsByClassName("h-tag");
const contentElem = document.getElementsByClassName("h-content");
const inlinkElem = document.getElementsByClassName("in-link");
const invenElem = document.getElementsByClassName("inven");
const benElem = document.getElementsByClassName("ben");
const poElem = document.getElementsByClassName("po-list");

benElem[0].onmouseover = () => {
  benElem[1].classList.remove("on");
  benElem[0].classList.add("on");
  poElem[1].classList.remove("on");
  poElem[0].classList.add("on");
};
benElem[1].onmouseover = () => {
  benElem[0].classList.remove("on");
  benElem[1].classList.add("on");
  poElem[0].classList.remove("on");
  poElem[1].classList.add("on");
};

tagElem[0].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[0].classList.add("on");
  contentElem[0].classList.add("on");
};

tagElem[1].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[1].classList.add("on");
  contentElem[1].classList.add("on");
};

tagElem[2].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[2].classList.add("on");
  contentElem[2].classList.add("on");
};

tagElem[3].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[3].classList.add("on");
  contentElem[3].classList.add("on");
};

tagElem[4].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[4].classList.add("on");
  contentElem[4].classList.add("on");
};

inlinkElem[0].onmouseover = () => {
  inlinkElem[1].classList.remove("on");
  inlinkElem[0].classList.add("on");
  invenElem[1].classList.remove("on");
  invenElem[0].classList.add("on");
};
inlinkElem[1].onmouseover = () => {
  inlinkElem[0].classList.remove("on");
  inlinkElem[1].classList.add("on");
  invenElem[0].classList.remove("on");
  invenElem[1].classList.add("on");
};

// //-----------> 게시판
// // const numElem = document.getElementsByClassName("num");
// // const titleElem = document.getElementsByClassName("tit");
// // const userElem = document.getElementsByClassName("user");
// // const dateElem = document.getElementsByClassName("date");
// // // let title = [1, 2, 3, 4, 5];
// // let writer = [1, 2, 3, 4, 5];
// // let date = [1, 2, 3, 4, 5];

// // const boardData = () => {
// //   for (let i = 0; i < 48; i++) {
// //     numElem[i].innerHTML = `<div>${i + 1}<div>`;
// //   }
// //   for (let i = 0; i < 5; i++) {
// //     titleElem[i].innerHTML = `<div>${title[i]}`;
// //   }
// //   for (let i = 0; i < 5; i++) {
// //     userElem[i].innerHTML = `<div>${writer[i]}<div>`;
// //   }

// //   for (let i = 0; i < 5; i++) {
// //     dateElem[i].innerHTML = `<div>${date[i]}<div>`;
// //   }
// // };
// // boardData();
// // ----

// let page = 1;
// let count = 47;

// const getUsers = async () => {
//   try {
//     // const usersRes = await fetch("http://localhost:3000/", {
//     //   method: "post",
//     //   mode: "no-cors",
//     //   body: `page=${page}&count=${count}`,
//     // });
//     const usersRes = [];
//     console.log(usersRes);
//     const usersData = await usersRes.text();
//     console.log(usersData);
//     const userArr = JSON.parse(usersData);
//     //const userArr= Json.parse()
//     console.log(userArr);

//     const titleElem = document.getElementsByClassName("tit");
//     const numElem = document.getElementsByClassName("num");

//     if (page == 2 || page == 3 || page == 4 || page == 5) {
//       for (let i = 0; i < 47; i++) {
//         titleElem[i].innerHTML = " ";
//         numElem[i].innerHTML = " ";
//       }
//     }

//     userArr.forEach((item) => {
//       for (let i = 0; i < 47; i++) {
//         if (item.idx == i) {
//           numElem[i].innerHTML = `<div>${item.idx + 1}<div>`;
//           titleElem[
//             i
//           ].innerHTML = `<a href = "/board/?title=${item.title}&content=${item.content}" >${item.title}</a>`;
//         }
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// getUsers();

// // const getContent = async () => {
// //   try {
// //     const usersRes1 = await fetch("http://localhost:3000/board/", {
// //       method: "post",
// //       mode: "no-cors",
// //       body: `title=${title}&content=${content}`,
// //     });
// //     console.log(usersRes1);
// //     const usersData1 = await usersRes.text();
// //     console.log(usersData1);
// //     const userArr1 = JSON.parse(usersData);
// //     //const userArr= Json.parse()
// //     console.log(userArr1);

// //     userArr.forEach((item) => {});
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // getContent();

// const getPage = async () => {
//   try {
//     const pageCount = 5;

//     const pagingElem = document.getElementById("paging");

//     for (let i = 0; i < pageCount; ++i) {
//       const tempLi = document.createElement("div");
//       tempLi.innerHTML = i + 1;
//       tempLi.onclick = () => {
//         page = i + 1;
//         getUsers();
//       };
//       pagingElem.append(tempLi);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };
// getPage();

// const tempArr = [
//   {
//     id: 1,
//     title: "토요일 보충 수업",
//     createdAt: "2024-03-30",
//   },
//   {
//     id: 2,
//     title: "토요일 보충 수업2",
//     createdAt: "2024-03-30",
//   },
// ];

let body = location.search;
if (body == "") {
  body = "page=1&count=4";
} else {
  body = body.slice(1);
}
console.log(body);

const listElem = document.getElementById("list");
const setList = async () => {
  const res = await fetch("/", {
    method: "post",
    body,
  });

  const text = await res.text();

  const arr = JSON.parse(text);
  console.log(arr);

  listElem.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    listElem.innerHTML += `<tr class="user-text">
  <td class="num">${arr[i].id}</td>
  <td class="tit">${arr[i].title}</td>
  <td class="user">3</td>
  <td class="date">${arr[i].createdAt}</td>
  <td class="view">5</td>
  <td class="reco">6</td>
</tr>`;
  }
};
setList();
// const board = `<tr class="user-text">
//   <td class="num">1</td>
//   <td class="tit">2</td>
//   <td class="user">3</td>
//   <td class="date">4</td>
//   <td class="view">5</td>
//   <td class="reco">6</td>
// </tr>`;

// document.getElementById("list").innerHTML = board;

// for (let i = 0; i < tempArr.length; ++i) {
//   document.getElementById("list").innerHTML += `<tr class="user-text">
//   <td class="num">${tempArr[i].id}</td>
//   <td class="tit">${tempArr[i].title}</td>
//   <td class="user">3</td>
//   <td class="date">${tempArr[i].createdAt}</td>
//   <td class="view">5</td>
//   <td class="reco">6</td>
// </tr>`;
// }
