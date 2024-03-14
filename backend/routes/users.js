const express = require("express");
const db = require("../db");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  const results = await db.query(`SELECT * FROM users`);
  return res.json(results.rows);
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);

    if (user.status) return res.json(user.message);

    return res.status(201).json(`Sucessfly created user: ${user.username}`);
  } catch (error) {
    console.log(error);
  }
});

router.get("/login", async (req, res, next) => {
  const user = await User.login(req.body);
  console.log(user);
});

module.exports = router;
