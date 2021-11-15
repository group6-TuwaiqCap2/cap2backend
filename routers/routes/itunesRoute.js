const express = require("express");
const {
  getAllMovies,
  getAllPodcast,
  getAllMusic,
  getAllaudiobook,
  getAlltvShow,
  getAllsoftware,
  getAllebook,
} = require("./controllers/itunesController");

// getAllMovies
const getAllMoviesMiddleware = (req, res, next) => {
  console.log("get All Movies");
  next();
};
const movieRouter = express.Router();
movieRouter.get("/", getAllMoviesMiddleware, getAllMovies);

// getAllPodcast
const getAllPodcastMiddleware = (req, res, next) => {
  console.log("get All podacst");
  next();
};
const podcastRouter = express.Router();
podcastRouter.get("/", getAllPodcastMiddleware, getAllPodcast);

// getAllMusic
const getAllMusicMiddleware = (req, res, next) => {
  console.log("get All music");
  next();
};
const musicRouter = express.Router();
musicRouter.get("/", getAllMusicMiddleware, getAllMusic);

// getAllaudiobook
const getAllaudiobookMiddleware = (req, res, next) => {
  console.log("get All audiobook");
  next();
};
const audiobookRouter = express.Router();
audiobookRouter.get("/", getAllaudiobookMiddleware, getAllaudiobook);

// getAlltvShow
const getAlltvShowMiddleware = (req, res, next) => {
  console.log("get All tv Show");
  next();
};
const tvShowRouter = express.Router();
tvShowRouter.get("/", getAlltvShowMiddleware, getAlltvShow);

// getAllsoftware
const getAllsoftwareMiddleware = (req, res, next) => {
  console.log("get All software");
  next();
};
const softwareRouter = express.Router();
softwareRouter.get("/", getAllsoftwareMiddleware, getAllsoftware);

// getAllebook
const getAllebookMiddleware = (req, res, next) => {
  console.log("get All ebook");
  next();
};
const ebookRouter = express.Router();
ebookRouter.get("/", getAllebookMiddleware, getAllebook);

const getAllebookMiddleware = (req, res, next) => {
  console.log("get All ebook");
  next();
};

(module.exports = movieRouter),
  podcastRouter,
  musicRouter,
  audiobookRouter,
  tvShowRouter,
  softwareRouter,
  ebookRouter;
