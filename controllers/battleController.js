const db = require("../models");
const { Battle } = require("../models");
const { Arena } = require("../models");
const { User } = require("../models");


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

                const checkIfFighterHasAlreadySubmitted = await db.Battle.find({ _id: battleId});

                // console.log(checkIfFighterHasAlreadySubmitted[0]);

                if (checkIfFighterHasAlreadySubmitted[0].fighter1.username === req.params.username || checkIfFighterHasAlreadySubmitted[0].fighter2.username === req.params.username  ) {
                    res.send("Already submitted a song")
                } else {             


                    const updateBattle = await db.Battle.findByIdAndUpdate({
                        _id: battleId
                    }, {
                        $set: { "fighter2" : { username: req.params.username, music: req.body.item}}
                    });

                    const updateArenaStatus = await db.Arena.findByIdAndUpdate({
                        _id: req.body.arenaId
                    }, {
                        $set: { "completed" : true}
                    });

                    res.send("Submitted the song")
                }
            }

         

        } catch (err) {
            console.log(err)
        }

    },

    findArenaReadyVote: async (req, res) => {

        try {

            const findUser = await db.User.find({ username: req.params.username});

            const checkStatus = []

            for (let i = 0; i < findUser[0].arena.length; i++) {
                const checkArenaStatus = await db.Arena.find({ _id: findUser[0].arena[i] })
                await checkStatus.push(checkArenaStatus)
            };

            for (let i = 0; i < checkStatus.length; i++) {


                if (checkStatus[i][0].completed === true) {
                    checkStatus[i][0].battles.forEach( async (item) => {
                    const findBattle = await db.Battle.find({ _id: item })
                    if (findBattle.length !== 0) {
                        res.json(findBattle)
                    }
                })
                }
            };

        } catch (err) {
            console.log(err)
        }
    }
}