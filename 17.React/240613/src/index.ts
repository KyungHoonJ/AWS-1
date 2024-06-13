let num: number = 1;
const str: string = "AWS";

function add1(a: number, b: number): number {
  return a + b;
}

console.log(num);

document.getElementById("test").innerHTML = `
  <div>${num}</div>
`;

num = 2;
document.getElementById("test").innerHTML = `
  <div>${num}</div>
`;
