const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { ensureAuth } = require("../middleware/auth");

//checks user logged in from get req then send to todos controller
router.get("/", ensureAuth, todosController.getTodos);

router.post("/createTodo", todosController.createTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
