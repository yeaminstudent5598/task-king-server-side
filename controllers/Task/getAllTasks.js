import TaskModel from "../../models/task.model.js";

export const getAllTasks = async (req, res) => {
  const { uid } = req.query;

  if (!uid) {
    res.send({ error: "Give all aurguments" }, 400);
    return;
  }

  try {
    const allTaks = await TaskModel.find({ authorUID: uid })
      .select(" -authorUID")
      .lean();

    res.send(allTaks, 200);
  } catch (err) {
    res.send({ error: "Somethign went wrong" }, 500);
  }
};
