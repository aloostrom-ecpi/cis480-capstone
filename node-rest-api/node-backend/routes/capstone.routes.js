//API runs as Express. Pull it into the definition
const express = require("express");
const app = express();

//Make the thing an API and name it
const capstoneRoute = express.Router();

//import our data models, courtesy of Aren Ignacio
let ClosedPosts = require("../model/ClosedPosts");
let Contractors = require("../model/Contractors");
let OpenPosts = require("../model/OpenPosts");
let ReportedPosts = require("../model/ReportedPosts");
let Reviews = require("../model/Reviews");
let User = require("../model/User");

//^^^^^^^PAL^^^^^^^

//Open Posts

//get all open posts --PAL
capstoneRoute.route("/open-posts").get((req, res) => {
  OpenPosts.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

<<<<<<< HEAD
user.route("/authenticate/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  User.findOne({ username: uname }, async (error, data) => {
    if (error) return next(error);

    //extract attributes from data
    const { _id, username, firstname, lastname } = data;

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(pw, data.password, (err, result) => {
      if (err) return err;
=======
//get all open posts for a user --PAL
capstoneRoute.route("/open-posts/:userId").get((req, res) => {
    OpenPosts.find({author: req.params.userId}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});
>>>>>>> 30fa9de144aa3b2a36dd867426f4118913505b13

      if (result) {
        res.status(200).json({ _id, username, firstname, lastname });
      }
    });
  });
});

//Leave this at the end of the file so we can export the complete
//  definition of the API
module.exports = capstoneRoute;
