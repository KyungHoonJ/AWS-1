const headerElem = document.getElementById("header");

const containerElem = new Container({
  parent: headerElem,
});
// const containerElem = document.createElement("div");
// containerElem.classList.add("container");
console.log(containerElem);
console.log(containerElem.element);
const menuElem = new DivElem({
  classList: ["top-menu", "flex-box"],
  parent: containerElem,
});
// const menuElem = document.createElement("div");
// menuElem.classList.add("top-menu");
// menuElem.classList.add("flex-box");

const userElem = new DivElem({
  parent: containerElem,
});
// const userElem = document.createElement("div");

const logoElem = new ImgElem({
  parent: menuElem,
  src: "/16.plan/240610/arcalive/logo.png",
});
// const logoElem = document.createElement("img");
// logoElem.src = "/16.plan/240610/arcalive/logo.png";
// menuElem.element.append(logoElem);

const subscribeElem = new DivElem({
  innerHTML: "구독 채널",
  parent: menuElem,
});
// const subscribeElem = document.createElement("div");
// subscribeElem.innerHTML = "구독 채널";
// menuElem.element.append(subscribeElem);

const primaryElem = new DivElem({
  innerHTML: "주요 채널",
  parent: menuElem,
});
// const primaryElem = document.createElement("div");
// primaryElem.innerHTML = "주요 채널";
// menuElem.element.append(primaryElem);

// containerElem.append(menuElem.element);
// containerElem.append(userElem);
// headerElem.append(containerElem);
