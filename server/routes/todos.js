const express = require('express');
const router = express.Router();

let todos = [{
    "text": "Assignment 2",
    "completed": true,
    "id": "8966083724223504"
}, {
    "text": "Assignment 3",
    "completed": true,
    "id": "8075147385021388"
}]

router.get('/', (req, res) => {
    res.send(todos)
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(el => el.id === id)
    res.send(todo)
})

router.post('/', (req, res) => {
    const todo = { ...req.body, id: Math.random().toString().slice(2) }
    todos.push(todo)
    res.send(todo)
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = { ...req.body, id };
    todos = todos.map(el => {
        if (el.id === id) {
            return updatedTodo
        }
        return el;
    })
    res.send(updatedTodo)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(el => el.id !== id)
    res.send(id)
})

module.exports = router;