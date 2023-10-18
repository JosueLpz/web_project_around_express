const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const cardData = path.join(__dirname, "../data/card.json");

router.get("/", (req, res) => {
  const cardReader = fs.createReadStream(cardData, { encoding: "utf8" });

  cardReader.on("error", (err) => {
    console.error("Error al leer el archivo:", err);
    res.status(500).send("Ha ocurrido un error, intente de nuevo más tarde");
  });

  cardReader.on("open", () => {
    res.setHeader("Content-Type", "application/json");
    cardReader.pipe(res);
  });

  cardReader.on("end", () => {
    cardReader.close();
  });
});

module.exports = router;
