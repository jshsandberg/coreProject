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

                const shuffledArr = getShuffledArr(playerArr)

                
                const firstBattle = new Battle ({
                    fighter1: {
                        username: shuffledArr[1],
                        music: null
                    },
                    fighter2: {
                        username: shuffledArr[2],
                        music: null
                    },
                    votesForFighter1: null,              
                    votesForFighter2: null,               
                    arenaId: null,                
                    pantheonId: null,                
                    status: "In-Progress",
                    playersWhoVoted: null

                });

                const secondBattle = new Battle ({
                    fighter1: {
                        username: shuffledArr[3],
                        music: null
                    },
                    fighter2: {
                        username: shuffledArr[4],
                        music: null
                    },
                    votesForFighter1: null,              
                    votesForFighter2: null,               
                    arenaId: null,                
                    pantheonId: null,                
                    status: "In-Progress",
                    playersWhoVoted: null

                });


                console.log(firstBattle, secondBattle)
                
                // const newArena = new Arena ({
                //     players: playerArr,
                //     // come back to make sure rounds makes sense for more players
                //     rounds: ((playerArr.length / 2) + 1),
                //     battles: [],
                //     pantheon: req.body._id,
                //     completed: false
                // });

            }

       

            // const saveNewArena = await newArena.save();


            //     const updatePantheon = await db.Pantheon.findOneAndUpdate({
            //         _id: req.body._id
            //     }, {
            //         $set: {
            //             status: "In-Progress"
            //         },
            //         $set: {
            //             arena: saveNewArena._id
            //         }
                    
            //     });

            //     // const updateUserCreator = await db.User.findOneAndUpdate({
            //     //     username: req.body.creator
            //     // }, {
            //     //     $push: {
            //     //         pantheon: [req.body._id],
            //     //         arena: [saveNewArena._id]
            //     //     }
            //     // });

            //     for (let i = 0; i < playerArr.length; i++) {
            //         const updateUserPlayers = await db.User.findOneAndUpdate({
            //             username: playerArr[i]
            //         }, {
            //             $push: {
            //                 pantheon: [req.body._id],
            //                 arena: [saveNewArena._id]
            //             }
            //         });
            //     }

            // res.send("Arena was created!");


        } catch (err) {
            console.log(err)
        }
    },

    findByUsername: async (req, res) => {

        try {


            const findArena = await db.Arena.find({ players: req.params.username });

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