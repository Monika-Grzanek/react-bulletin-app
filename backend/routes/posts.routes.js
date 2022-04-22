const express = require('express');
const router = express.Router();
const PostController = require('./../controllers/posts.controller');

router.get('/posts', PostController.getAllPosts);

router.get('/post/:_id', PostController.getPostById);

router.post('/post/add', PostController.addNewPost);

router.get('/post/:_id/edit', PostController.editPost);


module.exports = router;
