const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClosedPostSchema = new Schema(
  {
    postDate: { type: Date, default: Date.now },
    author: String,
    body: String,
    reviewRequested: Boolean,
    winningContractor: String,
    closeDate: Date,
    username: String,
  },
  {
    collection: "closedposts",
  }
);

module.exports = mongoose.model("ClosedPost", ClosedPostSchema);
