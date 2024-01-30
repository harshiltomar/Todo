const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://harshiltomar20:JGLiqDlwTekBJtne@cluster0.dbydwsm.mongodb.net/"
      )
      .then(() => console.log("Connected"));
  } catch (error) {
    res.status(400).json({
      message: "Not Connected",
    });
  }
};

connection();
