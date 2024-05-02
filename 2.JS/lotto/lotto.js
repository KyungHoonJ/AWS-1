class Lotto {
  #arr;
  #parentElem;
  #isLoading;

  constructor(rootName, Class, count) {
    this.#isLoading = true;

    this.#arr = [];
    for (let i = 0; i < count; ++i) {
      this.#arr.push(new Class(i + 1));
    }

    this.#parentElem = document.createElement("ul");
    this.#parentElem.classList.add("lotto-list");
    document.getElementById(rootName).append(this.#parentElem);

    const tempBtnElem = document.createElement("button");
    tempBtnElem.innerText = "로또 뽑기";
    tempBtnElem.classList.add("lotto-btn");
    tempBtnElem.onclick = () => {
      if (this.#isLoading) return;
      this.#isLoading = true;
      this.#arr.forEach((item) => {
        item.remove(this.#parentElem);
      });
      setTimeout(() => {
        this.#createLotto();
      }, 1000);
      //   this.#createLotto();
    };
    document.getElementById(rootName).append(tempBtnElem);

    this.#createLotto();
    // this.#arr.forEach((item) => item.draw(this.#parentElem));
  }

  #createLotto() {
    const tempArr = [];
    while (tempArr.length < 7) {
      const tempIdx = Math.floor(Math.random() * this.#arr.length);
      if (tempArr.indexOf(this.#arr[tempIdx]) == -1) {
        tempArr.push(this.#arr[tempIdx]);
      }
    }
    // tempArr.forEach((item) => item.draw(this.#parentElem));
    const tempInterval = setInterval(() => {
      tempArr[this.#parentElem.children.length].draw(this.#parentElem);
      if (this.#parentElem.children.length == tempArr.length) {
        clearInterval(tempInterval);
        this.#isLoading = false;
      }
    }, 1000);
  }
}
