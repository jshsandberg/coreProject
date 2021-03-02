const router = require("express").Router();
const pantheonController = require("../../controllers/pantheonController");


router.route("/").post(pantheonController.register);
router.route("/:username").post(pantheonController.find);
router.route("/creator/:username").post(pantheonController.findCreator)
router.route("/music/:id").post(pantheonController.startMusic);
router.route("/find/:username").post(pantheonController.getMusic);
router.route("/battle/:username").post(pantheonController.submitBattle);
router.route("/voting/:username").post(pantheonController.castVote);
router.route("/saveVotes/:username").post(pantheonController.saveVotes);












module.exports = router;
