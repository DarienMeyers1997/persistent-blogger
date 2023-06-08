const express = require("express");
router = express.Router();

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
} = require("../Controller/authorController");

router.get("/all-authors", getAllAuthors),
  router.post("/create-author", createAuthor),
  router.get("/author-by-id", getAuthorById),
  router.put("/update-author", updateAuthorById),
  router.delete("/delete-author", deleteAuthor);

module.exports = router;
