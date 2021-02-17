const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String
    //required:true,
    //unique:true
  },
  password: {
    type: String
    //required:true
  }, 
  name: {
    type: String
  },
  email: {
    type: String
  },
  // Added to this
  reviews: [],

  friend: []
  
  // [{
  //     spotifyId: {
  //       type: String
  //     },
  //     review: {
  //       type: String
  //     },
  //     rating: {
  //       type: Number
  //     }
    
  // }]
})
module.exports = mongoose.model("user", userSchema);