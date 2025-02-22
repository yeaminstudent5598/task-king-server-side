import TaskModel from "../../models/task.model.js";

export const deleteTask = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.send({ error: "Give all arguments" }, 400);
    return;
  }

  try {
    const deleteTask = await TaskModel.findByIdAndDelete(id);
    res.send(deleteTask);
  } catch (err) {}
};
