const express = require("express");
router = express.Router();

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlog,
} = require("../Controller/blogsController");

router.get("/all-blogs", getAllBlogs);
router.post("/create-blog", createBlog);
router.get("/blog-by-id", getBlogById);
router.put("/update-blog", updateBlogById);
router.delete("/delete-blog", deleteBlog);

module.exports = router;
