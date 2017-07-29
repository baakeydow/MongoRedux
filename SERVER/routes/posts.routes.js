var express = require('express');
var PostController = require('../controllers/post.controller');

var router = express.Router();


// Get all Posts
router.route('/listPosts').get(PostController.getPosts);

// Get one post by cuid
router.route('/get/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/add').post(PostController.addPost);

// Delete a post by cuid
router.route('/del/:cuid').delete(PostController.deletePost);

module.exports = router;
