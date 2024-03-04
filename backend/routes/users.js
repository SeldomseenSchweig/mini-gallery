const { hash, compare } = require("bcrypt");
const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const results = await db.query(`SELECT * FROM users`);
  return res.json(results.rows);
});
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let hashedPassword = await hash(password, 12);
    const result = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING  *",
      [username, email, hashedPassword]
    );
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    return next(error);
  }
});
