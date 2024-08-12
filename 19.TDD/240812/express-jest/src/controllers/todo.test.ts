import request from "supertest";
import express, { Express } from "express";

import router from "./todo";

describe("Test Todo", () => {
  let app: Express;
  beforeEach(() => {
    app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use("/todo", router);
  });

  test("Test Add Todo Item", async () => {
    const response = await request(app)
      .post("/todo")
      .send({ title: "test todo list" });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 1,
      title: "test todo list",
      isCompleted: false,
    });
  });

  test("Test Failed Add Todo Item", async () => {
    const response = await request(app).post("/todo").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errorMsg: "plz input title",
    });
  });
});
