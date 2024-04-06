const fs = require("fs");
const path = require("path");
const { makeResponse, sendFile } = require("./res");

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

const makeStaticMassage = (path) => {
  let message = "";
  if (staticObj[path] != undefined) {
    const body = fs.readFileSync(staticObj[path]);
    if (staticObj[path].indexOf(".js") > 0) {
      message = makeResponse("text/javascript", body.toString());
    } else if (staticObj[path].indexOf(".css") > 0) {
      message = makeResponse("text/css", body.toString());
    } else if (staticObj[path].indexOf(".png") > 0) {
      message = sendFile("image/png", body);
    } else if (staticObj[path].indexOf(".jpg") > 0) {
      message = sendFile("image/jpeg", body);
    } else if (staticObj[path].indexOf(".svg") > 0) {
      message = sendFile("image/svg", body);
    } else if (staticObj[path].indexOf(".mp4") > 0) {
      message = sendFile("video/mp4", body);
    } else {
      message = makeResponse("text/html", body.toString());
    }
  }
  return message;
};

module.exports = { staticObj, makeStaticMassage };
