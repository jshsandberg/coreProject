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
  }
})
module.exports = mongoose.model("Pantheon", pantheonSchema);