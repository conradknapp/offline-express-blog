const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config");
require("dotenv").config();

const Post = require("./models/Post");
const setupMiddleware = require("./middleware");
const connectDB = require("./connectDB");

connectDB(mongoose);
setupMiddleware(app);

app.listen(config.port, () => {
  console.log(`Express running →  PORT ${config.port}`);
});
