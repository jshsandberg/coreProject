const router = require("express").Router();
const arenaController = require("../../controllers/arenaController");


router.route("/").post(arenaController.register);








module.exports = router;
