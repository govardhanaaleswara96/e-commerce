const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuid } = require("uuid");

const productSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid,
    },
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_price: {
      type: Number,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
