import mongoose from "mongoose";
 
const productSchema = mongoose.Schema({
    name: String ,
    description : String ,
    prodactionDate : {type : Date ,default : new Date()},
    imageUrl : String ,
    imageUrlHover : String,
    price : Number ,
    category : [String]
})
 
export const productModel = mongoose.model("product",productSchema);

