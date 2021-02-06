const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = {
    getHighestRating: async (req, res) => {
        console.log("new one")
        const ratings = await db.User.find().sort({"rating": -1}).limit(1)
        console.log(ratings[0])
    }
}