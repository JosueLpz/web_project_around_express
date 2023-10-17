const router = require("express").Router();
const usersData = require("../data/users.json");

router.get("/users", (req, res) => {
  res.send(usersData);
});

router.get("/users/:_id", (req, res) => {
  const { _id } = req.params;

  const user = usersData.find((user) => user._id === _id);

  if (!user) {
    res.send({ error: `Este usuario no existe` });
    return;
  }
  res.send(user);
});

module.exports = router;
