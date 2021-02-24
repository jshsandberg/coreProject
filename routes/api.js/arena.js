const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");


router.route("/").post(arenaController.register);
router.route("/find/:username").post(arenaController.findByUsername);








module.exports = router;
