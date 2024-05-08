// const tempReg = /a/gi;
// console.log(tempReg.test("cbbAb"));
// console.log("babab".replace(tempReg, "+"));
// "".match(tempReg)
let tempReg = /(?=\S*[A-z])(?=\S*[!@#$%^*+=-])(?=\S*[0-9])\S*/;
const tempStr =
  "saervesar seavrs213ear se@#vrseav rs12#evr sevr sevr s32!eavr searvserv se";
console.log(tempStr.match(tempReg));
tempReg = /(?=\S*[A-z])(?=\S*[!@#$%^*+=-])(?=\S*[0-9])\S*/g;
console.log(tempStr.match(tempReg));
