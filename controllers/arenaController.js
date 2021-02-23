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
                pantheonId: req.body._id
            });

            const saveNewArena = await newArena.save();

            res.json(saveNewArena)


        } catch (err) {
            console.log(err)
        }
    },
}