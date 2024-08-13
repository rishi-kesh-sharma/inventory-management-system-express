const {
  viewLogin,
  login,
  signup,
  viewSignup,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/login", viewLogin);

router.post("/login", login);

router.get("/signup", viewSignup);

router.post("/signup", signup);

module.exports = router;
