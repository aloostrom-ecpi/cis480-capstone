const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json()); //body parser

const user = express.Router();
let User = require("../model/User");

// Get user info
user.route("/authenticate/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  User.findOne({ username: uname }, async (error, data) => {
    if (error) return error;

    const { _id, username, firstname, lastname } = data;

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(pw, data.password, (err, result) => {
      if (result) {
        res.status(200).json({ _id, username, firstname, lastname });
      }
    });
  });
});

user.route("/suspend/:id").get((req, res) => {
  const id = req.params.id;
});

module.exports = user;
