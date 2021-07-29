const express = require("express");
const router = express.Router();

const todosRoutes = require("./controllers/todos/todos.controller")

router.use("/api/todos", todosRoutes)

module.exports = router;