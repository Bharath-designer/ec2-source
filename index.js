const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("called");
  res.send("hello world");
});

app.get("/block", (req, res) => {
  for (let i = 0; i < 3000000000; i++) {}

  res.send("hello world from block");
});

app.listen(3000);
