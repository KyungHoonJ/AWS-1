class Card {
  #num;
  #elem;

  constructor(num) {
    this.#num = num;
    this.#elem = document.createElement("span");
    this.#elem.innerText = this.#num + "입니다.";
  }

  draw(parentElem) {
    parentElem.append(this.#elem);
  }
  remove(parentElem) {
    parentElem.innerHTML = "";
    // parentElem.removeChild(this.#elem);
  }
}
const cards = new Lotto("card", Card, 52);
