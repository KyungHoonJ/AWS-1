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

const find = (currPath) => {
  const directory = fs.readdirSync(currPath);

  directory.forEach((currPathName) => {
    const findPath = path.join(currPath, currPathName);
    const isFile = fs.statSync(findPath).isFile();

    if (isFile) {
      staticObj[findPath.slice(rootPath.length)] = findPath;
      staticObj[findPath.slice(rootPath.length).replace("index.html", "")] =
        findPath;
    } else {
      find(findPath);
    }
  });
};
find(rootPath);

console.log(staticObj);

module.exports = staticObj;
