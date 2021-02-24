const router = require("express").Router();
const battleController = require("../../controllers/battleController");


router.route("/:username").post(battleController.register);








module.exports = router;
