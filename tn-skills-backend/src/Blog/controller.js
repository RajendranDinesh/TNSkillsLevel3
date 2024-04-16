const express = require('express');
const Blog = require('./model');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  try {
    const blogs = req.body;
    const savedBlogs = [];
    for (const blog of blogs) {
      const { title, content } = blog;
      const newBlog = new Blog({
        title,
        content
      });
      const savedBlog = await newBlog.save();
      savedBlogs.push(savedBlog);
    }
    res.status(201).json(savedBlogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single blog post by ID
exports.getBlogPostById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog post by ID
exports.updateBlogPostById = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
      title,
      content
    }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog post by ID
exports.deleteBlogPostById = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

