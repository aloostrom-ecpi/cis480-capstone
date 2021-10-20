//API runs as Express. Pull it into the definition
const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Make the thing an API and name it
const capstoneRoute = express.Router();

//import our data models, courtesy of Aren Ignacio
let ClosedPosts = require("../model/ClosedPosts");
let Contractors = require("../model/Contractors");
let OpenPosts = require("../model/OpenPosts");
let ReportedPosts = require("../model/ReportedPosts");
let Reviews = require("../model/Reviews");
let User = require("../model/User");

//^^AREN^^

//User Authentication -- Aren
capstoneRoute.route("/authenticate/user").post((req, res) => {
  const { username, password } = req.body;

  User.find({ username }, async (error, data) => {
    if (error) return next(error);

    if (!data.length || data[0].suspended) {
      res.send("User not found");
      return;
    }
    //extract attributes from data
    const { _id, username, firstname, lastname } = data[0];

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(password, data[0].password, (err, result) => {
      if (!result) res.send("Invalid Password");

      if (result) {
        res.status(200).json({ _id, username, firstname, lastname });
      }
    });
  });
});

//Contractor Authentication --Aren
capstoneRoute.route("/authenticate/contractor").post((req, res) => {
  const { username, password } = req.body;

  Contractors.find({ username }, async (error, data) => {
    if (error) return next(error);

    if (!data.length || data[0].suspended) {
      res.send("User not found");
      return;
    }
    //extract attributes from data
    const { _id, username, firstname, lastname } = data[0];

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(password, data[0].password, (err, result) => {
      if (!result) res.send("Invalid Password");

      if (result) {
        res.status(200).json({ _id, username, firstname, lastname });
      }
    });
  });
});

//Username finder - for user
capstoneRoute.route("/user/username/:id").get((req, res) => {
  const id = req.params.id;

  User.findById(id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      const { username } = data;
      res.json(username);
    }
  });
});

//Add User to user collection
capstoneRoute.route("/user").post((req, res, next) => {
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

//Username finder - for contractor
capstoneRoute.route("/contractor/username/:id").get((req, res) => {
  const id = req.params.id;

  Contractors.findById(id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      const { username } = data;
      res.json(username);
    }
  });
});

capstoneRoute.route("/user/role/:id").get((req, res) => {
  const id = req.params.id;

  User.findById(id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      const { role } = data;
      res.json(role);
    }
  });
});

//^^^^^^^PAL^^^^^^^

/**********
Open Posts
***********/

//get all open posts --PAL
capstoneRoute.route("/open-posts").get((req, res) => {
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

//get all open posts for a user --PAL
capstoneRoute.route("/open-posts/:username").get((req, res) => {
  OpenPosts.find({ username: req.params.username }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

capstoneRoute.route("/remove-post/:id").delete((req, res, next) => {
  OpenPosts.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log(`${req.params.id} has been deleted`);
    }
  });
});

//search
capstoneRoute.route("/search/:category/:query").get((req, res) => {
  const { category, query } = req.params;

  if (category === "author")
    //OpenPosts.find({ author: query }, (error, data) => {
    //search by username instead of ID
    OpenPosts.find({ username: query }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });

  if (category === "post")
    OpenPosts.find(
      { body: { $regex: query, $options: "i" } },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      }
    );
});

//load current account details --PAL
capstoneRoute.route("/load-account/:username").get((req, res) => {
  User.findOne({ username: req.params.username }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

capstoneRoute.route("/child-posts/:parentID").get((req, res) => {
  const parentID = req.params.parentID;

  OpenPosts.find({ parentpost: parentID }, (error, data) => {
    const sortedData = data.sort((a, b) => {
      return new Date(a.postDate) - new Date(b.postDate);
    });

    if (error) {
      return next(error);
    } else {
      res.json(sortedData);
    }
  });
});

//create reply post (child post)
capstoneRoute
  .route("/reply/:parentID-:authorID-:username")
  .post((req, res, next) => {
    const { parentID, authorID, username } = req.params;

    const newReply = {
      author: authorID,
      body: req.body["body"],
      isParent: false,
      parentpost: parentID,
      username: username,
    };

    OpenPosts.create(newReply, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        next();
      }
    });
  });

//create parent post
capstoneRoute.route("/new-post/:authorID-:username").post((req, res, next) => {
  const { authorID, username } = req.params;

  const newPost = {
    author: authorID,
    body: req.body["body"],
    isParent: true,
    parentpost: "",
    username: username,
  };

  OpenPosts.create(newPost, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      next();
    }
  });
});

capstoneRoute.route("/edit-post/:id").put((req, res, next) => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  OpenPosts.findByIdAndUpdate(
    req.params.id,
    {
      body: `${req.body["body"]}
      (edited ${today})`,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log("data updated successfully!");
        res.json(data);
      }
    }
  );
});

//Leave this at the end of the file so we can export the complete
//definition of the API
module.exports = capstoneRoute;
