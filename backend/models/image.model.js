const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
  {
    image: String,
  },
  { collection: "ImageDetails" }
);

module.exports = mongoose.model("ImageDetail", ImageDetailsSchema);
