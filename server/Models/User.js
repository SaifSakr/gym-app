const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: {
   type: String,
   required: true
  },
  email: {
   type: String,
   required: true
  },
  password: {
   type: String,
   required: true
  },
  age:{
    type:Number,
    required:true
  },
  height:{
    type:Number,
    required:true
  },
  neck:{
    type:Number,
    required:true
  },
  waist:{
    type:Number,
    required:true
  },
  weight:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  activity: {
   type: Date,
   default:Date
  },
  id:{
    type:Number,
    required:true
  }
});
module.exports = mongoose.model("User", UserSchema);