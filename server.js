const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 2000;
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const app = express();
const mongooseUrl = "mongodb://localhost:27017/e-commerce";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// user router
app.use("/user", userRouter);
// product router
app.use("/product", productRouter);
// order router
app.use("/order", orderRouter);

// mongoose connection
const mongooseConnection = async () => {
  try {
    await mongoose.connect(mongooseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connected Failed");
  }
};
mongooseConnection();
// server running
app.listen(port, () => {
  console.log(`Server Running Port Number ${port}`);
});
