const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Importer le routeur
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}/books`);
});

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API des livres !");
});