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
        type: Number
    },

    votesForFighter2: {
        type: Number
    },

    arenaId : {
        type: String
    },

    pantheonId : {
        type: String
    },

    status: {
        type: String
    }



})
module.exports = mongoose.model("Battle", battleSchema);