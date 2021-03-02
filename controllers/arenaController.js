const { response } = require("express");
const db = require("../models");
const { Arena } = require("../models");
const { Pantheon } = require("../models");
const { User } = require("../models");
const { Battle } = require("../models");





module.exports = {
    register: async (req, res) => {
        // try {
         
        //     const playerArr = req.body.players;

        //     await playerArr.push(req.body.creator);

        //     if (playerArr.length === 4) {

        //         const getShuffledArr = arr => {
        //             const newArr = arr.slice()
        //             for (let i = newArr.length - 1; i > 0; i--) {
        //                 const rand = Math.floor(Math.random() * (i + 1));
        //                 [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        //             }
        //             return newArr
        //         };

        //         const shuffledArr = getShuffledArr(playerArr);

  

                
        //         const firstBattle = new Battle ({
        //             fighter1: {
        //                 username: shuffledArr[0],
        //                 music: null
        //             },
        //             fighter2: {
        //                 username: shuffledArr[1],
        //                 music: null
        //             },
        //             votesForFighter1: [],              
        //             votesForFighter2: [],               
        //             arenaId: null,                
        //             pantheonId: null,                
        //             status: "In-Progress",
        //             playersWhoVoted: []

        //         });

        //         const secondBattle = new Battle ({
        //             fighter1: {
        //                 username: shuffledArr[2],
        //                 music: null
        //             },
        //             fighter2: {
        //                 username: shuffledArr[3],
        //                 music: null
        //             },
        //             votesForFighter1: [],              
        //             votesForFighter2: [],               
        //             arenaId: null,                
        //             pantheonId: null,                
        //             status: "In-Progress",
        //             playersWhoVoted: []

        //         });


        //         const savedBattle1 = await firstBattle.save();
                
        //         const savedBattle2 = await secondBattle.save();
                
        //         const newArena = new Arena ({
        //             players: playerArr,
        //             battles: [savedBattle1._id, savedBattle2],
        //             pantheon: req.body._id,
        //             completed: []
        //         });

        //         const saveNewArena = await newArena.save();

        //         console.log(saveNewArena)

        //         const updateBattle1 = await db.Battle.findOneAndUpdate({
        //             _id: savedBattle1._id
        //         }, {
        //             $set: { arenaId: saveNewArena._id, pantheonId: req.body._id}
        //         });

        //         const updateBattle2 = await db.Battle.findOneAndUpdate({
        //             _id: savedBattle2._id
        //         }, {
        //             $set: { arenaId: saveNewArena._id, pantheonId: req.body._id}
        //         })

        //         const updatePantheon = await db.Pantheon.findOneAndUpdate({
        //             _id: req.body._id
        //         }, {
        //             $push: {
        //                 arenaId: saveNewArena._id
        //             },
        //             $set: {
        //                 status: "In-Progress"
        //             }
        //         });

        //         const updateUserCreator = await db.User.findOneAndUpdate({
        //             username: req.body.creator
        //         }, {
        //             $push: {
        //                 pantheon: req.body._id,
        //             }
        //         });

        //         for (let i = 0; i < playerArr.length; i++) {
        //             const updateUserPlayers = await db.User.findOneAndUpdate({
        //                 username: playerArr[i]
        //             }, {
        //                 $push: {
        //                     arena: saveNewArena._id
        //                 }
        //             });
        //         }

        //         const findUser1 = await db.User.findOneAndUpdate({ 
        //             username: savedBattle1.fighter1.username
        //         }, {
        //             $push: { 
        //                 battles: savedBattle1._id
        //             }
        //         });

        //         const findUser2 = await db.User.findOneAndUpdate({ 
        //             username: savedBattle1.fighter2.username
        //         }, {
        //             $push: { 
        //                 battles: savedBattle1._id
        //             }
        //         });

        //         const findUser3 = await db.User.findOneAndUpdate({ 
        //             username: savedBattle2.fighter1.username
        //         }, {
        //             $push: { 
        //                 battles: savedBattle2._id
        //             }
        //         });

                
        //         const findUser4 = await db.User.findOneAndUpdate({ 
        //             username: savedBattle2.fighter2.username
        //         }, {
        //             $push: { 
        //                 battles: savedBattle2._id
        //             }
        //         });
        
        //         res.send("Arena has been created!")

        //     };

        // } catch (err) {
        //     console.log(err)
        // }
    },

    findByUsername: async (req, res) => {

        // try {


        //     const findUser = await db.User.find({ username: req.params.username });

        //     const response = [];

        //     const foundBattle = [];

        //     const checkBattle = [];

        //     const foundArena = [];

        //     for (let i = 0; i < findUser[0].battles.length; i++) {
        //         const findBattle = await db.Battle.find({ _id: findUser[0].battles[i]});

        //         if (findBattle[i].status === "In-Progress") {
        //             checkBattle.push(findBattle[i])
        //         } 
        //     }

            

        //     for (let i = 0; i < checkBattle.length; i++) {
        //         if (checkBattle[i].fighter1.music === null || checkBattle[i].fighter2.music === null) {
        //             foundBattle.push(checkBattle[i])
        //         } 
        //     }


        //     for (let i = 0; i < foundBattle.length; i++) {
        //         const findArena = await db.Arena.find({ battles: foundBattle[i]._id});
        //         foundArena.push(findArena);
        //     };

        //     for (let i = 0; i < foundArena.length; i++) {

        //         if (foundArena[i].completed === true) {

        //         } else {
        //             const findPantheon = await db.Pantheon.find({ _id: foundArena[i][0].pantheon });


        //             const data = {
        //                             arenaId: foundArena[i][0].id,
        //                             battle: foundBattle[i],
        //                             players: foundArena[i][0].players,
        //                             completed: foundArena[i][0].completed,
        //                             pantheonId: findPantheon[0]._id,
        //                             creator: findPantheon[0].creator,
        //                             category: findPantheon[0].data.category               
        //                         };


        //             response.push(data);
        //         }
        //     }
                    
        //     res.json(response);

        // } catch (err) {
        //     console.log(err)
        // }
    }
}