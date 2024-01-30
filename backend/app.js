const express = require("express");
const app = express();
require("./connection/connection");
const auth = require("./routes/auth.route");

// to receive and send data in json format
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1", auth);
app.listen(3000, () => {
  console.log("Server started");
});
