const { Client } = require("pg");

let DB_URI;

if (process.env.NODE === "test") {
  DB_URI = "postgresql:///miniaturesdb_test";
} else {
  DB_URI = "postgresql:///miniaturesdb";
}

let db = new Client({
  connectString: DB_URI,
});

db.connect();

module.exports = db;
