let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoDb = require("./database/db");

require("dotenv").config();

mongoose.connect(process.env.DB_STR, (err) => {
  if (err) {
    console.log("Failed to connect to database. " + err.message);
  } else {
    console.log("Successfully connected to database");
  }
});

//changed
const capstoneRoute = require("./routes/capstone.routes");
const posts = require("./routes/posts.routes");
const users = require("./routes/users.routes");
const contractors = require("./routes/contractors.routes");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// Static directory path
app.use(express.static(path.join(__dirname, "dist/cis480-capstone")));

// API root
app.use("/api", capstoneRoute);
app.use("/posts", posts);
app.use("/users", users);
app.use("/contractors", contractors);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/cis480-capstone/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
