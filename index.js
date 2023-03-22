require("dotenv").config();
const express = require("express");

const productRouter = require("./routes/product");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFoundMiddleware = require("./middleware/notFound");
const mongoConnect = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/products", productRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

mongoConnect(process.env.MONGO_URL)
  .then(() => app.listen(PORT))
  .then(() => console.log("Server listening at PORT::", PORT))
  .catch((err) => console.log(err));
