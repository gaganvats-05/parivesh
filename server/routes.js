const router = require("express").Router();

const {
  createProduct,
  getProduct,
  companyProduct,
} = require("./controllers/product-controller");

router.post("/api/createProduct", createProduct);
router.get("/api/getProd/:id", getProduct);
router.get("/api/companyProd/:email", companyProduct);

module.exports = router;
