const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arenaSchema = new Schema({
  players: {
    type: Object
    //[playername and song],
    //unique:true
  },

  completed: {
    type: Array
  },

  battles: [{ type: Schema.Types.ObjectId, ref: 'Battle' }],

  pantheon: [{ type: Schema.Types.ObjectId, ref: 'Pantheon' }],


});

module.exports = mongoose.model("Arena", arenaSchema);