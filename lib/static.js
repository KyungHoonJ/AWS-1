const fs = require("fs");
const path = require("path");

const staticObj = {};
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
      staticObj[findPath.slice(rootPath.length).replace("/index.html", "")] =
        findPath;
    } else {
      find(findPath);
    }
  });
};
find(rootPath);

module.exports = staticObj;
