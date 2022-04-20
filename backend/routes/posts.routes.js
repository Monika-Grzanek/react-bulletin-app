const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'Published'})
      .select('author publishedDate title photo')
      .sort({updatedDate: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:_id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params._id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.post('/posts/add', async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
