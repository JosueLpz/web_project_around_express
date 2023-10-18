const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const userPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(userPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).send("Ha ocurrido un error, intente de nuevo más tarde");
      return;
    }
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(userPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(404).send("Usuario no encontrado, intente de nuevo más tarde");
      return;
    }
    const { id } = req.params;
    const users = JSON.parse(data);
    const user = users.find((user) => user._id === id);
    res.send(user);
  });
});

module.exports = router;
