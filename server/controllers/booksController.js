const db = require("../models");
const AppError = require("../errorHandler");

exports.getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await db.sequelize.query(
      "SELECT * FROM Books LEFT JOIN Authors ON Books.author_id = Authors.author_id",
      {
        type: db.sequelize.QueryTypes.SELECT,
      }
    );
  } catch (error) {
    console.log(error);
    return next(new AppError("Getting books failed, please try again", 500));
  }

  res.status(201).json({
    status: "Success",
    books,
  });
};

exports.getBookById = async (req, res, next) => {
  const { id } = req.params;
  let book;
  try {
    book = await db.sequelize.query(
      "SELECT * FROM Books LEFT JOIN Authors ON Books.author_id = Authors.author_id WHERE Books.book_id = :BkId",
      {
        replacements: { BkId: id },
        type: db.sequelize.QueryTypes.SELECT,
      }
    );
  } catch (error) {
    return next(new AppError("Getting book failed, please try again", 500));
  }

  res.status(201).json({
    status: "success",
    books: book,
  });
};

exports.getBooksByQuery = async (req, res, next) => {
  let { q } = req.query;
  let books;
  try {
    if (q.includes(" ")) q = q.split(" ").join("|");
    books = await db.sequelize.query(
      "SELECT * FROM Books LEFT JOIN Authors ON Books.author_id = Authors.author_id WHERE Books.title REGEXP " +
        "(:searchQ)" +
        "  OR Authors.author REGEXP " +
        "(:searchQ)",
      {
        replacements: { searchQ: q },
        type: db.sequelize.QueryTypes.SELECT,
      }
    );
  } catch (error) {
    console.log(error);
    return next(new AppError("Getting book(s) failed, please try again", 500));
  }

  res.status(201).json({
    status: "success",
    books,
  });
};

exports.createBook = async (req, res, next) => {
  let { body } = req;

  try {
    const [authorValue, isAuthorCreated] = await db.Author.findOrCreate({
      where: { author: body.author }, // find author with this name OR
      defaults: { author: body.author }, // create author with this name
    });

    let { author, ...remainingBody } = body;
    remainingBody = {
      ...remainingBody,
      author_id: authorValue.author_id,
    };

    await db.Book.create(remainingBody);
  } catch (error) {
    console.log(error);
    return next(new AppError("Creating book failed, please try again", 500));
  }

  res.status(201).json({
    status: "Success",
  });
};

exports.updateBook = async (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    author,
    description,
    pages,
    publishDate,
    ratings,
    image,
  } = req.body;

  try {
    await db.sequelize.query(
      "UPDATE Books JOIN Authors ON Books.author_id = Authors.author_id SET Authors.author = :Auth, Books.title = :BKTitle, Books.description = :BKDescription,  Books.pages = :BKPages, Books.publishDate = :BKPubYr, Books.ratings = :BKRating, Books.image = :BKImage WHERE Books.book_id = :BKId",
      {
        replacements: {
          BKId: id,
          BKTitle: title,
          Auth: author,
          BKDescription: description,
          BKPages: pages,
          BKPubYr: publishDate,
          BKRating: ratings,
          BKImage: image,
        },
        type: db.sequelize.QueryTypes.UPDATE,
      }
    );
  } catch (error) {
    console.log(error);
    return next(new AppError("Updating book failed, please try again", 500));
  }

  res.status(201).json({
    status: "Success",
  });
};

exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.Book.destroy({
      where: { book_id: id },
    });
  } catch (error) {
    return next(new AppError("Deleting book failed, please try again", 500));
  }

  res.status(204).json({
    status: "Success",
  });
};
