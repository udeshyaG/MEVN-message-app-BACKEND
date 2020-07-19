const mongoose = require("mongoose");

const Messages = mongoose.model("Messages", {
  username: {
    type: String,
    default: "Anonymous",
  },

  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    maxlength: 500,
  },

  imageURL: {
    type: String,
  },

  created: {
    type: Date,
  },
});

module.exports = Messages;
