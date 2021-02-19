const router = require("express").Router();
const pantheonController = require("../../controllers/pantheonController");


router.route("/").post(pantheonController.register);







module.exports = router;
