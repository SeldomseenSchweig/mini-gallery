import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const status = {
  fin: "finished",
  ip: "in-progress",
  UA: "Un-Assigned",
};

app.get("/miniatures/:status", (req, res) => {
  res.send(status[req.params.status]);
});
app.listen(3001, () => {
  console.log("running on port 3001");
});
