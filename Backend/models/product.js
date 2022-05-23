const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  {type:String, required:true}, // String is shorthand for {type: String}
  price: Number,
  image: String,
  qte: Number,
  createddate: { type: Date, default: Date.now },
  isavailable:{type:Boolean,default:true},
  // user:{type:module.Schema.Types.ObjectId,ref:"user"}
});


//do not forget to export !!!!!!
module.exports=ProductModel=mongoose.model("product",productSchema)