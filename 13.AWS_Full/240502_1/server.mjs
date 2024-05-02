// mjs : module Javascript => import && export
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
