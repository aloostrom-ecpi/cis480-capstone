let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoDb = require("./database/db");

console.log("hello world");

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected ");
    },
    (error) => {
      console.log("Database error: " + error);
    }
  );

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

// Static directory path
app.use(express.static(path.join(__dirname, "dist/cis480-capstone")));

// API root
app.use("/api", capstoneRoute);
app.use("/posts", posts);
app.use("/users", users);
app.use("/contractors", contractors);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/cis480-capstone/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
