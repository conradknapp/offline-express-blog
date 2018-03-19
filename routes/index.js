const express = require("express");
const router = express.Router();
const fs = require("fs");
const Post = require("../models/Post");
const md = require("marked");

router.get("/", async (req, res) => {
  const posts = await Post.find({}).exec();
  res.render("index", { posts });
});

router.get("/sw.js", (req, res) => {
  res.set("Content-Type", "application/javascript");
  const input = fs.createReadStream(`${__dirname}/../client/sw.js`);
  input.pipe(res);
});

router.get("/posts", async (req, res) => {
  const allPosts = await Post.find({}).exec();
  res.render("posts", { allPosts });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/topics", (req, res) => {
  res.render("topics");
});

router.get("/offline.html", (req, res) => {
  res.set("Content-Type", "	text/html");
  const input = fs.createReadStream(`${__dirname}/../client/offline.html`);
  input.pipe(res);
});

router
  .route("/posts/add")
  .get((req, res) => {
    res.render("add_post", { title: "Add Post" });
  })
  .post(async (req, res) => {
    const post = await new Post({
      title: req.body.title,
      author: req.body.author,
      topic: req.body.topic,
      body: req.body.body
    });
    const postSaved = await post.save();
    await res.redirect("/");
  });

router.get("/posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId).exec();
  res.render("post", { post, md });
});

router
  .route("/posts/edit/:postId")
  .get(async (req, res) => {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    res.render("edit_post", { post });
  })
  .post(async (req, res) => {
    const post = {};
    Object.entries(req.body).map(([key, value]) => (post[key] = value));
    const postSaved = await Post.update(
      { _id: req.params.postId },
      { $set: post }
    );
    await res.redirect("/");
  });

router.delete("/posts/:postId", async (req, res) => {
  await Post.remove({ _id: req.params.postId }).exec();
  await res.json({ success: true });
});

module.exports = router;
