const db = require("../models");
const { Pantheon } = require("../models");


module.exports = {
    register: async (req, res) => {
        try {

            console.log(req.body.players.length)

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
           
                const newPantheon = new Pantheon ({
                    category: req.body.data.category,
                    players: playerArr,
                    creator: req.body.creator,
                    acceptedPlayers: [req.body.creator],
                    numOfPlayers: 4,
                    battle: {
                        battleOne: {
                            fighterOne: {
                                username: shuffledArr[0],
                                music: null
                            },
                            fighterTwo: {
                                username: shuffledArr[1],
                                music: null
                            },
                            votesForFighterOne: [],
                            votesForFighterTwo: [],
                            playersWhoVoted: []
                        },
                        battleTwo: {
                            fighterOne: {
                                username: shuffledArr[2],
                                music: null
                            },
                            fighterTwo: {
                                username: shuffledArr[3],
                                music: null
                            },
                            votesForFighterOne: [],
                            votesForFighterTwo: [],
                            playersWhoVoted: []
                        }
                    },
                    finalBattle: {                    
                        fighterOne: {
                            username: null,
                            music: null
                        },
                        fighterTwo: {
                            username: null,
                            music: null
                        },
                        votesForFighterOne: [],
                        votesForFighterTwo: [],
                        playersWhoVoted: []
                    },
                    accepted: false,
                    music: false,
                    vote: false,
                    final: false,
                    completed: false
                });
    
                const savedPantheon = await newPantheon.save();
    
                res.send("Pantheon created");

            } else {
                res.send("You need to invite 3 of your friends to create a Pantheon")
            }

   

        } catch (err) {
            console.log(err)
        }
    },
    find: async (req, res) => {
        try {

            const foundPantheon = await db.Pantheon.find({ players: req.params.username });

            const response = [];

            foundPantheon.forEach(item => {
                if (item.acceptedPlayers.includes(req.params.username)){
                    
                } else {
                    response.push(item)
                }
            });
            
            res.json(response);

        } catch (err) {
            console.log(err)
        }
    },

    findCreator: async (req, res) => {
        try {

         

            const foundCreatorPantheon = await db.Pantheon.find({ "creator": req.params.username });

            const response = []


            for (let i = 0; i < foundCreatorPantheon.length; i++) {
                if (foundCreatorPantheon[i].accepted === false) {               
                    response.push(foundCreatorPantheon[i]);
                }
            }

            res.json(response);

        } catch (err) {
            console.log(err)
        }
    },
    
    startMusic: async (req, res) => {
        try {
            console.log("here")
        } catch (err) {
            console.log(err)
        }
    }
    //  Find with no requirements
    // find: async (req, res) => {
    //     try {

    //         const foundPantheon = await db.Pantheon.find({ players: req.params.username });

    //         res.json(foundPantheon)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
}