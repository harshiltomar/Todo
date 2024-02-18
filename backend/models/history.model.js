const mongoose = require("mongoose");
const historySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      expires: 604800,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
