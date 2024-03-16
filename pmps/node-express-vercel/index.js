const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Express starter app pmp!");
});

app.listen(5000, () => {
  console.log("Server on 5000");
});
