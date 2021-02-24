const db = require("../models");
const { Battle } = require("../models");
const { Arena } = require("../models");


module.exports = {
    register: async (req, res) => {

        try {

            const checkForBattles = await db.Arena.find({ _id: req.body.arenaId });

            console.log(checkForBattles[0].battles.length);

            if (checkForBattles[0].battles.length === 1) {
                const newBattle = new db.Battle({
                    fighter1: {
                        username: req.params.username,
                        music: req.body.item
                    },
                    fighter2: null,
                    votesForFighter1: null,
                    votesForFighter2: null,
                    arenaId: req.body.arenaId,
                    pantheonId: req.body.pantheonId,
                    status: "In Progress"
                });

                

                const savedBattle = await newBattle.save();

                const updateArena = await db.Arena.findByIdAndUpdate({
                    _id: req.body.arenaId
                }, {
                    $push: {
                        battles: savedBattle._id
                    }
                });

                console.log(savedBattle, updateArena);

            }

         

        } catch (err) {
            console.log(err)
        }

    }
}