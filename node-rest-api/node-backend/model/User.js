const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    role: { type: Number },
    suspended: { type: Boolean },
    notification: [
      {
        description: String,
        link: String,
      },
    ],
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", UserSchema);
