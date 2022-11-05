const router = require("express").Router();
const auth = require("./middlewares/auth-middleware");

const {
  createProduct,
  getProduct,
  companyProduct,
} = require("./controllers/product-controller");
const { signUp, login } = require("./controllers/auth-controller");

router.post("/api/register", signUp);
router.post("/api/login", login);
router.post("/api/createProduct", auth, createProduct);
router.get("/api/getProd/:id", auth, getProduct);
router.get("/api/companyProd/:email", auth, companyProduct);

module.exports = router;
