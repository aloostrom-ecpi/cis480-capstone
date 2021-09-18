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


//Leave this at the end of the file so we can export the complete
//  definition of the API
module.exports = capstoneRoute;