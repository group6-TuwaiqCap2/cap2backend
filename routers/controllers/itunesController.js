const fs = require("fs");

// movies
let movies = [];
fs.readFile("/movie", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    movies = JSON.parse(data.toString());
  }
});
const getAllMovies = (req, res) => {
  res.status(200).json(movies);
};

// podcast
let podcast = [];
fs.readFile("/podcast", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    podcast = JSON.parse(data.toString());
  }
});
const getAllPodcast = (req, res) => {
  res.status(200).json(podcast);
};
// music
let music = [];
fs.readFile("/music", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    music = JSON.parse(data.toString());
  }
});
const getAllMusic = (req, res) => {
  res.status(200).json(music);
};

// musicVideo
let musicVideo = [];
fs.readFile("/musicVideo", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    musicVideo = JSON.parse(data.toString());
  }
});
const getAllMusicVideo = (req, res) => {
  res.status(200).json(musicVideo);
};

// audiobook
let audiobook = [];
fs.readFile("/audiobook", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    audiobook = JSON.parse(data.toString());
  }
});
const getAllaudiobook = (req, res) => {
  res.status(200).json(audiobook);
};

// tvShow
let tvShow = [];
fs.readFile("/tvShow", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    tvShow = JSON.parse(data.toString());
  }
});
const getAlltvShow = (req, res) => {
  res.status(200).json(tvShow);
};

// software
let software = [];
fs.readFile("/software", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    software = JSON.parse(data.toString());
  }
});
const getAllsoftware = (req, res) => {
  res.status(200).json(software);
};

// ebook
let ebook = [];
fs.readFile("/ebook", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    ebook = JSON.parse(data.toString());
  }
});
const getAllebook = (req, res) => {
  res.status(200).json(ebook);
};

module.exports = {
  getAllMovies,
  getAllPodcast,
  getAllMusic,
  getAllaudiobook,
  getAlltvShow,
  getAllsoftware,
  getAllebook,
};
