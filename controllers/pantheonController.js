const db = require("../models");
const { Pantheon } = require("../models");


module.exports = {
    register: async (req, res) => {
        try {

            const newPantheon = new Pantheon ({
                data: req.body.data,
                players: req.body.players,
                creator: req.body.creator
            });

            const savedPantheon = await newPantheon.save();
            res.json(savedPantheon);

        } catch (err) {
            console.log(err)
        }
    },
    find: async (req, res) => {
        try {

            const foundPantheon = await db.Pantheon.find({ players: req.params.username });

            res.json(foundPantheon)

        } catch (err) {
            console.log(err)
        }
    }
}