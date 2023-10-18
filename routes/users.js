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

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   const user = usersData.find((user) => user._id === id);

//   if (!user) {
//     res.send({ error: `Este usuario no existe` });
//     return;
//   }
//   res.send(user);
// });

module.exports = router;
