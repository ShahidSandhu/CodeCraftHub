// src/app.js
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
// Connect to the database
connectDB();
// Define routes
app.use("/api/users", userRoutes);
module.exports = app;
