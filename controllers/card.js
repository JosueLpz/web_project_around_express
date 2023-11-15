const Card = require("../models/card");

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) =>
      res.status(500).send({ message: "Error Mensaje Controllers Get 1" })
    );
};

module.exports.postCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error Mensaje Controllers Post" });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch((err) =>
      res.status(500).send({ message: "Error Mensaje Controllers Get 2" })
    );
};
