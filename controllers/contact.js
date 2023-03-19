const Contact = require("../models/contact");

const contact = {
  createContact: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      const newContact = new Contact({
        name,
        email,
        phone,
        message,
      });
      await newContact.save();
      return res.status(201).json({
        message: "Contact created successfully",
        data: newContact,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
  getContacts: async (req, res) => {
    try {
      const contacts = await Contact.find();
      return res.status(200).json({
        message: "Contacts fetched successfully",
        data: contacts,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  },
};

module.exports = contact;
