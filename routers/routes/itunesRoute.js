const express = require("express");
const { getAllMovies } = require("./controllers/itunesController");

const getAllMoviesMiddleware = (req, res, next) => {
  console.log("get All Movies");
  next();
};

const movieRouter = express.Router();

movieRouter.get("/", getAllMoviesMiddleware, getAllMovies);
