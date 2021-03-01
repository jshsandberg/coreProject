const router = require("express").Router();
const pantheonController = require("../../controllers/pantheonController");


router.route("/").post(pantheonController.register);
router.route("/:username").post(pantheonController.find);
router.route("/creator/:username").post(pantheonController.findCreator)
router.route("/music").post(pantheonController.startMusic);








module.exports = router;
