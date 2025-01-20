import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName : {type : String , require : true},
    email : {type : String , require : true},
    phone : {type : String , require : true},
    password : {type : String , require : true},
    role : {type : String , default : "USER" }

})
export const userModel = mongoose.model("user" , userSchema);