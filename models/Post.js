const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Post", postSchema);
