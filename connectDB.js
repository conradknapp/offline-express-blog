const config = require("./config");

module.exports = mongoose => {
  mongoose.connect(config.db.url);
  const db = mongoose.connection;
  db.on("open", () => console.log("Connected to Mongo"));
  db.on("error", err => console.error(err));
};
