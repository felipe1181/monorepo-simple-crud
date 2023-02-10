const express = require("express");
const TodoController = require("./app/controllers/todoController");

const router = new express.Router();

router.get("/todo", TodoController.index);

router.get("/todo/:id", TodoController.indexById);

router.post("/todo", TodoController.create);

router.put("/todo/:id", TodoController.update);

router.delete("/todo/:id", TodoController.delete);

module.exports = router;
