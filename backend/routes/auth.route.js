const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// SIGN IN
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If user exists, send a response with a "User Already Exists!" message
      return res.status(400).json({ message: "User Already Exists!" });
    }

    // If user does not exist, create a new user and save it
    const newUser = new User({ email, username, password: hashpassword });
    await newUser.save();

    // Send a response with the newly created user
    res.status(200).json({ user: newUser });
  } catch (error) {
    // Handle other errors with a generic message
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).json({ message: "Please Sign Up First" });
    }

    const ispasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!ispasswordValid) {
      res.status(400).json({ message: "Password is not Correct" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    // Handle other errors with a generic message
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
