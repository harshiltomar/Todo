const router = require("express").Router();
const User = require("../models/user.model");
const History = require("../models/history.model");
const List = require("../models/list.model");

// Route to fetch history tasks
router.get("/historyTask/:id", async (req, res) => {
  const list = await History.findById({ user: req.params.id }).sort({
    createdAt: -1,
  });
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "No Tasks" });
  }
});

//CREATE IN HISTORY AND DELETE FROM LIST
router.post("/historyTask/:id", async (req, res) => {
  try {
    // Find the list item to move to history
    const listItemId = req.params.id;
    const { id } = req.body;
    console.log(id);
    const listItem = await List.findById(listItemId).populate("user");

    if (!listItem) {
      return res.status(404).json({ message: "List item not found" });
    }

    // Create a new history item with the same data
    const historyItem = new History({
      title: listItem.title,
      body: listItem.body,
      user: id, // Keep track of the user who created the task in history
      createdAt: new Date(),
    });

    // Save the history item
    await historyItem.save();

    // Remove the list item from the user's list array
    const existingUser = await User.findByIdAndUpdate(listItemId, {
      $pull: { list: req.params.id },
    });

    await List.findByIdAndDelete(req.params.id);

    // Send the response after both operations have completed
    res.status(200).json({
      message: "Task moved to history and deleted from list successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
