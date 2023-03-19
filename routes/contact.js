const router = require("express").Router();
const contactCont = require("../controllers/contact");
const contactMid = require("../middlewares/contact");
const authMid = require("../middlewares/auth");

router
  .route("/create-contact")
  .post(contactMid.createContact, contactCont.createContact);

router.route("/get-contacts").get(authMid.admin, contactCont.getContacts);

module.exports = router;
