// db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./livre.db", (err) => {
  if (err) console.error("Erreur DB:", err.message);
  else console.log("Connecté à SQLite");
});

module.exports = db;
