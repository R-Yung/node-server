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

app.use("/product",productRouter);
app.use("/user",userRouter);
app.use("/order",orderRouter);

let port = process.env.PORT;
app.listen(port,()=>{
    console.log("app is running on port " + port)
})
