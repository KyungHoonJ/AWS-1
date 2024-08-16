import MockAdapter from "axios-mock-adapter";

import instance from "./axios";
import { getList } from "./todoAxios";

const mock = new MockAdapter(instance);

describe("Test Todo Axios", () => {
  test("Get List", async () => {
    const data = [{ id: 1, title: "test todo list", isCompleted: false }];
    mock.onGet("/todo").reply(200, data);

    const response = await getList();
    expect(response).toEqual(data);
  });
});
