const router = require("express").Router();
const userRoute = require("./user.js");

// User routes
router.use("/user", userRoute);

module.exports = router;
