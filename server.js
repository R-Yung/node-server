import express from "express";
import dotenv from "dotenv";

import { connectToDB } from "./config/DB.js";
import productRouter from "./Router/product.js"
import userRouter from "./Router/user.js";
import orderRouter from "./Router/order.js";

dotenv.config();
connectToDB();
const app=express();

app.use(express.json());

app.use("/api/product",productRouter);
app.use("/api/user",userRouter);
app.use("/api/order",orderRouter);

let port = process.env.PORT;
app.listen(port,()=>{
    console.log("app is running on port " + port)
})
 