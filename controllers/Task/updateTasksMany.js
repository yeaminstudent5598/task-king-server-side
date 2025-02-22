import TaskModel from "../../models/task.model.js";

export const updateTasksMany = async (req, res) => {
  const updateTasks = req.body;
  try {
    const bulkOps = updateTasks.map((update) => ({
      updateOne: {
        filter: { _id: update.id },
        update: { $set: { category: update.category, index: update.index } },
      },
    }));

    const result = await TaskModel.bulkWrite(bulkOps);
    res.send({ succes: true });
  } catch (error) {
    console.error("Error updating tasks:", error);
  }
};
