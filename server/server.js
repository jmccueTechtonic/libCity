const express = require("express");
const logger = require("morgan"); // prints logging, was it a POST, how long, how many bytes
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const AppError = require("./errorHandler");

const { sequelize } = require("./models");

const PORT = process.env.PORT || 9009;
const app = express();

const corsOptions = {
  origin: "http://localhost:1234",
};

// middleware magic
app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

app.use("/api/books", bookRoutes);

app.use((req, res, next) => {
  next(new AppError("Could not find route", 404));
});
// This error handling middleware will throw an error if a middleware in front of it returns an error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server now listening on 'http://localhost:${PORT}'!`);
    });
  })
  .catch((error) => console.log(error));
