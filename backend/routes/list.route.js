const router = require("express").Router();
const User = require("../models/user.model");
const List = require("../models/list.model");

// CREATE
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));

      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    console.log(req.params.id);
    console.log(req.body);
    const updatedList = await List.findByIdAndUpdate(req.params.id, {
      title,
      body,
    });

    // Check if the document was found and updated
    if (updatedList) {
      res.status(200).json({ message: "Task Updated", list: updatedList });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

// GET TASK
router.get("/getTasks", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "No Tasks" });
  }
});

module.exports = router;
