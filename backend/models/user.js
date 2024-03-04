const db = require("../db");
const { hash, compare } = require("bcrypt");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../errorHandling/expressError");

class User {
  static async register({ username, email, password }) {
    try {
      const duplicateCheck = await db.query(
        `SELECT username
         FROM users
         WHERE username = $1`,
        [username]
      );

      if (duplicateCheck.rows[0]) {
        return new BadRequestError(`Duplicate username: ${username}`);
      }
      let hashedPassword = await hash(password, 2);
      const result = await db.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING  *",
        [username, email, hashedPassword]
      );
      return result.rows[0];
    } catch (error) {
      return new BadRequestError(`${error}`);
    }
  }
}
module.exports = User;
