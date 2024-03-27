const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname, "../", "views", "index.html");
console.log(filename);

// fs.readFile(filename, "utf8", (err, data) => {
//   console.log(err);
//   console.log(data);
// }); // 비동기 방식 => Promise, async(await)
// console.log("readfile");

const data = fs.readFileSync(filename);
// const data = fs.readFileSync(filename, { encoding: "utf8" });
console.log(data.toString());
