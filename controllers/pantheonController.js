const { response } = require("express");
const db = require("../models");
const { Pantheon } = require("../models");


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
                            playersWhoVoted: [],
                            winner: null
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
                            playersWhoVoted: [],
                            winner: null
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
                        playersWhoVoted: [],
                        winner: null
                    },
                    accepted: false,
                    music: false,
                    vote: false,
                    final: false,
                    finalMusic: false,
                    finalVote: false,
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
            
            const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                _id: req.body._id
            }, {
                $set: { accepted: true}
            });

            const updateCreator = await db.User.findOneAndUpdate({ 
                username: req.body.creator
            }, {
                $push: { pantheon: req.body._id}
            });

            res.send("Pantheon has started")
        } catch (err) {
            console.log(err)
        }
    },

    getMusic: async (req, res) => {
        try {

            const findUser = await db.User.find({ username: req.params.username });

            const pantheonIds = [];

            const foundPantheons = [];

            const response = [];

            findUser[0].pantheon.forEach(async item => {
                await pantheonIds.push(item);
            });

            for (let i = 0; i < pantheonIds.length; i++) {
                const findPantheons = await db.Pantheon.find({_id: pantheonIds[i]})
                await foundPantheons.push(findPantheons[0])
            }

      
            for (let i = 0; i < foundPantheons.length; i++) {
                if (foundPantheons[i].accepted === true && foundPantheons[i].music === false) {
                    response.push(foundPantheons[i]);
                } 
            };

            res.json(response);


        } catch (err) {
            console.log(err) 
        }
    },

    submitBattle: async (req, res) => {
        try {

            const findPantheon = await db.Pantheon.findById(req.body.pantheonId);


            // YOU CAN UPDATE THE SONGS AS MANY TIMES AS YOU LIKE BUT ONCE EVERYONE HAS SUBMITTED, IT IS DONE // KINDA BUGGY, TRY TO FIGURE IT OUT
           

            if (findPantheon.numOfPlayers === 4) {
                if (findPantheon.battle.battleOne.fighterOne.username === req.params.username) {
                    const updatePantheonBattleOneFighterOne = await db.Pantheon.findOneAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $set: { "battle.battleOne.fighterOne.music": req.body.item }
                    });

                    if (findPantheon.battle.battleOne.fighterOne.music !== null && findPantheon.battle.battleOne.fighterTwo.music !== null && findPantheon.battle.battleTwo.fighterOne.music !== null && findPantheon.battle.battleTwo.fighterTwo.music !== null) {
                        const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.pantheonId
                        }, {
                            $set: { music: true }
                        });
                    }

                    res.send("Updated Fighter One in Battle One");
                } else if (findPantheon.battle.battleOne.fighterTwo.username === req.params.username) {
                    const updatePantheonBattleOneFighterTwo = await db.Pantheon.findOneAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $set: { "battle.battleOne.fighterTwo.music": req.body.item }
                    });

                    if (findPantheon.battle.battleOne.fighterOne.music !== null && findPantheon.battle.battleOne.fighterTwo.music !== null && findPantheon.battle.battleTwo.fighterOne.music !== null && findPantheon.battle.battleTwo.fighterTwo.music !== null) {
                        const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.pantheonId
                        }, {
                            $set: { music: true }
                        });
                    }

                    res.send("Updated Fighter Two in Battle One");

                } else if (findPantheon.battle.battleTwo.fighterOne.username === req.params.username) {
                    const updatePantheonBattleTwoFighterOne = await db.Pantheon.findOneAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $set: { "battle.battleTwo.fighterOne.music": req.body.item }
                    });

                    if (findPantheon.battle.battleOne.fighterOne.music !== null && findPantheon.battle.battleOne.fighterTwo.music !== null && findPantheon.battle.battleTwo.fighterOne.music !== null && findPantheon.battle.battleTwo.fighterTwo.music !== null) {
                        const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.pantheonId
                        }, {
                            $set: { music: true }
                        });
                    }

                    res.send("Updated Fighter One in Battle Two");

                } else if (findPantheon.battle.battleTwo.fighterTwo.username === req.params.username) {
                    const updatePantheonBattleTwoFighterTwo = await db.Pantheon.findOneAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $set: { "battle.battleTwo.fighterTwo.music": req.body.item }
                    });

                    if (findPantheon.battle.battleOne.fighterOne.music !== null && findPantheon.battle.battleOne.fighterTwo.music !== null && findPantheon.battle.battleTwo.fighterOne.music !== null && findPantheon.battle.battleTwo.fighterTwo.music !== null) {
                        const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.pantheonId
                        }, {
                            $set: { music: true }
                        });
                    }

                    res.send("Updated Fighter Two in Battle Two");

                };
            };


        } catch (err) {
            console.log(err)
        }
    },

    castVote: async (req, res) => {
        try {

            const foundPantheon = [];

            const response = [];

            const findUser = await db.User.find({ username: req.params.username });

            for (let i = 0; i < findUser[0].pantheon.length; i++) {
                const findPantheon = await db.Pantheon.find({ _id: findUser[0].pantheon[i]})
                foundPantheon.push(findPantheon[0])
            };

            for (let i = 0; i < foundPantheon.length; i++) {
                if (foundPantheon[i].accepted === true && foundPantheon[i].music === true && foundPantheon[i].vote === false) {
                    response.push(foundPantheon[i])
                }
            }

            for (let i = 0; i < response.length; i++) {
                if (response[i].battle.battleOne.playersWhoVoted.length === response[i].numOfPlayers.length && response[i].battle.battleTwo.playersWhoVoted.length === response[i].numOfPlayers.length) {

                }

            }

            res.json(response)

        } catch (err) {
            console.log(err)
        }
    },

    saveVotes: async (req, res) => {
        try {

            // console.log(req.params, req.body.fighter)

            // NEED TO DO A CHECK TO SEE IF ALL VOTES ARE IN RATHER THAN CHECK ON VOTE BUTTON CLIKC, NEED TO MAKE ANOTHER API CALL WITH A USEEFFFECT IN THE PATNEHON PAGE

            const findPantheon = await db.Pantheon.find({ _id: req.body.state.pantheon })

         


            if (findPantheon[0].battle.battleOne.fighterOne.username === req.body.fighter.username) {
                if (findPantheon[0].battle.battleOne.playersWhoVoted.includes(req.params.username)) {
                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } else {
                        res.send("You have already voted in this battle");
                    }
                } else {
                    const updateBattleOneFighterOne = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.state.pantheon
                    }, {
                        $push: {"battle.battleOne.votesForFighterOne" : req.params.username, "battle.battleOne.playersWhoVoted" : req.params.username}
                    })

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } 

                    res.send("Voted for Battle One Fighter One")
                }    

            } else if (findPantheon[0].battle.battleOne.fighterTwo.username === req.body.fighter.username) {
                if (findPantheon[0].battle.battleOne.playersWhoVoted.includes(req.params.username)) {
                   if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } else {
                        res.send("You have already voted in this battle");
                    }
                } else {
                    const updateBattleOneFighterTwo = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.state.pantheon
                    }, {
                        $push: {"battle.battleOne.votesForFighterTwo" : req.params.username, "battle.battleOne.playersWhoVoted" : req.params.username}
                    });

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    }  

                    res.send("Voted for Battle One Fighter Two")
                }    

            } else if (findPantheon[0].battle.battleTwo.fighterOne.username === req.body.fighter.username) {
                if (findPantheon[0].battle.battleTwo.playersWhoVoted.includes(req.params.username)) {

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } else {
                        res.send("You have already voted in this battle")
                    }
                } else {
                    const updateBattleTwoFighterOne = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.state.pantheon
                    }, {
                        $push: {"battle.battleTwo.votesForFighterOne" : req.params.username, "battle.battleTwo.playersWhoVoted" : req.params.username}
                    });

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } 

                    res.send("Voted for Battle Two Fighter One")
                }    
            } else if (findPantheon[0].battle.battleTwo.fighterTwo.username === req.body.fighter.username) {
                if (findPantheon[0].battle.battleTwo.playersWhoVoted.includes(req.params.username)) {

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } 

                    res.send("You have already voted in this battle")
                } else {
                    const updateBattleTwoFighterTwo = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.state.pantheon
                    }, {
                        $push: {"battle.battleTwo.votesForFighterTwo" : req.params.username, "battle.battleTwo.playersWhoVoted" : req.params.username}
                    });

                    if (findPantheon[0].battle.battleOne.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2 && findPantheon[0].battle.battleTwo.playersWhoVoted.length === findPantheon[0].numOfPlayers - 2) {
                        const updatePantheon = await db.Pantheon.findOneAndUpdate({
                            _id: req.body.state.pantheon 
                        }, {
                            $set: { vote: true }
                        })
                        res.send("All the Votes are in")
                    } 

                    res.send("Voted for Battle Two Fighter Two")
                }    

            }

        } catch (err) {
            console.log(err)
        }
    },

    getResults: async (req, res) => {

        try {

            const findUser = await db.User.find({ username: req.params.username });

            const foundPantheon = [];

            const response = [];

            for (let i = 0; i < findUser[0].pantheon.length; i++) {
                const findPantheon = await db.Pantheon.findById(findUser[0].pantheon[i]);
                foundPantheon.push(findPantheon)
            };

            for (let i = 0; i < foundPantheon.length; i++) {
                if (foundPantheon[i].accepted === true && foundPantheon[i].music === true && foundPantheon[i].vote === true && foundPantheon[i].final === false) {
                    response.push(foundPantheon[i]);
                }
            };


            for (let i = 0; i < response.length; i++) {
                if (response[i].battle.battleOne.votesForFighterOne.length > response[i].battle.battleOne.votesForFighterTwo.length) {
                    const updateBattleOneFighterOneWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    }, {
                        $set: { "battle.battleOne.winner" : response[i].battle.battleOne.fighterOne.username}
                    })
                } else if (response[i].battle.battleOne.votesForFighterOne.length < response[i].battle.battleOne.votesForFighterTwo.length) {
                    const updateBattleOneFighterTwoWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    }, {
                        $set: { "battle.battleOne.winner" : response[i].battle.battleOne.fighterTwo.username}
                    })
                } else if (response[i].battle.battleOne.votesForFighterOne.length === response[i].battle.battleOne.votesForFighterTwo.length && response[i].battle.battleOne.winner === null) {
                    const getShuffledArr = arr => {
                        const newArr = arr.slice()
                        for (let i = newArr.length - 1; i > 0; i--) {
                            const rand = Math.floor(Math.random() * (i + 1));
                            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
                        }
                        return newArr
                    };

                    const arr = [response[i].battle.battleOne.fighterOne.username, response[i].battle.battleOne.fighterTwo.username,]

                    const shuffledArr = getShuffledArr(arr);

                    const chooseWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    },  {
                        $set: { "battle.battleOne.winner": shuffledArr[0] }
                    });

                }
                
                if (response[i].battle.battleTwo.votesForFighterOne.length > response[i].battle.battleTwo.votesForFighterTwo.length) {
                    const updateBattleTwoFighterOneWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    }, {
                        $set: { "battle.battleTwo.winner" : response[i].battle.battleTwo.fighterOne.username}
                    })
                } else if (response[i].battle.battleTwo.votesForFighterOne.length < response[i].battle.battleTwo.votesForFighterTwo.length) {
                    const updateBattleTwoFighterTwoWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    }, {
                        $set: { "battle.battleTwo.winner" : response[i].battle.battleTwo.fighterTwo.username}
                    })
                } else if (response[i].battle.battleTwo.votesForFighterOne.length === response[i].battle.battleTwo.votesForFighterTwo.length && response[i].battle.battleTwo.winner === null) {
                    const getShuffledArr = arr => {
                        const newArr = arr.slice()
                        for (let i = newArr.length - 1; i > 0; i--) {
                            const rand = Math.floor(Math.random() * (i + 1));
                            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
                        }
                        return newArr
                    };

                    const arr = [response[i].battle.battleTwo.fighterOne.username, response[i].battle.battleTwo.fighterTwo.username,]

                    const shuffledArr = getShuffledArr(arr);

                    const chooseWinner = await db.Pantheon.findOneAndUpdate({
                        _id: response[i]._id
                    },  {
                        $set: { "battle.battleTwo.winner": shuffledArr[0] }
                    });

                }
            }

            res.json(response)


        } catch (err) {
            console.log(err)
        }
    },

    createFinalBattle: async (req, res) => {
        try{

            console.log(req.params)

            // RESULTS FRONT END IS NOT SHOWING THE CORRECT WINNER, AND I THINK IT WOULD BE EASIER TO DO THE USE EFFECT TO CREATE THE WINNERS FOR THE FINAL BATTLE

            // FINAL BATTLE IS NOT UPDATING PROPERLY

            console.log("here")

            const findPantheon = await db.Pantheon.findById(req.params.id);

            console.log(findPantheon)

            if (findPantheon.accepted === true && findPantheon.music === true && findPantheon.vote === true && findPantheon.final === false) {
                const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                    _id: req.params.id
                }, {
                    $set: { "finalBattle.fighterOne.username" : findPantheon.battle.battleOne.winner, "finalBattle.fighterTwo.username" : findPantheon.battle.battleTwo.winner, "final" : true },
                });
            };

            res.send("The Final Battle has been created")

        } catch (err) {
            console.log(err)
        }
    },

    getFinalMusic: async (req, res) => {

        // I AM HERER FOR DEBUGGIN
        try {

            const findUser = await db.User.find({ username: req.params.username });

            const foundPantheon = [];

            const checkPantheon = [];

            const response = [];

            for (let i = 0; i < findUser[0].pantheon.length; i++) {
                const findPantheon = await db.Pantheon.findById(findUser[0].pantheon[i])
                foundPantheon.push(findPantheon)
            };

            for (let i = 0; i < foundPantheon.length; i++) {
                if (foundPantheon[i].accepted === true && foundPantheon[i].music === true && foundPantheon[i].vote === true && foundPantheon[i].final === true && foundPantheon[i].finalMusic === false) {
                    checkPantheon.push(foundPantheon[i])
                }
            }
           

            for (let i = 0; i < checkPantheon.length; i++) {
                if (checkPantheon[i].finalBattle.fighterOne.username === req.params.username || checkPantheon[i].finalBattle.fighterTwo.username === req.params.username) {
                    response.push(checkPantheon[i])
                }
            };

            res.json(response)

        } catch (err) {
            console.log(err)
        }
    },

    submitFinalBattle: async (req, res) => {
        try {


            const findPantheon = await db.Pantheon.findById(req.body.pantheonId);

            if (findPantheon.finalBattle.fighterOne.username === req.params.username) {
                if (findPantheon.finalBattle.fighterOne.music === null && findPantheon.finalBattle.fighterTwo.music !== null) {
                    const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                        _id: findPantheon._id 
                        }, {
                            $set: {"finalMusic" : true}
                        });

                        res.send("Updated Figher One. All choices have been selected")
                }
            
                if (findPantheon.finalBattle.fighterOne.music === null) {
                    const updatePantheonFighterOne = await db.Pantheon.findOneAndUpdate({
                    _id: findPantheon._id 
                    }, {
                        $set: {"finalBattle.fighterOne.music" : req.body.item}
                    });

                    res.send("Updated Fighter One")
                }    
                 

            } else if (findPantheon.finalBattle.fighterTwo.username === req.params.username) {
                
                if (findPantheon.finalBattle.fighterOne.music !== null && findPantheon.finalBattle.fighterTwo.music === null) {
                    const updatePantheonStatus = await db.Pantheon.findOneAndUpdate({
                        _id: findPantheon._id 
                        }, {
                            $set: {"finalMusic" : true}
                        });

                        res.send("Updated Figher Two. All choices have been selected")

                } 
                if (findPantheon.finalBattle.fighterTwo.music === null) {
                    const updatePantheonFighterOne = await db.Pantheon.findOneAndUpdate({
                        _id: findPantheon._id 
                    }, {
                        $set: {"finalBattle.fighterTwo.music" : req.body.item}
                    });

                    res.send("Updated Fighter Two")


                } else {
                    res.send("You have already submitted a song")
                }
            }

        } catch (err) {
            console.log(err)
        }
    },

    castFinalVote: async (req, res) => {
        try {

            const foundPantheon = [];

            const response = [];

            const finalResponse = [];

            const findUser = await db.User.find({ username: req.params.username });

            for (let i = 0; i < findUser[0].pantheon.length; i++) {
                const findPantheon = await db.Pantheon.find({ _id: findUser[0].pantheon[i]})
                foundPantheon.push(findPantheon[0])
            };

            for (let i = 0; i < foundPantheon.length; i++) {
                if (foundPantheon[i].accepted === true && foundPantheon[i].music === true && foundPantheon[i].vote === true && foundPantheon[i].final === true && foundPantheon[i].finalMusic === true && foundPantheon[i].finalVote === false) {
                    response.push(foundPantheon[i])
                }
            }

            for (let i = 0; i < response.length; i++) {
                if (response[i].finalBattle.fighterOne.username === req.params.username) {
                } else if (response[i].finalBattle.fighterTwo.username === req.params.username) {

                } else {
                    finalResponse.push(response[i])

                }

            }

            res.json(finalResponse)


        } catch (err) {
            console.log(err)
        }
    },

    saveFinalVotes: async (req, res) => {
        try {



            const findPantheon = await db.Pantheon.findById(req.body.pantheonId);

            if (findPantheon.finalBattle.playersWhoVoted.includes(req.params.username)){

                res.send("You already Voted")

            } else if (findPantheon.finalBattle.fighterOne.username === req.body.fighter) {
                if (findPantheon.finalBattle.playersWhoVoted.length === 1) {
                    const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $push: {"finalBattle.playersWhoVoted" : req.params.username, "finalBattle.votesForFighterOne" : req.params.username},
                        $set: { "finalVote" : true }
                    });
                    
                    res.send("All the Votes are in!")

                } else {
                    const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $push: {"finalBattle.playersWhoVoted" : req.params.username, "finalBattle.votesForFighterOne" : req.params.username},
                    });
                }

                res.send("Voted for Fighter One")

            } else if (findPantheon.finalBattle.fighterTwo.username === req.body.fighter) {
                if (findPantheon.finalBattle.playersWhoVoted.length === 1) {
                    const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $push: {"finalBattle.playersWhoVoted" : req.params.username, "finalBattle.votesForFighterTwo" : req.params.username},
                        $set: { "finalVote" : true }
                    });
                    
                    res.send("All the Votes are in!")

                } else {
                    const updatePantheon = await db.Pantheon.findByIdAndUpdate({
                        _id: req.body.pantheonId
                    }, {
                        $push: {"finalBattle.playersWhoVoted" : req.params.username, "finalBattle.votesForFighterTwo" : req.params.username},
                      
                    });
                }

                res.send("Voted for Fighter Two")
            }
            
        } catch (err) {
            console.log(err)
        }
    },

    getFinalResults: async (req, res) => {

        try {

            const foundPantheon= [];

            const checkIfTie = [];

            const response = [];

            const findUser = await db.User.find({ username: req.params.username });

            for (let i = 0; i < findUser[0].pantheon.length; i++) {
                const findPantheon = await db.Pantheon.findById(findUser[0].pantheon[i]);
                foundPantheon.push(findPantheon)
            };

            for (let i = 0; i < foundPantheon.length; i++) {
                if (foundPantheon[i].accepted === true && foundPantheon[i].music === true && foundPantheon[i].vote === true && foundPantheon[i].final === true && foundPantheon[i].finalMusic === true && foundPantheon[i].finalVote === true && foundPantheon[i].completed === false) {
                    checkIfTie.push(foundPantheon[i]);
                }
            };

            for (let i = 0; i < checkIfTie.length; i++) {
                if (checkIfTie[i].finalBattle.votesForFighterOne.length > checkIfTie[i].finalBattle.votesForFighterTwo.length) {
                    const updatePantheonWinner = await db.Pantheon.findByIdAndUpdate({
                        _id: checkIfTie[i]._id
                    }, {
                        $set: { "finalBattle.winner" : checkIfTie[i].finalBattle.fighterOne.username }
                    })
                } else if (checkIfTie[i].finalBattle.votesForFighterOne.length < checkIfTie[i].finalBattle.votesForFighterTwo.length) {
                    const updatePantheonWinner = await db.Pantheon.findByIdAndUpdate({
                        _id: checkIfTie[i]._id
                    }, {
                        $set: { "finalBattle.winner" : checkIfTie[i].finalBattle.fighterTwo.username }
                    })
                } else if (checkIfTie[i].finalBattle.votesForFighterOne.length === checkIfTie[i].finalBattle.votesForFighterTwo.length && checkIfTie[i].finalBattle.winner === null) {

                    const getShuffledArr = arr => {
                        const newArr = arr.slice()
                        for (let i = newArr.length - 1; i > 0; i--) {
                            const rand = Math.floor(Math.random() * (i + 1));
                            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
                        }
                        return newArr
                    };

                    const finalArr = [checkIfTie[i].finalBattle.fighterOne.username, checkIfTie[i].finalBattle.fighterTwo.username];

                    const shuffledArr = getShuffledArr(finalArr);

                    const updatePantheonWinner = await db.Pantheon.findByIdAndUpdate({
                        _id: checkIfTie[i]._id
                    }, {
                        $set: { "finalBattle.winner" : shuffledArr[0] }
                    })
                }
            }

            res.json(checkIfTie)

        } catch (err) {
            console.log(err)
        }
    },

    complete: async (req, res) => {

        try {

            const updatePantheon = await db.Pantheon.findOneAndUpdate({
               _id: req.params.id
            }, {
                $set: {"completed" : true}
            });

            res.send("The Pantheon has been completed")

        } catch (err) {
            console.log(err)
        }
    }
}