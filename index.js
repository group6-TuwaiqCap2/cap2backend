const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.get("/movie", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=movie&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/podcast", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=podcast&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/music", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=music&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/audiobook", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=audiobook&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/musicVideo", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=musicVideo&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/tvShow", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=tvShow&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/software", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=software&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.get("/ebook", (req, res) => {
  axios
    .get("https://itunes.apple.com/search?term=all&media=ebook&limit=24")
    .then((response) => {
      res.status(200).json(response.data);
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

module.exports = app;
