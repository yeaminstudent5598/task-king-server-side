import express from "express";
import { createAccesToken } from "../controllers/Auth/createToken.js";
import { createNewTask } from "../controllers/Task/createNewTask.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToke.js";
import getTaskById from "../controllers/Task/getTaskById.js";
import { updateTask } from "../controllers/Task/updateTask.js";
import { getAllTasks } from "../controllers/Task/getAllTasks.js";
import { updateTasksMany } from "../controllers/Task/updateTasksMany.js";
import { deleteTask } from "../controllers/Task/deleteTask.js";

const router = express.Router();

// Authentication
router.post(`/auth/token/new`, createAccesToken);

//  Task Managment
router.post(`/task/new`,  createNewTask); // Create a new Task
router.get(`/task/get/:id`,  getTaskById); // Get Task Data
router.put(`/task/update/:id`,  updateTask); // Update task data
router.get(`/tasks/all`,  getAllTasks); // Get All Tasks
router.put(`/taks/update/many`,  updateTasksMany); // Update takss many
router.delete(`/tasks/delete`,  deleteTask);

// Default
router.get("*", (req, res) => {
  res.json("Hi");
});

export default router;
