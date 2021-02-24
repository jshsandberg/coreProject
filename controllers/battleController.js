const db = require("../models");
const { Battle } = require("../models");
const { Arena } = require("../models");


module.exports = {
    register: async (req, res) => {

        try {


            const checkForBattles = await db.Arena.find({ _id: req.body.arenaId });


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

                res.send("You are the first person to submit their choice of song. Once the other compeitors have submitted their songs, the creator can start the voting phase");

            } else if (checkForBattles[0]._id == req.body.arenaId && checkForBattles[0].pantheonId == req.body.pantheonId) {
                const battleId = checkForBattles[0].battles[1]

                console.log(req.body.item)

                const updateBattle = await db.Battle.findByIdAndUpdate({
                    _id: battleId
                }, {
                    $set: { "fighter2" : { username: req.params.username, music: req.body.item}}
                });

                const updateArenaStatus = await db.Arena.findByIdAndUpdate({
                    _id: req.body.arenaId
                }, {
                    $set: { "completed" : true}
                })
            }

         

        } catch (err) {
            console.log(err)
        }

    },

    findArenaReadyVote: async (req, res) => {

        try {

// Doesnt make sense, other people will be able to vote on battles they are nto a part of, need to make teh users keep track of the arena and patheon ids
            const findVotingArena1 = await db.Battle.find(
                { "fighter1.username": req.params.username }
            );

            const findVotingArena2 = await db.Battle.find(
                { "fighter2.username": req.params.username }
            );

            if (findVotingArena1.length === 1) {
                res.json(findVotingArena1)
            } else if (findVotingArena2.length === 1) {
                res.json(findVotingArena2)
            } else {
                console.log("err findArenaReadyVote")
            }

        } catch (err) {
            console.log(err)
        }
    }
}