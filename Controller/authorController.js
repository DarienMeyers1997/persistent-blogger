const Blogs = require("../Models/Blogs");

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find({});
    res.status(200).json({ success: true, data: allAuthors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = await new Author(req.body);
    const saveAuthor = await blogs.save();
    res.status(200).json({ success: true, data: saveAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await Author.find({ _id: id });
    if (!author)
      return res
        .staus(400)
        .json({ success: false, message: "author not found" });
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

const updateAuthorById = async (req, res) => {
  try {
    const updateAuthor = await Author.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updateAuthor)
      return res.status(400).json({ success: false, data: "author not found" });
    res.status(200).json({ success: true, data: updateAuthor });
  } catch (error) {
    res.status(500).json({ succuss: false, message: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  const blogDelete = await Author.findOneAndDelete({ _id: req.params.id });
  if (!authorDelete)
    return res
      .status(400)
      .json({ success: false, message: "author not found" });
  res.status(200).json({ success: true, data: blogDelete });
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  getAuthorById,
  deleteAuthor,
};
