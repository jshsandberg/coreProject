const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const battleSchema = new Schema({
    fighter1: {
        type: Object
    },

    fighter2: {
        type: Object
    },

    votesForFighter1: {
        type: Array
    },

    votesForFighter2: {
        type: Array
    },

    arenaId : {
        type: String
    },

    pantheonId : {
        type: String
    },

    status: {
        type: String
    },

    playersWhoVoted: {
        type: Array
    }



})
module.exports = mongoose.model("Battle", battleSchema);