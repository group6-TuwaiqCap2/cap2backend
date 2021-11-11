const fs = require("fs");

let movies = [];
fs.readFile(
  "/movies",
  (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else {
        movies = JSON.parse(data.toString());
    }
  }
);


module.exports = {
    getAllMovies
  };
  