const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Generate a salt
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password with the generated salt
    const hashpassword = bcrypt.hashSync(password, salt);

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If user exists, send a response with a "User Already Exists!" message
      return res.status(200).json({ message: "User Already Exists!" });
    }

    // If user does not exist, create a new user and save it
    const newUser = new User({ email, username, password: hashpassword });
    await newUser.save();

    // Send a response with the newly created user
    res.status(200).json({ "Sign Up Successfull for": newUser });
  } catch (error) {
    // Handle other errors with a generic message
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
