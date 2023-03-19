const Enquiry = require("../models/enquiry");

const enquiry = {
  createEnquiry: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const newEnquiry = new Enquiry({
        name,
        email,
        phone,
        message,
      });
      await newEnquiry.save();
      return res.status(201).json({
        message: "Enquiry created successfully",
        data: newEnquiry,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
  getEnquiries: async (req, res) => {
    try {
      const enquiries = await Enquiry.find();
      return res.status(200).json({
        message: "Enquiries fetched successfully",
        data: enquiries,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
};

module.exports = enquiry;
