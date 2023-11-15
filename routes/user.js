const router = require("express").Router();
const { getUser, getUserId, postUser } = require("../controllers/user");

router.get("/", getUser);
router.get("/:id", getUserId);
router.post("/", postUser);

module.exports = router;
