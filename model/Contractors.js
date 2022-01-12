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
    suspended: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    externalLink: { type: String, default: "" },
    notification: [
      {
        description: String,
        link: String,
      },
    ],
  },
  {
    collection: "contractors",
  }
);

module.exports = mongoose.model("Contractor", ContractorSchema);
