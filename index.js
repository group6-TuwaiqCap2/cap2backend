const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");
const fs = require("fs");

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

let faiveredmovie = [];
fs.readFile("./db/faiverotmovie.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    faiveredmovie = JSON.parse(data.toString());
  }
});

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

//favoruite

const addToFav2 = (req, res) => {
  const { result } = req.body;
  faiveredmovie.push(result);
  fs.writeFile(
    "./db/faiverotmovie.json",
    JSON.stringify(faiveredmovie),
    (err) => {
      if (err) {
        res.status(404).json("badresult");
      } else {
        res.status(200).json(result);
      }
    }
  );
};
app.post("/movie/addToFav2", addToFav2);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});

module.exports = app;
