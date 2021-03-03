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
router.route("/results/:username").post(pantheonController.getResults);
router.route("/finalBattle/:id").post(pantheonController.createFinalBattle);
router.route("/finalMusic/:username").post(pantheonController.getFinalMusic);
router.route("/finalMusicChoice/:username").post(pantheonController.submitFinalBattle);
router.route("/finalVoting/:username").post(pantheonController.castFinalVote);
router.route("/saveFinalVotes/:username").post(pantheonController.saveFinalVotes);
router.route("/finalResults/:username").post(pantheonController.getFinalResults);
router.route("/complete/:id").post(pantheonController.complete);




















module.exports = router;
