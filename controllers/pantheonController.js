const db = require("../models");
const { Pantheon } = require("../models");


module.exports = {
    register: async (req, res) => {
        try {

            const newPantheon = new Pantheon ({
                data: req.body.data,
                players: req.body.players
            });

            const savedPantheon = await newPantheon.save();
            res.json(savedPantheon);

        } catch (err) {
            console.log(err)
        }
    }
}