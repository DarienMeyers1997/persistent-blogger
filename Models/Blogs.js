const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const blogSchema = mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  lastModified: { type: Date, default: new Date() },
  createdAt: Date,
});

const blogs = mongoose.model("blogs", blogSchema);
module.exports = blogs;
