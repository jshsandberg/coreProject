const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pantheonSchema = new Schema({
  data: {
    type: Object
    //required:true,
    //unique:true
  },
  players: {
    type: Array
  },
  creator: {
    type: String
  },
  acceptedPlayers: {
    type: Array
  },
  status: {
    type: String
  },

  numOfPlayers: {
    type: Number
  },

  arenaId: [{ type: Schema.Types.ObjectId, ref: 'Arena' }]

});

module.exports = mongoose.model("Pantheon", pantheonSchema);