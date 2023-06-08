const Blogs = require("../Models/Blogs");

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find({});
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body);
    const saveBlog = await blog.save();
    res.status(200).json({ success: true, data: saveBlog });
  } catch (error) {
    res.staus(500).json({ success: false, messsage: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.find({ _id: id });
    try {
      if (!blog) return res.status(400).json({ success: true, data: saveBlog });
    } catch (error) {
      res.status(500).json({ success: true, data: blog });
    }
  } catch (error) {}
};

const updateBlogById = async (req, res) => {
  try {
    const updateBlog = await Blog.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updateBlog)
      return res
        .status(400)
        .json({ success: false, message: "blog does not exist" });
    res.status(200).json({ success: true, data: updateBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const blogDelete = await Blog.findOneAndDelete({ _id: req.params.id });
  if (!blogDelete)
    return res
      .status(400)
      .json({ success: false, messsage: "blog does not exist" });
  res.status(200).json({ success: true, data: blogDelete });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlog,
};
