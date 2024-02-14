const router = require("express").Router();
const User = require("../models/user.model");
const History = require("../models/history.model");
const List = require("../models/list.model");

// Route to fetch history tasks
router.get("/historyTask", async (req, res) => {
  try {
    // Fetch all history tasks from the database
    const historyTasks = await History.find({}, "title body"); // Only retrieve title and body fields

    // Extract titles and bodies from history tasks
    const arrayOfPairs = historyTasks.map((task) => ({
      title: task.title,
      body: task.body,
    }));

    // Send the array of pairs as a response
    res.status(200).json(arrayOfPairs);
  } catch (error) {
    console.error("Error fetching history tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//CREATE IN HISTORY AND DELETE FROM LIST
router.post("/historyTask/:id", async (req, res) => {
  try {
    // Find the list item to move to history
    const listItemId = req.params.id;
    const listItem = await List.findById(listItemId).populate("user");

    if (!listItem) {
      return res.status(404).json({ message: "List item not found" });
    }

    // Create a new history item with the same data
    const historyItem = new History({
      title: listItem.title,
      body: listItem.body,
      user: listItem.user._id, // Keep track of the user who created the task in history
    });

    // Save the history item
    await historyItem.save();

    // Remove the list item from the user's list array
    const id = req.params.id;
    const existingUser = await User.findByIdAndUpdate(id, {
      $pull: { list: req.params.id },
    });
    console.log(req.params.id);
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
