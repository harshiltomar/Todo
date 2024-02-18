const router = require("express").Router();
const ImageDetail = require("../models/image.model");

router.post("/upload-image", async (req, res) => {
  try {
    const { base64 } = req.body;
    if (!base64) {
      return res.status(400).json({ message: "Base64 image data is required" });
    }

    const imagedetail = await ImageDetail.create({ image: base64 });
    res.status(200).json({
      message: "Image upload successfull",
      data: imagedetail,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
