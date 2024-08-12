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

  test("Test Get List", async () => {
    const response = await request(app).get("/todo");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        title: "test todo list",
        isCompleted: false,
      },
    ]);
  });

  test("Test Update Todo Item", async () => {
    const response = await request(app)
      .patch("/todo")
      .send({ id: 1, isCompleted: true });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      title: "test todo list",
      isCompleted: true,
    });
  });

  test("Test Delete Todo Item", async () => {
    const response = await request(app).delete("/todo/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  test("Test Add Todo Items", async () => {
    await request(app).post("/todo").send({ title: "test todo list" });
    await request(app).post("/todo").send({ title: "test todo list" });
    const response = await request(app).get("/todo");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 2,
        title: "test todo list",
        isCompleted: false,
      },
      {
        id: 3,
        title: "test todo list",
        isCompleted: false,
      },
    ]);
  });
});
