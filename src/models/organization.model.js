const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    profilePic: {
      type: "string",
    },
  },
  { timestamps: true }
);

const Organization = mongoose.model("organization", organizationSchema);

module.exports = Organization;
