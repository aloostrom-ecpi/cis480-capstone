const express = require("express");
const Contractors = require("../model/Contractors");

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.route("/register").post((req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    req.body.password = hash;
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
