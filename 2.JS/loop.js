// // let go = 1;

// // while(++go <= 11) {
// //     console.log(new Date());
// //     // if(++go == 11) break;
// //     // go += 1;
// //     // if(go == 11) {
// //     //     break;
// //     // }
// // }

// // while(){} << 버려라
// let go = 1;
// while(++go <= 11) {
//     console.log(new Date());
// }

// for(let i = 0, j = 10; i < 10 || j > -10; i++, j--){
//     console.log('i : ' + i);
//     console.log('j : ' + j);
// }

// for(let i = 2, j = 1; i < 10; j++){
//     console.log(i + " * " + j + " = " + (i * j))
//     if(j > 8){
//         i++;
//         j = 0;
//     }
// }

// for(let i = 1; i < 72; i++) {
//     console.log(parseInt(i / 9 + 2) + " * " + (i % 9 + 1) + " = " + (parseInt(i / 9 + 2) * (i % 9 + 1)));
// }

// scope
for(let i = 2; i < 10; i++){
    for(let j = 1, i = 2; j < 10; j++){
        document.write(i + " * " + j + " = " + (i * j) + "<br>");
    }
}

// Array
// 연속된 순서가 있는 이름 없는 데이터의 목록
const arr = ["이승배", "이정배", "박성민", "방지완", "손민복"];
console.log(arr[0]);

// (){}[]
let a = 0;
var b = 2;
{
    let a = 1;
    console.log(a);
    console.log(b);
    var b = 3;
}

arr[5] = "노가민";
arr.push('정구진');


let arr1 = [];
for(let i = 0; i < 11; i++){
    arr1.push(10 - i);
}

console.log(arr1);

const arr2 = [];
for(let i = 10; i >= 0; i--){
    arr2.push(i);
    console.log(i);
}