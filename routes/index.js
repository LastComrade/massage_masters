const router = require("express").Router();
const booking = require("./booking");
const enquiry = require("./enquiry");
const contact = require("./contact");

router.use("/booking", booking);
router.use("/enquiry", enquiry);
router.use("/contact", contact);

module.exports = router;
