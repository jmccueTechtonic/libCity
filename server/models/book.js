module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      description: {
        type: DataTypes.TEXT,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      publishDate: {
        type: DataTypes.DATEONLY,
      },
      ratings: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.BLOB("long"),
      },
    },
    {
      timestamps: true,
    }
  );

  Book.associate = (models) => {
    Book.hasOne(models.Author, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Book;
};
