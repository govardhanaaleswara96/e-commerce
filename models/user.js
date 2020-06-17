const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuid } = require("uuid");

const userSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
// user model
module.exports = mongoose.model("user", userSchema);
