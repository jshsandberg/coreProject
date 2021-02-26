const { response } = require("express");
const db = require("../models");
const { Arena } = require("../models");
const { Pantheon } = require("../models");
const { User } = require("../models");
const { Battle } = require("../models");





module.exports = {
    register: async (req, res) => {
        try {
         
            const playerArr = req.body.players;

            await playerArr.push(req.body.creator);

            if (playerArr.length === 4) {

                const getShuffledArr = arr => {
                    const newArr = arr.slice()
                    for (let i = newArr.length - 1; i > 0; i--) {
                        const rand = Math.floor(Math.random() * (i + 1));
                        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
                    }
                    return newArr
                };

                const shuffledArr = getShuffledArr(playerArr);

  

                
                // const firstBattle = new Battle ({
                //     fighter1: {
                //         username: shuffledArr[0],
                //         music: null
                //     },
                //     fighter2: {
                //         username: shuffledArr[1],
                //         music: null
                //     },
                //     votesForFighter1: null,              
                //     votesForFighter2: null,               
                //     arenaId: null,                
                //     pantheonId: null,                
                //     status: "In-Progress",
                //     playersWhoVoted: null

                // });

                // const secondBattle = new Battle ({
                //     fighter1: {
                //         username: shuffledArr[2],
                //         music: null
                //     },
                //     fighter2: {
                //         username: shuffledArr[3],
                //         music: null
                //     },
                //     votesForFighter1: null,              
                //     votesForFighter2: null,               
                //     arenaId: null,                
                //     pantheonId: null,                
                //     status: "In-Progress",
                //     playersWhoVoted: null

                // });


                // const savedBattle1 = await firstBattle.save();
                
                // const savedBattle2 = await secondBattle.save();
                
                // const newArena = new Arena ({
                //     players: playerArr,
                //     battles: [savedBattle1._id, savedBattle2],
                //     pantheon: req.body._id,
                //     completed: false
                // });

                // const saveNewArena = await newArena.save();

                // console.log(saveNewArena)

                // const updatePantheon = await db.Pantheon.findOneAndUpdate({
                //     _id: req.body._id
                // }, {
                //     $push: {
                //         arenaId: saveNewArena._id
                //     },
                //     $set: {
                //         status: "In-Progress"
                //     }
                // });

                // const updateUserCreator = await db.User.findOneAndUpdate({
                //     username: req.body.creator
                // }, {
                //     $push: {
                //         pantheon: req.body._id,
                //     }
                // });

                // for (let i = 0; i < playerArr.length; i++) {
                //     const updateUserPlayers = await db.User.findOneAndUpdate({
                //         username: playerArr[i]
                //     }, {
                //         $push: {
                //             arena: saveNewArena._id
                //         }
                //     });
                // }

// GOT TO UPDATE USERS WITH THEIR BATTLES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

                const test = await db.Battle.find({ _id: "6038659ebb87b95e84f619a6"});

                const test2 = await db.Battle.find({ _id: "6038659ebb87b95e84f619a7"});

                const findUser1 = await db.User.findOneAndUpdate({ 
                    username: test[0].fighter1.username
                }, {
                    $push: { 
                        battles: test[0]._id
                    }
                });

                console.log(findUser1)


                // console.log(test, test2)
        
                res.send("Arena has been created!")

            };

        } catch (err) {
            console.log(err)
        }
    },

    findByUsername: async (req, res) => {

        try {


            const findArena = await db.Arena.find({ players: req.params.username });

            // console.log(findArena)

            const response = [];

            for (let i = 0; i < findArena.length; i++) {

                if (findArena[i].completed === true) {

                } else {
                const findPantheon = await db.Pantheon.find({ _id: findArena[i].pantheon });

                const data = {
                    arenaId: findArena[i].id,
                    battleId: findArena[i].battles,
                    players: findArena[i].players,
                    completed: findArena[i].completed,
                    pantheonId: findArena[i].pantheonId,
                    creator: findPantheon[0].creator,
                    category: findPantheon[0].data.category               
                };

                response.push(data);
    
            };
        }
            
            res.json(response);

        } catch (err) {
            console.log(err)
        }
    }
}