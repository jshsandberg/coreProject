const router = require("express").Router();
const userRoute = require("./user.js");
const pantheonRoute = require("./pantheon.js");
const mediaController = require("../../controllers/mediaController");
const arenaRoute = require("./arena.js");
const battleRoute = require("./battle.js");


// User routes
router.use("/user", userRoute);
router.use("/pantheon", pantheonRoute);
router.use("/arena", arenaRoute);
router.use("/battle", battleRoute);
router.route("/maxRatings").post(mediaController.getHighestRating);


module.exports = router;
