// 반복문
// 반복을 하기 위해선 조건이 필요하다.

let count = 0;
while(count < 10) {
    console.log(new Date());
    count++;
    ++count;
    console.log(++count);
}

// 2 * 1 = (2 * 1)
// 2 * 2 = (2 * 2)
// 2 * 3 = (2 * 3)

for(let j = 2; j < 10; j++) {
    if(j == 2) {
        console.log('구구단을 시작합니다.');
    } else {
        console.log('다음');
    }
    console.log(j + '단');
    for(let i = 1; i < 10; i++) {
        console.log(j + ' * ' + i + ' = ' + (j * i));
    }
}