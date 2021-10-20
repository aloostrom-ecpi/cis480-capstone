const express = require("express");
const OpenPosts = require("../model/OpenPosts");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = express.Router();

posts.route("/open-posts").get((req, res) => {
  OpenPosts.find({ isParent: true }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      const sortedData = data.sort((a, b) => {
        return new Date(b.postDate) - new Date(a.postDate);
      });
      res.json(sortedData);
    }
  });
});

module.exports = posts;
