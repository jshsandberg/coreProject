const router = require("express").Router();
const userRoute = require("./user.js");
const mediaController = require("../../controllers/mediaController");


// User routes
router.use("/user", userRoute);
router.route("/maxRatings").post(mediaController.getHighestRating);


module.exports = router;
