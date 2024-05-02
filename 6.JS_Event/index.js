let a = 2;
function func1() {
  let a = 1; // record에 저장
  console.log(a);
}

func1(); // 실행 컨텍스트 생성(func1)

{
  let a = 3;
  console.log(a);
}

{
  console.log(a);
}
