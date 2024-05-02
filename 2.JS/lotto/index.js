// 상수 컬러를 변수로 선언했다.
const COLORS = ["gold", "blue", "red", "gray", "green"];

class Ball {
  // 공에 대한 정보를 갖고있는 클래스
  #num;
  #color;
  #isDraw;
  #elem;

  constructor(num) {
    // 생성자 메서드
    this.#num = num;

    this.#elem = document.createElement("span");
    this.#elem.innerText = this.#num;
    this.#elem.classList.add("ball");

    // 1~10 => 0
    this.#color = COLORS[parseInt((this.#num - 1) / 10)];
    // 1~45 => 1~10 = gold = 0

    // if 조건문 사용한 통칭 '하드코딩'
    // if (this.#num < 11) {
    //   this.#color = COLORS[0];
    // } else if (this.#num < 21) {
    //   this.#color = COLORS[1];
    // } else if (this.#num < 31) {
    //   this.#color = COLORS[2];
    // } else if (this.#num < 41) {
    //   this.#color = COLORS[3];
    // } else {
    //   this.#color = COLORS[4];
    // }
    this.#elem.classList.add(this.#color);

    // this.#elem.classList.add(
    //   `unit${Math.floor((this.#num - 1) / 10) * 10 + 1}`
    // );
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    // 0, 1, 2, 3, 4, 5, 6, 7, 8,  9, 10
    // 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 11
    // if(+num < 11){
    // }else if(+num < 21){
    // }
  }

  draw(parentElem) {
    // 그리기 메서드
    this.#isDraw = true; // 그렸으니 그렸는지에 대한 변수를 true, 참으로
    parentElem.append(this.#elem); // 부모 엘리먼트에게 내가 갖고있는 엘리먼트를 추가해달라
  }

  remove(parentElem) {
    if (this.#isDraw) {
      // document.getElementById().removeChild
      parentElem.removeChild(this.#elem); // removeChild를 사용하여 부모에서 해당 요소(Element) 삭제
      this.#isDraw = false; // 지웠으니 그렸는지에 대한 boolean 값을 false
    }
  }
}

// const ball = new Ball("1");
// ball.draw(document.getElementById("lotto"));
// const ball2 = new Ball("2");
// ball2.draw(document.getElementById("lotto"));
// // ball.remove(document.getElementById("lotto"));
// const ball3 = new Ball("32");
// ball3.draw(document.getElementById("lotto"));

// // 1~45까지 공을 만들어서 출력해보자.
// // 만든 공은 배열에 넣어두자.

// const arr = [];
// // for (let i = 1; i < 46; i++) {
// //   arr.push(new Ball(i));
// //   arr[i - 1].draw(document.getElementById("lotto"));
// // }

// for (let i = 0; i < 45; i++) {
//   arr.push(new Ball(i + 1));
//   arr[i].draw(document.getElementById("lotto"));
// }

const lotto = new Lotto("lotto", Ball, 30);
