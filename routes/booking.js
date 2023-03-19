const router = require("express").Router();
const bookingCont = require("../controllers/booking");
const bookingMid = require("../middlewares/booking");
const authMid = require("../middlewares/auth");

router
  .route("/create-booking")
  .post(bookingMid.createBooking, bookingCont.createBooking);

router.route("/get-bookings").get(authMid.admin, bookingCont.getBookings);

module.exports = router;
