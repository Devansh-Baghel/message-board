const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/messageSchema")
require("dotenv").config();

const app = express();
const port = 2023;

// connect to mongodb
const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server is connected to port ${port} and is connected to MongoDB`,
      );
    });
  })
  .catch((error) => {
    console.log("Unable to connect to server and/or MongoDB", error);
  });

// middleware
app.use(bodyParser.json());
app.use(cors());
