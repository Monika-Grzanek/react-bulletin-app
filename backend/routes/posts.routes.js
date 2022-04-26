const express = require('express');
const router = express.Router();
const PostController = require('./../controllers/posts.controller');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = file.originalname.split('.').slice(-1)[0];
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
  }
})

const upload = multer({ storage: storage })

router.get('/posts', PostController.getAllPosts);

router.get('/post/:_id', PostController.getPostById);

router.post('/post/add', upload.single('photo'), PostController.addNewPost);

router.get('/post/:_id/edit', PostController.editPost);


module.exports = router;
