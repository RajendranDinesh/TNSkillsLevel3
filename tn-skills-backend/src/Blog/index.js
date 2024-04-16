const express = require('express');
const blogController = require('./controller');

const router = express.Router();

router.post('/blog', blogController.createBlogPost);
router.get('/blog', blogController.getAllBlogPosts);
router.get('/blog/:id', blogController.getBlogPostById);
router.put('/blog/:id', blogController.updateBlogPostById);
router.delete('/blog/:id', blogController.deleteBlogPostById);

module.exports = router;