const router = require("express").Router();
const pantheonController = require("../../controllers/pantheonController");


router.route("/pantheon").post(pantheonController.register);




module.exports = router;
