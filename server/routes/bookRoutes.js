const router = require("express").Router();
const bookController = require("../controllers/booksController");

// '/api/books'
router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

// '/api/books/:id' with id being any digit
router
  .route("/:id([0-9]{1,})")
  .get(bookController.getBookById)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

router.route("/:search").get(bookController.getBooksByQuery);

module.exports = router;
