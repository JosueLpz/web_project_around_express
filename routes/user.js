const router = require("express").Router();
const {
  getUser,
  getUserId,
  postUser,
  patchUser,
  patchUserAvatar,
} = require("../controllers/user");

router.get("/", getUser);
router.get("/:id", getUserId);
router.post("/", postUser);
router.patch("/me/:id", patchUser);
router.patch("/me/avatar/:id", patchUserAvatar);

module.exports = router;
