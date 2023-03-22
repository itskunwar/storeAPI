const Product = require("../models/product");

const getFilteredData = async (req, res, next) => {
  try {
    const { name, featured } = req.query;
    const queryObject = {};
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    if (featured) {
      queryObject.featured = featured;
    }
    const products = await Product.find(queryObject).sort("name");
    res.status(200).json({ count: products.length, products });
  } catch (err) {
    next(err);
  }
};

module.exports = { getFilteredData };
