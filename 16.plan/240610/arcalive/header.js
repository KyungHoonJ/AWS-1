const headerElem = document.getElementById("header");

const containerElem = new Container({
  parent: headerElem,
});

const menuElem = new DivElem({
  classList: ["top-menu", "flex-box"],
  parent: containerElem,
});

const userElem = new DivElem({
  parent: containerElem,
});

const logoElem = new ImgElem({
  parent: menuElem,
  src: "/16.plan/240610/arcalive/logo.png",
});

// const subscribeElem = new DivElem({
//   innerHTML: "구독 채널",
//   parent: menuElem,
// });

new ChannelBtn({
  name: "구독 채널",
  btns: [{ name: "명조 채널" }, { name: "블루아카이브 채널" }],
  parent: menuElem,
});

new ChannelBtn({
  name: "주요 채널",
  btns: [{ name: "붕괴 채널" }, { name: "오늘 점심 채널" }],
  parent: menuElem,
});
{
  // Nest.js << Typescript
  /* <div>
  <ChannelBtn>
    <li>붕괴채널</li>
  </ChannelBtn>
</div> */
}
// const primaryElem = new DivElem({
//   innerHTML: "주요 채널",
//   parent: menuElem,
// });
