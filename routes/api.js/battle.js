const router = require("express").Router();
const battleController = require("../../controllers/battleController");


router.route("/:username").post(battleController.register);
router.route("/voting/:username").post(battleController.findArenaReadyVote);









module.exports = router;
