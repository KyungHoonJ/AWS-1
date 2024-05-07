import express from "express";
// const express = require("express");
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

import router from "./controllers/index.js";
import { Category, sequelize } from "./models/index.js";
// MVC 패턴

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "aws"));

app.use(router);
const force = true;

try {
  await sequelize.sync({ force });
  // ECMAScript2022 버전부터 가능 // 2022년 6월
  // ES6 == ECMAScript2016

  await Category.create({ name: "전체", href: "./" });

  const info = await Category.create({ name: "정보", href: "./" });
  // const opgg = await Category.create({ name: "OP.GG 기획", href: "./" });
  // info.addChildren(opgg);
  // const news = await Category.create({ name: "유저 뉴스", href: "./" });
  // info.addChildren(news);
  await info.addChildren(
    await Category.create({ name: "OP.GG 기획", href: "./" })
  );
  await info.addChildren(
    await Category.create({ name: "유저 뉴스", href: "./" })
  );
  await info.addChildren(
    await Category.create({ name: "팁과 노하우", href: "./" })
  );
  await info.addChildren(
    await Category.create({ name: "패치노트", href: "./" })
  );

  const comm = await Category.create({ name: "커뮤니티", href: "./" });
  await comm.addChildren(await Category.create({ name: "자유", href: "./" }));
  await comm.addChildren(await Category.create({ name: "유머", href: "./" }));
  await comm.addChildren(await Category.create({ name: "질문", href: "./" }));
  await comm.addChildren(await Category.create({ name: "영상", href: "./" }));
  await comm.addChildren(
    await Category.create({ name: "사건 사고", href: "./" })
  );
  await comm.addChildren(
    await Category.create({ name: "전적 인증", href: "./" })
  );
  await comm.addChildren(
    await Category.create({ name: "팬 아트", href: "./" })
  );

  const eSports = await Category.create({ name: "e스포츠", href: "./" });
  await eSports.addChildren(await Category.create({ name: "LCK", href: "./" }));
  await eSports.addChildren(
    await Category.create({ name: "기타 리그", href: "./" })
  );
} catch (err) {
  console.error(err);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
