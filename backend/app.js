const express = require("express");
const app = express();
const cors = require("cors");
require("./connection/connection");

//routes
const auth = require("./routes/auth.route");
const list = require("./routes/list.route");
const history = require("./routes/history.route");
const image = require("./routes/image.route");
const sendMail = require("./controllers/sendMail");

// to receive and send data in json format
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

//make a post on sendemail
app.post("/sendemail", async (req, res) => {
  try {
    await sendMail(req.body.email);
    res.status(200).send("Email sent successfuly!");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email.");
  }
});

app.use("/api/v1", auth);
app.use("/api/v2", list);
app.use("/api/v3", history);
app.use("/api/v4", image);

app.listen(3000, () => {
  console.log("Server started");
});
