const express = require('express');
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Validator = require("./todos.validation");
const TodoService = require("./todos.service");
const todosService = require('./todos.service');

router.get('/', (req, res) => {
    TodoService.getAllTodos(req, res)
})

router.get('/:id', (req, res) => {
    todosService.getTodo(req, res)
})

router.post('/', Validator.create(), (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        TodoService.saveTodo(req, res)
    } else {
        res.status(422).send(errors.array())
    }

})

router.patch('/:id', Validator.create(), (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        TodoService.editTodo(req, res)
    } else {
        res.status(422).send(errors.array())
    }
})

router.delete('/:id', (req, res) => {
    TodoService.deleteTodo(req, res)
})

module.exports = router;