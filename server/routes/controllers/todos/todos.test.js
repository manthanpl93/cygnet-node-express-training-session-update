const { text } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");
const { TODOS } = require("../../../models");

describe("TODOS API", () => {
  beforeEach(async () => {
    await TODOS.bulkCreate([
      {
        id: 1,
        text: "Coffe",
        completed: 1,
      },
      {
        id: 2,
        text: "Coding",
        completed: 0,
      },
      {
        id: 3,
        text: "Assignment",
        completed: 0,
      },
      {
        id: 4,
        text: "Essay writing",
        completed: 0,
      },
      {
        id: 5,
        text: "Moview",
        completed: 1,
      },
    ]);
  });

  afterEach(async () => {
    await TODOS.destroy({
      where: {},
      truncate: true,
    });
  });

  test("Fetch todos", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(5);
  });

  test("Fetch single todo", async () => {
    const res = await request(app).get("/api/todos/4");
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(4);
    expect(res.body.text).toEqual("Essay writing");
    expect(res.body.completed).toEqual(false);
  });

  test("Insert todo", async () => {
    const res = await request(app).post("/api/todos").send({
      text: "Music",
      completed: true,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.text).toEqual("Music");
    expect(res.body.completed).toEqual(true);
    const todos = await TODOS.findAll();
    expect(todos.length).toEqual(6);
  });

  test("Edit todo", async () => {
    const res = await request(app).patch("/api/todos/2").send({
      text: "Coding",
      completed: true,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.completed).toEqual(true);
  });

  test("Delete todo", async () => {
    const res = await request(app).delete("/api/todos/4");
    expect(res.statusCode).toEqual(200);
    const todos = await TODOS.findAll();
    expect(todos.length).toEqual(4);
  });

});
