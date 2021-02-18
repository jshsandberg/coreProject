const router = require("express").Router();
const userRoute = require("./user.js");
const pantheonRoute = require("./pantheon.js");
const mediaController = require("../../controllers/mediaController");


// User routes
router.use("/user", userRoute);
router.use("/pantheon", pantheonRoute);
router.route("/maxRatings").post(mediaController.getHighestRating);


module.exports = router;
