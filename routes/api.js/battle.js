const router = require("express").Router();
const battleController = require("../../controllers/battleController");


router.route("/:username").post(battleController.register);
router.route("/voting/:username").post(battleController.findArenaReadyVote);
router.route("/saveVotes/:username").post(battleController.saveVotes);










module.exports = router;
