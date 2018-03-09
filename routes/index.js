const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const posts = await Post.find({}).exec();
  res.render("index", { posts });
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
      body: req.body.body
    });
    const postSaved = await post.save();
    await res.redirect("/");
  });

router.get("/posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId).exec();
  res.render("post", { post });
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
