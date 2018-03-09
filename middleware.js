const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index");
const compression = require("compression");
const minify = require("express-minify");

module.exports = app => {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(compression());
  app.use(minify());
  app.use(express.static(path.join("public"), { maxage: "2h" }));
  app.use(express.static(path.join(__dirname, "public"), { maxage: "2h" }));

  app.get("/", (req, res, next) => {
    res.set("Cache-Control", "public, max-age=430000");
    res.set("Expires", new Date(Date.now() + 2592000000).toUTCString());
    next();
  });

  app.use("/", routes);
};
