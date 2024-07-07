const mongoose = require("mongoose");

const webInfoSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    pageUrl: {
      type: String,
    },
    emailId: {
      type: String,
    },
    password: {
      type: String,
    },
    securityQuestion: {
      type: String,
    },
    domain: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("webInfo", webInfoSchema);
