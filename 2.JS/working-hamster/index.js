const greenMan = {
  width: 32,
  height: 33,
  frame: { x: 0, y: 0, now: 0 },
  position: { x: 0, y: 0 },
  setElem: () => {
    greenMan.greenManElem = document.getElementById("green-ham");
    greenMan.leftElem = greenMan.greenManElem.getElementsByClassName("left")[0];
    greenMan.imgElem = greenMan.leftElem.getElementsByTagName("img")[0];
  },
  moveLeft: () => {
    // console.log(greenMan.greenManElem);
    greenMan.width = 33;
    greenMan.height = 33;
    greenMan.leftElem.style.width = greenMan.width + "px";
    greenMan.leftElem.style.height = greenMan.height + "px";

    greenMan.frame.y = 0;
    greenMan.frame.x = 3;
    greenMan.imgElem.style.top = -1 * greenMan.frame.y + "px";
    return setInterval(() => {
      const x = greenMan.frame.x + greenMan.frame.now + greenMan.position.x;
      greenMan.imgElem.style.left = -(x * 32) + "px";
      greenMan.frame.now = (greenMan.frame.now + 1) % 3;
    }, 150);
  },
};
greenMan.setElem();
greenMan.moveLeft();
