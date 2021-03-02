const db = require("../models");
const { Battle } = require("../models");
const { Arena } = require("../models");
const { User } = require("../models");


module.exports = {
    register: async (req, res) => {

        // try {

        //     console.log(req.body, req.params);

        //     const findBattle = await db.Battle.find({ _id: req.body.battleId });

        //     console.log(findBattle)

        //     if (findBattle[0].fighter2.username === req.params.username) {
        //         if (findBattle[0].fighter2.music === null && findBattle[0].fighter1.music === null) {
        //             const updateFighter2 = await db.Battle.findOneAndUpdate({
        //                 _id: findBattle[0]._id
        //             }, {
        //                 $set: {
        //                     fighter2: { username: req.params.username, music: req.body.item },
        //                 }
        //             });
        //             res.send("You updated Fighter 2 with a song choice!")
        //         } else if (findBattle[0].fighter2.music === null && findBattle[0].fighter1.music !== null) {
        //                     const updateFighter2 = await db.Battle.findOneAndUpdate({
        //                 _id: findBattle[0]._id
        //             }, {
        //                 $set: {
        //                     fighter2: { username: req.params.username, music: req.body.item },
        //                 }
        //             });
        //                 const updateArena = await db.Arena.findOneAndUpdate({ 
        //                     _id: req.body.arenaId
        //                 }, {
        //                     $set: { completed : req.body.battleId }
        //                 })
        //             res.send("Song has been submitted. Voting Phase can start now")
        //         } else {
        //             res.send("A song has been submitted already")
        //         }
        //     } 
            
            
        //     if (findBattle[0].fighter1.username === req.params.username) {
        //         if (findBattle[0].fighter1.music === null && findBattle[0].fighter2.music === null) {
        //             const updateFighter1 = await db.Battle.findOneAndUpdate({
        //                 _id: findBattle[0]._id
        //             }, {
        //                 $set: {
        //                     fighter1: { username: req.params.username, music: req.body.item }

        //                 }
        //             });
        //             res.send("You updated Fighter 1 with a song choice!")
        //         }  else if (findBattle[0].fighter1.music === null && findBattle[0].fighter2.music !== null) {
        //                 const updateFighter2 = await db.Battle.findOneAndUpdate({
        //                         _id: findBattle[0]._id
        //                     }, {
        //                         $set: {
        //                             fighter1: { username: req.params.username, music: req.body.item },
        //                         }
        //                     });
        //                         const updateArena = await db.Arena.findOneAndUpdate({ 
        //                             _id: req.body.arenaId
        //                         }, {
        //                             $push: { completed : req.body.battleId }
        //                         })
        //                     res.send("Song has been submitted. Voting Phase can start now")
        //             } else {
        //             res.send("A song has already been chosem")
        //         }
        //     }
        //     // const checkForBattles = await db.Arena.find({ _id: req.body.arenaId });



            // if (checkForBattles[0].battles.length === 1) {
            //     const newBattle = new db.Battle({
            //         fighter1: {
            //             username: req.params.username,
            //             music: req.body.item
            //         },
            //         fighter2: null,
            //         votesForFighter1: [],
            //         votesForFighter2: [],
            //         arenaId: req.body.arenaId,
            //         pantheonId: req.body.pantheonId,
            //         status: "In Progress"
            //     });

                

            //     const savedBattle = await newBattle.save();

            //     const updateArena = await db.Arena.findByIdAndUpdate({
            //         _id: req.body.arenaId
            //     }, {
            //         $push: {
            //             battles: savedBattle._id
            //         }
            //     });

            //     res.send("You are the first person to submit their choice of song. Once the other compeitors have submitted their songs, the creator can start the voting phase");

            // } else if (checkForBattles[0]._id == req.body.arenaId && checkForBattles[0].pantheonId == req.body.pantheonId) {
            //     const battleId = checkForBattles[0].battles[1]

            //     const checkIfFighterHasAlreadySubmitted = await db.Battle.find({ _id: battleId});

            //     if (checkIfFighterHasAlreadySubmitted[0].fighter1.username === req.params.username || checkIfFighterHasAlreadySubmitted[0].fighter2 !== null 
            //         // checkIfFighterHasAlreadySubmitted[0].fighter2.username === req.params.username  
            //         ) {
            //         res.send("Already submitted a song")
            //     } else {             


            //         const updateBattle = await db.Battle.findByIdAndUpdate({
            //             _id: battleId
            //         }, {
            //             $set: { "fighter2" : { username: req.params.username, music: req.body.item}}
            //         });

            //         const updateArenaStatus = await db.Arena.findByIdAndUpdate({
            //             _id: req.body.arenaId
            //         }, {
            //             $set: { "completed" : true}
            //         });

            //         res.send("Submitted the song")
            //     }
            // }

         

        // } catch (err) {
        //     console.log(err)
        // }

    },

    findArenaReadyVote: async (req, res) => {

        // try {

        //     const findUser = await db.User.find({ username: req.params.username});


        //     const checkStatus = [];

        //     const confirmedBattles = [];

        //     const response = [];

        //     const checkResponse = [];

        //     for (let i = 0; i < findUser[0].battles.length; i++) {
        //         const checkArenaStatus = await db.Arena.find({ _id: findUser[0].arena[i] })
        //         await checkStatus.push(checkArenaStatus[0])
        //     };

        //     for (let i = 0; i < checkStatus.length; i++) {
        //         checkStatus[i].completed.forEach(item => {
        //             confirmedBattles.push(item);
        //         })
        //     };

        //     for (let i = 0; i < confirmedBattles.length; i++) {
        //         const foundBattle = await db.Battle.find({ _id: confirmedBattles[i] });
        //         response.push(foundBattle[0])
        //     };

        //     for (let i = 0; i < response.length; i++) {
        //         if (response[i].playersWhoVoted.includes(req.params.username)) {

        //         } else {
        //             checkResponse.push(response[i])
        //         }
        //     }

        

        //     res.json(checkResponse)

        // } catch (err) {
        //     console.log(err)
        // }
    },

    saveVotes: async (req, res) => {

        // try {

        //     const findBattle = await db.Battle.find({ _id: req.body.state._id });

        //     if (findBattle[0].playersWhoVoted.includes(req.body.username)) {
        //         res.send("You have already voted")
        //     } else if (req.body.fighter.username === findBattle[0].fighter1.username) {
        //         const updateBattle1 = await db.Battle.findByIdAndUpdate({
        //             _id: findBattle[0]._id
        //         }, {
        //             $push: { votesForFighter1: req.body.username, playersWhoVoted: req.body.username}
        //         });
        //             res.send("You have voted for" + " " + findBattle[0].fighter1.username)
        //     } else if (req.body.fighter.username === findBattle[0].fighter2.username) {
        //         const updateBattle2 = await db.Battle.findByIdAndUpdate({
        //             _id: findBattle[0]._id
        //         }, {
        //             $push: { votesForFighter2: req.body.username, playersWhoVoted: req.body.username}
        //         });
        //         res.send("You have voted for" + " " + findBattle[0].fighter2.username)
        //     }

            // const findBattle = await db.Battle.find({ _id: req.body.state._id });

            // console.log(findBattle);

            // if (findBattle[0].playersWhoVoted.includes(req.body.username)) {
            //     res.send("You have already Voted")
            // } else if (findBattle[0].fighter1.username === req.body.fighter.username) {
            //     const updateFighter1 = await db.Battle.findOneAndUpdate({
            //         _id: findBattle[0].id
            //     }, {
            //         $push: { votesForFighter1 : req.body.username, playersWhoVoted: req.body.username },
            //         // $push: { playersWhoVoted: req.body.username }
            //     });

            //     res.send("Your vote has been counted. You voted for Fighter 1")

            // } else if (findBattle[0].fighter2.username === req.body.fighter.username) {
            //     const updateFighter2 = await db.Battle.findOneAndUpdate({
            //         _id: findBattle[0].id
            //     }, {
            //         $push: { votesForFighter2 : req.body.username, playersWhoVoted: req.body.username }
            //         // $push: { playersWhoVoted: req.body.username }
            //     });

            //     res.send("Your vote has been counted. You voted for Fighter 2")

            // }


        // } catch (err) {
        //     console.log(err)
        // }
    }
}