const fs = require("fs");
const path = require("path");

const staticObj = {};

// path : /mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240325/views/index.html
// URL : /index.html
// path : /mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240325/views/write/index.html
// URL : /write/index.html

// ({
//   "/index.html":
//     "/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240325/views/index.html",
//   "/write/index.html":
//     "/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240325/views/write/index.html",
// });

const rootPath = path.join(__dirname, "../", "views");
// rootPath를 상수로 선언하고 path 객체에서 join 메서드를 호출해 그 반환값을 할당한다.
// `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views`

const find = (currPath) => {
  // 1. `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views`
  // 2. `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views/imgs`
  const directory = fs.readdirSync(currPath);
  // directory 상수를 선언, fs 객체에서 readdirSync 메서드를 호출하고 그 반환값을 할당한다.
  // readdirSync 메서드를 호출할 때 currPath라는 변수를 인자로 전달
  // currPath라는 변수는 find 함수를 호출할 때 전달받은 매개변수
  // "find 함수 첫 호출" 때에는 rootPath를 전달받아 currPath에 할당했다.

  // console.log("directory", directory);
  // 1. "find 함수 첫 호출" [ 'imgs', 'index.html', 'index.js', 'user', 'write', 'write1' ]
  // 2. [ 'wa4v34va.png' ]

  directory.forEach((currPathName) => {
    // 1-1. 'imgs'가 currPathName으로 할당됨
    // 2. 'wa4v34va.png'가 currPathName으로 할당됨
    // 1-2. 'index.html'가 currPathName으로 할당됨
    const findPath = path.join(currPath, currPathName);
    // 상수 findPath을 선언하고 path 객체의 join 메서드를 호출하여 그 반환값을 할당
    // 1-1. `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views/imgs`
    // 2. `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views/imgs/wa4v34va.png`
    // 1-2. `/mnt/c/Users/AM/Documents/카카오톡 받은 파일/Desktop (2)/AWS-1/9.NodeJS/240330/views/index.html`
    // console.log("statSync", fs.statSync(findPath));
    const isFile = fs.statSync(findPath).isFile();
    // fs 객체의 statSync 메서드를 호출하여 반환 받는다. // fs.statSync(findPath)
    // 반환 받은 것의 타입? => 객체
    // 반환 받은 객체에서 isFile을 찾아서 호출한다. => 호출(`()`)로 fs.statSync(findPath)가 객체라고 알 수 있다.
    // 함수 앞에 is가 붙었다 => is의 뜻은 이다. => 반대는? 아니다. => yes || no => true || false => 1 || 0

    if (isFile) {
      // 2. 'wa4v34va.png'가 파일이니까
      // 1-2. 'index.html'가 파일이니까.
      staticObj[findPath.slice(rootPath.length)] = findPath;
      // staticObj 객체의 findPath.slice(rootPath.length) 이름으로 findPath를 값으로 할당한다.
      // 프로퍼티가 추가된다.
      staticObj[findPath.slice(rootPath.length).replace("index.html", "")] =
        findPath;
      // staticObj 객체의 findPath.slice(rootPath.length).replace("index.html", "") 이름으로 findPath를 값으로 할당한다.
      // 프로퍼티가 추가된다.
      staticObj[findPath.slice(rootPath.length).replace("/index.html", "")] =
        findPath;
    } else {
      find(findPath);
      // 1. imgs는 폴더기 때문에 isFile == false, find 함수를 호출한다. => 이후로 숫자는 2가 된다.
      // 1, 2 등 붙는 숫자는 뭘까? 실행 컨텍스트가 몇개가 쌓였나?
      // 2 find 함수 호출 종료 후 돌아온다.
    }
  });
};
find(rootPath); // "find 함수 첫 호출"
// find 함수를 호출하며 rootPath 변수를 인자로 전달했다.

// console.log(staticObj);

module.exports = staticObj;
