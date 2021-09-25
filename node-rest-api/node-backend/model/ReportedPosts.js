const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ReportedPostSchema = new Schema(
  {
    postDate: { type: Date, default: Date.now },
    author: String,
    body: String,
    reason: String,
    adminReviewer: String,
    username: String,
  },
  {
    collection: "Reportedposts",
  }
);

module.exports = mongoose.model("ReportedPost", ReportedPostSchema);
