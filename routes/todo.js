const { Router } = require("express");
const todo = require("../models/todo");
const Todo = require("../models/todo");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json("Server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.done = true;
    await todo.save();
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({});
  } catch (error) {
    res.status(500).json("Server error");
  }
});

module.exports = router;
