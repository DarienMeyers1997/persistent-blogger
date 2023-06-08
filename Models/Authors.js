const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const authorSchema = mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Authors = mongoose.model("authors", authorSchema);
module.exports = Authors;
