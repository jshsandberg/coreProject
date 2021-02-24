const { response } = require("express");
const db = require("../models");
const { Arena } = require("../models");
const { Pantheon } = require("../models")



module.exports = {
    register: async (req, res) => {
        try {
         
        
            const playerArr = req.body.players;

            await playerArr.push(req.body.creator);


                const updatePantheon = await db.Pantheon.findOneAndUpdate({
                    _id: req.body._id
                }, {
                    $push: {
                        status: ["In-Progress"]
                    }
                });
    
            

    


            const newArena = new Arena ({
                players: playerArr,
                // come back to make sure rounds makes sense for more players
                rounds: ((req.body.players.length) / 2),
                battles: [null],
                pantheonId: req.body._id,
                completed: false
            });

            const saveNewArena = await newArena.save();

            res.json(saveNewArena)


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
                const findPantheon = await db.Pantheon.find({ _id: findArena[i].pantheonId });


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