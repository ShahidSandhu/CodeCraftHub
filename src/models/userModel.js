// src/models/userModel.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Additional fields as needed
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
