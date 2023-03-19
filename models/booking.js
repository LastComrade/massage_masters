const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
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

    preferredDate: {
      type: String,
    },

    preferredTime: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
