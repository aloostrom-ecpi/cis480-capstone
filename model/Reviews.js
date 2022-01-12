const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ReviewsSchema = new Schema(
  {
    responseDate: Date,
    author: String,
    body: String,
    contractor: String,
    user: String,
    rating: Number,
  },
  {
    collection: "reviews",
  }
);

module.exports = mongoose.model("Review", ReviewsSchema);
