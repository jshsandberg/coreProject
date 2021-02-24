const db = require("../models");
const { Pantheon } = require("../models");


module.exports = {
    register: async (req, res) => {
        try {


            const newPantheon = new Pantheon ({
                data: req.body.data,
                players: req.body.players,
                creator: req.body.creator,
                status: ["Waiting"]
            });

            const savedPantheon = await newPantheon.save();

            console.log(savedPantheon)
            res.json(savedPantheon);

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
                if (foundCreatorPantheon[i].status.includes("In-Progress")) {
                    // console.log(foundCreatorPantheon[i])
                } else {
                    response.push(foundCreatorPantheon[i]);
                }
            }

            res.json(response);

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