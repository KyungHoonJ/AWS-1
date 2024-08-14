import sequelize from "../database";
import Todo from "../Todo";

describe("Todo Test", () => {
  beforeAll(async () => {
    sequelize.addModels([Todo]);

    await sequelize.sync({ force: true });
  });
  afterAll(async () => {
    await sequelize.close();
  });

  test("create new todo", async () => {
    const todo = await Todo.create({ title: "study TDD" });
    expect(todo.id).toBe(1);
    expect(todo.title).toBe("study TDD");
    expect(todo.isCompleted).toBe(false);
  });

  test("find todo by primary key", async () => {
    // const todo = await Todo.findOne({ where: { id: 1 } });
    const todo = await Todo.findByPk(1);
    expect(todo).not.toBeNull();
    expect(todo?.id).toBe(1);
    expect(todo?.title).toBe("study TDD");
    expect(todo?.isCompleted).toBe(false);
  });
  test("update todo", async () => {
    const todo = (await Todo.findByPk(1)) as Todo;
    todo.isCompleted = true;
    await todo.save();

    const result = await Todo.findByPk(1);
    expect(result?.id).toBe(1);
    expect(result?.title).toBe("study TDD");
    expect(result?.isCompleted).toBe(true);
  });

  test("delete todo", async () => {
    const todo = (await Todo.findByPk(1)) as Todo;
    await todo.destroy();

    const result = await Todo.findByPk(1);
    expect(result).toBeNull();
  });
});
