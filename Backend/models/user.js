const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname:  {type:String, required:true, trim:true}, // String is shorthand for {type: String}
  email: {type:String,lowercase:true,trim:true},
  image:   String,
  passeword:String,
  createdon: { type: Date, default: Date.now },
  ban:{type:Boolean,default:true},
  role:{type:String,enum:["admin","saler","client"] ,default:"client"}
});


//do not forget to export !!!!!!
module.exports=ProductModel=mongoose.model("product",productSchema)