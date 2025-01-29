import mongoose from "mongoose";

export const connectToDB = async () => {
    try{
        let con = await mongoose.connect(process.env.DB_URI)
        console.log(" connect to db")
    } catch (err) {
        console.log("cannot connect to db" + err.message)
        process.exit(1)
    }
} 