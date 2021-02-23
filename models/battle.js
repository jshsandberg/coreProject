const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const battleSchema = new Schema({
    fighter1: {
        type: Object
    },

    fighter1: {
        type: Object
    },

    votesForFighter1: {
        type: Number
    },

    votesForFighter2: {
        type: Number
    }


})
module.exports = mongoose.model("Battle", battleSchema);