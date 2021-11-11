const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
