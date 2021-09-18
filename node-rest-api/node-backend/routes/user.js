const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json()); //body parser

const user = express.Router();
let User = require("../model/User");

// Get user info
Authenticate.route("/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  User.findOne({ username: uname }, async (error, data) => {
    if (error) data.send;
    //hash pw

    bcrypt.compare(pw, data.password, (err, result) => {
      if (result) res.status(200).json(data);
    });
  });
});

module.exports = Authenticate;
