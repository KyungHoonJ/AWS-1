class MyElem {
  element;
  constructor({ tag, classList = [], parent, innerHTML }) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classList);
    this.element.innerHTML = innerHTML || "";
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
    super({ tag: "div", classList, parent, innerHTML });
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

class ChannelBtn extends MyElem {
  constructor({ name, btns = [], parent }) {
    super({ tag: "div", classList: ["channel-btn"], parent });
    const btn = new MyElem({
      tag: "h4",
      classList: [],
      parent: this,
      innerHTML: name,
    });

    const channelBtns = new MyElem({
      tag: "ul",
      classList: ["channel-btns"],
      parent: this,
    });

    btn.element.onclick = () => {
      const temp = parent.element.getElementsByClassName("on");
      if (temp.length && temp[0] !== channelBtns.element) {
        temp[0].classList.remove("on");
      }
      channelBtns.element.classList.toggle("on");
    };

    btns.forEach(({ name, id }) => {
      new MyElem({ tag: "li", parent: channelBtns, innerHTML: name });
    });
  }
}
