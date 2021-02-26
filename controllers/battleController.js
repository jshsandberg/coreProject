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
                    votesForFighter1: [],
                    votesForFighter2: [],
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

                if (checkIfFighterHasAlreadySubmitted[0].fighter1.username === req.params.username || checkIfFighterHasAlreadySubmitted[0].fighter2 !== null 
                    // checkIfFighterHasAlreadySubmitted[0].fighter2.username === req.params.username  
                    ) {
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
    },

    saveVotes: async (req, res) => {

        try {

            console.log(req.body)

            const findBattle = await db.Battle.find({ _id: req.body.state._id });

            console.log(findBattle);

            if (findBattle[0].playersWhoVoted.includes(req.body.username)) {
                res.send("You have already Voted")
            } else if (findBattle[0].fighter1.username === req.body.fighter.username) {
                const updateFighter1 = await db.Battle.findOneAndUpdate({
                    _id: findBattle[0].id
                }, {
                    $push: { votesForFighter1 : req.body.username, playersWhoVoted: req.body.username },
                    // $push: { playersWhoVoted: req.body.username }
                });

                res.send("Your vote has been counted. You voted for Fighter 1")

            } else if (findBattle[0].fighter2.username === req.body.fighter.username) {
                const updateFighter2 = await db.Battle.findOneAndUpdate({
                    _id: findBattle[0].id
                }, {
                    $push: { votesForFighter2 : req.body.username, playersWhoVoted: req.body.username }
                    // $push: { playersWhoVoted: req.body.username }
                });

                res.send("Your vote has been counted. You voted for Fighter 2")

            }


        } catch (err) {
            console.log(err)
        }
    }
}