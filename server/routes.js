const router = require("express").Router();
const auth = require("./middlewares/auth-middleware");

const {
  createProduct,
  getProduct,
  companyProduct,
} = require("./controllers/product-controller");
const { register } = require("./controllers/auth-controller");

router.post("/api/register", register);
router.post("/api/createProduct", createProduct);
router.get("/api/getProd/:id", getProduct);
router.get("/api/companyProd/:email", companyProduct);

module.exports = router;
