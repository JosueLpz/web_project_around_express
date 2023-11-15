const User = require("../models/user");

module.exports.getUser = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) =>
      res.status(500).send({ message: "Error Mensaje Controllers Get 1" })
    );
};

module.exports.getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) =>
      res.status(500).send({ message: "Error Mensaje Controllers Get 2" })
    );
};

module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() =>
      res.status(500).send({ message: "Error Mensaje Controllers Post" })
    );
};
