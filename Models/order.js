import mongoose from "mongoose";
const minimalSchema = mongoose.Schema({
   name: String ,
   price : Number,
   amount : Number,
})
//  export const minimalModel = mongoose.model("minimalProduct", minimalSchema);
   
const orderSchema = mongoose.Schema({
   orderDate : {type : Date , default : new Date()},
   targetDate : {type : Date , default : new Date()},
   address : String , 
   userId : String,
   products : [minimalSchema],
   isSent : {type: Boolean,default : false },
   sendingPrice : {type : Number , default : 30},
   total : Number
})

export const orderModel = mongoose.model("order",orderSchema);