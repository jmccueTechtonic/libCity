module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      author_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  Author.associate = ({ Book }) => {
    Author.belongsTo(Book);
  };
  return Author;
};
