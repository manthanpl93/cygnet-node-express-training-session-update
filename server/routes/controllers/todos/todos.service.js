const { TODOS } = require("../../../models");

class TodosService {
  constructor() {
    this.todos = [];
  }

  async getAllTodos(req, res) {
    const todos = await TODOS.findAll();
    res.send(todos);
  }

  async getTodo(req, res) {
    const id = req.params.id;
    const todo = await TODOS.findByPk(id);
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  }

  async saveTodo(req, res) {
    const todo = await TODOS.create(req.body);
    res.send(todo);
  }

  async editTodo(req, res) {
    const id = req.params.id;
    await TODOS.update(req.body, { where: { id: id } });
    const todo = await TODOS.findByPk(id);
    res.send(todo);
  }

  async deleteTodo(req, res) {
    const id = req.params.id;
    const todo = await TODOS.findByPk(id);
    if (todo) {
      await TODOS.destroy({
        where: { id: id },
      });
    } else {
      res.status(404).send("Todo not found");
    }
    res.send(id);
  }
}

module.exports = new TodosService();
