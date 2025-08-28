const express = require("express");
const router = express.Router();
const db = require("../db"); // On récupère la connexion unique

// GET /books
router.get("/", (req, res) => {
  db.all("SELECT * FROM books", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /books
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "Titre et auteur requis" });

  db.run("INSERT INTO books (title, author) VALUES (?, ?)", [title, author], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, title, author });
  });
});

module.exports = router;
