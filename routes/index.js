const router = require("express").Router();
const booking = require("./booking");

router.use("/booking", booking);

module.exports = router;
