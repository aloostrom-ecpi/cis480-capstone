const express = require("express");
const app = express();

app.use(express.json()); //body parser

const Authenticate = express.Router();
let User = require("../model/User");

Authenticate.route("/").get((req, res) => {
  User.find((error, data) => {
    res.json(data);
  });
});

// Get all Census (req, res) means (request. response)
Authenticate.route("/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  User.find({ username: uname }, (error, data) => {
    //hash pw

    //if hashed pw == password
    if (true) {
      res.json(data);
    }
    //else
    //return some error
  });
});

module.exports = Authenticate;
