const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});
