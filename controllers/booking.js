const Booking = require("../models/booking");

const booking = {
  createBooking: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const newBooking = new Booking({
        name,
        phone,
        email,
        message,
      });
      await newBooking.save();
      return res.status(201).json({
        message: "Booking created successfully",
        data: newBooking,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },

  getBookings: async (req, res) => {
    try {
      const bookings = await Booking.find();
      return res.status(200).json({
        message: "Bookings fetched successfully",
        data: bookings,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
};

module.exports = booking;
