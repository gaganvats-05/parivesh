const prod = require("../models/product-model");

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, description, type, image_url, manufacture } = req.body;
    console.log("new Product", req.body);

    if (!name || !description || !type || !image_url || !manufacture) {
      return res.status(401).json({ message: "Please enter all fields" });
    }

    const newProd = await prod.create({
      name,
      manufacture,
      image_url,
      type,
      description,
    });

    if (newProd) {
      return res.status(201).json({
        _id: newProd._id,
        name: newProd.name,
        url: newProd.image_url,
        type: newProd.type,
        manufacture: newProd.manufacture,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "Product not found",
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const product = await prod.findById(id);
    res.status(200).json({
      singleProd: product,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

const companyProduct = async (req, res) => {
  const { email } = req.params;
  console.log("email", email);

  try {
    const products = await prod.find({ manufacture: email });
    res.status(200).json({
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

module.exports = { createProduct, getProduct, companyProduct };