const router = require("express").Router();
const auth = require("./middlewares/auth-middleware");

const { signUp, login } = require("./controllers/auth-controller");

router.post("/api/register", signUp);
router.post("/api/login", login);

module.exports = router;
