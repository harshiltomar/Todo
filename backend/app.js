const express = require("express");
const app = express();
const cors = require("cors");
require("./connection/connection");

//routes
const auth = require("./routes/auth.route");
const list = require("./routes/list.route");

// to receive and send data in json format
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(3000, () => {
  console.log("Server started");
});
