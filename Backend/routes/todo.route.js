import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controller/todo.controller.js";
import express from "express";
const router = express.Router();

router.post("/create", createTodo);

router.get("/fetch", getTodos);

router.put("/update/:id", updateTodo);

router.delete("/delete/:id", deleteTodo);

export default router;
