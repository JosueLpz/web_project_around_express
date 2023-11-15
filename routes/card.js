const router = require("express").Router();

const { getCard, postCard, deleteCard } = require("../controllers/card");

router.get("/", getCard);
router.post("/", postCard);
router.delete("/:id", deleteCard);

module.exports = router;
