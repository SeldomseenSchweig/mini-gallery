import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const status = {
  fin: "finished",
  ip: "in-progress",
  UA: "Un-Assigned",
};

const USERS = {
  hayduke: "password123",
  mary: "password456",
};

app.get("/miniatures/users", (req, res) => {
  res.send(USERS);
});

app.post("/miniatures/users", (req, res) => {
  USERS[req.body["username"]] = req.body["password"];
  res.send(req.body);
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
