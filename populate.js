require("dotenv").config();
const mongoConnect = require("./db/connect");
const Product = require("./models/product");
const products = require("./products.json");

const populateDB = async () => {
  try {
    await mongoConnect(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(products);
    console.log("Success");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};

populateDB();
