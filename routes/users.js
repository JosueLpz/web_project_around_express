const router = require("express").Router();
const usersData = require("../data/users.json");

router.get("/users", (req, res) => {
  res.send(usersData);
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = usersData[userId];

  if (!user) {
    res.status(404).send("Usuario no encontrado");
    return;
  }
  res.send(user);
});

module.exports = router;
