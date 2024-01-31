const mongoose = require("mongoose");

// Middleware to handle connection
const connection = async (req, res, next) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://harshiltomar20:todoapplication123@cluster0.dbydwsm.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.error(error);
  }
};

connection();
