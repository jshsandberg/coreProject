const router = require("express").Router();
const apiRoutes = require("./api.js");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;