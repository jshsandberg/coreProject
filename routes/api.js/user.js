const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/:id").post(userController.findById);
router.route("/review/:userId").post(userController.saveReview);
router.route("/mediaReview/:spotifyId").post(userController.getReview);
router.route("/addFriend/:username").post(userController.addFriend);
router.route("/getFriends/:userId").post(userController.getFriends);
router.route("/pantheon/:id").post(userController.acceptPantheon);




module.exports = router;
