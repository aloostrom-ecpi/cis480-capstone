const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OpenPostSchema = new Schema(
  {
    postDate: { type: Date, default: Date.now },
    author: String,
    body: String,
    isParent: Boolean,
    parentpost: String,
    username: String,
  },
  {
    collection: "openposts",
  }
);

module.exports = mongoose.model("OpenPost", OpenPostSchema);
