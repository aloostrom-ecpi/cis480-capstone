//API runs as Express. Pull it into the definition
const express = require("express");
const bcrypt = require("bcrypt");

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

//^^AREN^^

//User Authentication -- Aren
capstoneRoute.route("/authenticate/user/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  User.find({ username: uname }, async (error, data) => {
    if (error) return next(error);

    if (!data.length || data[0].suspended) {
      res.send("User not found");
      return;
    }
    //extract attributes from data
    const { _id, username, firstname, lastname } = data[0];

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(pw, data[0].password, (err, result) => {
      if (!result) res.send("Invalid Password");

      if (result) {
        res.status(200).json({ _id, username, firstname, lastname });
      }
    });
  });
});

//Contractor Authentication --Aren
capstoneRoute.route("/authenticate/contractor/:uname&:pw").get((req, res) => {
  const { uname, pw } = req.params;

  Contractors.find({ username: uname }, async (error, data) => {
    if (error) return next(error);

    if (!data.length || data[0].suspended) {
      res.send("User not found");
      return;
    }
    //extract attributes from data
    const { _id, username, firstname, lastname } = data[0];

    //compare pw with hashed pw and return id, username, firstname, and lastname
    bcrypt.compare(pw, data[0].password, (err, result) => {
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

//

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
      res.json(data);
    }
  });
});
/* using find({...}).lean()
capstoneRoute.route("/open-posts").get((req, res) => {
  OpenPosts.find({isParent: true}, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      data.forEach(function(part, index) {
        User.find({_id: this[index].author}, 'username', (err, doc) => {
          if (err) return next(err);
          else {
            const {_id, username} = doc[0];
            this[index].author = doc[0].username;
          }
        })
      }, data)
      res.json(data);
    }
  }).lean();
});
*/

/*
//other methods tried...
capstoneRoute.route("/open-posts").get((req, res) => {
  OpenPosts.find((error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      //this doesnt work... --PAL
      // check out https://stackoverflow.com/questions/14504385/why-cant-you-modify-the-data-returned-by-a-mongoose-query-ex-findbyid
      /*data.forEach(element =>
        //replace the userId with the username
        element.author = User.find({_id: element.author},'username', (err, doc) => {
          if (err) return next(err);
          const {_id, username} = doc[0];
          console.log("we'll replace " + element.author + " with "+ doc[0].username);
          return doc[0].username;
        })
      )*/
//Neither does this...
/*
      data.foreach(function(part, index) {
        User.find({_id: this[index].author}, 'username', (err, doc) => {
          if (err) return next(err);
          else {
            const {_id, username} = doc[0];
            this[index].author = doc[0].username;
          }
        })
      }, data)
      res.json(data);
    }
  });
});
*/

//get all open posts for a user --PAL
capstoneRoute.route("/open-posts/:userId").get((req, res) => {
  OpenPosts.find({ author: req.params.userId }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

capstoneRoute.route("/remove-post/:id").delete((req, res, next) => {
  console.log(req.params.id);

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
  console.log("checkpoint 1");
  const { category, query } = req.params;

  OpenPosts.find({ author: query }, (error, data) => {
    console.log(data);

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
