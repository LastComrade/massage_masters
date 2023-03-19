const enquiry = {
  createEnquiry: async (req, res, next) => {
    try {
      const { name, email, phone, message } = req.body;
      if (!name || !phone || !message) {
        return res.status(400).json({
          message: "Please fill all the fields",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
};

module.exports = enquiry;
