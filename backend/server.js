import express from "express";

const app = express();

app.get("/dogs", (req, res) => {
  res.send("<h1>HELLO</h1>");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
