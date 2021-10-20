const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = express.Router();

const User = require("../model/User");

users.route("/register").post((req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    req.body.password = hash;
    User.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });
});

module.exports = users;
