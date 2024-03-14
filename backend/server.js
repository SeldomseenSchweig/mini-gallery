const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.listen(3001, () => {
  console.log("running on port 3001");
});
