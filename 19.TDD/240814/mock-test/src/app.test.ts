import request from "supertest";
import { config } from "dotenv";

import app from "./app";

config();

describe("Test Express App", () => {
  test("Get / return Now Testing", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Now Testing");
  });
});
