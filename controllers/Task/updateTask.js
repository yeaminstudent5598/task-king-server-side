import TaskModel from "../../models/task.model.js";

export const updateTask = async (req, res) => {
  const { uid } = req.query;
  const { id } = req.params;
  const { title, description } = req.body;

  if (!uid || !id || !title || !description) {
    return res.status(400).json({ error: "Give all arguments" });
  }

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};
