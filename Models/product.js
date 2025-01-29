import mongoose from "mongoose";
 
const productSchema = mongoose.Schema({
    name: String ,
    descraption : String ,
    prodactionDate : {type : Date ,default : new Date()},
    imageUrl : String ,
    price : Number ,
    category : [String]
})
 
export const productModel = mongoose.model("product",productSchema);

