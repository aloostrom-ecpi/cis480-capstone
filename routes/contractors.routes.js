const express = require("express");
const bcrypt = require("bcrypt");
const Contractors = require("../model/Contractors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

//#Registration API
router.route("/register").post((req, res, next) => {
  console.log(req.body);

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    req.body.password = hash;
    console.log(hash);
    Contractors.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });
});

module.exports = router;
