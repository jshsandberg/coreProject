const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arenaSchema = new Schema({
  players: {
    type: Object
    //[playername and song],
    //unique:true
  },

  completed: {
    type: Boolean
  },

  pantheonId: {
    type: String
  },

  battles: [{ type: Schema.Types.ObjectId, ref: 'Battle' }]

});

module.exports = mongoose.model("Arena", arenaSchema);