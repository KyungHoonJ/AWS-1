class MyElem {
  element;
  constructor({ tag, classList = [], parent = undefined }) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classList);
    if (parent) {
      parent.append(this.element);
    } else {
      document.body.append(this.element);
    }
  }

  append(...children) {
    this.element.append(...children);
  }
}

class DivElem extends MyElem {
  constructor({ classList, parent, innerHTML }) {
    super({ tag: "div", classList, parent });
    this.element.innerHTML = innerHTML || "";
  }
}

class ImgElem extends MyElem {
  constructor({ classList, parent, src }) {
    super({ tag: "img", classList, parent });
    this.element.src = src;
  }
}

class Container extends MyElem {
  constructor({ classList, parent }) {
    super({
      tag: "div",
      classList,
      parent,
    });
    this.element.classList.add("container");
  }
}
