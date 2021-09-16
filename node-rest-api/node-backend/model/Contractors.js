const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContractorSchema = new Schema(
  {
    companyName: String,
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    suspended: { type: Boolean },
    rating: Number,
    externalLink: String,
  },
  {
    collection: "contractors",
  }
);

module.exports = mongoose.model("Contractor", ContractorSchema);
