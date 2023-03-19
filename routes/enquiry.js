const router = require("express").Router();
const enquiryCont = require("../controllers/enquiry");
const enquiryMid = require("../middlewares/enquiry");
const authMid = require("../middlewares/auth");

router
  .route("/create-enquiry")
  .post(enquiryMid.createEnquiry, enquiryCont.createEnquiry);

router.route("/get-enquiries").get(authMid.admin, enquiryCont.getEnquiries);

module.exports = router;
