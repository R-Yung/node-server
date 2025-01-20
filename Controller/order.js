import { userModel } from "../Models/user.js";
import { orderModel } from "../Models/order.js";
import { productModel } from "../Models/product.js";

//✅
export const getAllOrders = async (req,res) => {
    try {
        let data = await orderModel.find();
        res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title:"error cannot get all orders", message:err.message})
    }
}
//✅
export const addOrder = async (req, res) => {
    if (!req.body.address || !req.body.userId || !req.body.products)
        return res.status(404).json({ title: "enter: products, userId, address", message: "somthing wrong" });
    if (req.body.products.length < 1)
        return res.status(404).json({ title: "wrong products", message: "wrong data" });
    try {
        let { userId } = req.body;
        let user = await userModel.findById(userId);
        if (!user)
            return res.status(404).json({ title: "error order by id", message: "no user with such id" });

        let newOrder = new orderModel(req.body);
        let data = await newOrder.save();
        res.json(data);

    }
    catch (err) {
        console.log("err: " + err.message);
        res.status(400).json({ title: "error: cannot add order", message: "wrong data" });

    }
}
//✅
export const deleteOreder = async(req,res) => {
    let {id} = req.params;
    try{
        let data = await orderModel.findById(id);
        if(!data)
            return res.status(404).json({title: "error cannot get by id", message: "not valid id parameter found"})
        if(data.isSent)
            return res.status(404).json({title: "cannot delete", message: "the product is sent"})
        data =await orderModel.findByIdAndDelete(id);
        res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title: " error cannot get by id", message: "somthing wrong"})
    }
}
//✅
export const getOrdersByUserId = async (req, res) => {
    let { userId } = req.params;
    try {
        console.log(userId)
        let data = await orderModel.find({ userId: userId });
        console.log(data)
        if (!data)
            return res.status(404).json({ title: "error cannot get orders by id", message: "no valid id parameter found" });
        res.json(data);
    }
    catch (err) {
        console.log("err: " + err.message);
        res.status(400).json({ title: "error cannot get orders by id", message: "somthing wrong" });
    }
}
//✅
export const updateSentOrder = async (req,res) => {
    let {id} = req.params;
    try{
        let data = await orderModel.findOneAndUpdate({_id:id , isSent:false},{$set:{isSent: true}},{new:true})
    if(!data)
        return res.status(404).json({title: "cannot set the send", message: "not valid id parameter found"})
    return res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title: " cannot set the send", message: "somthing wrong"})
    }
}


// export const addOrder = async(req,res) => {
//     try{
//         let {userId,products} = req.body;
//     if(!req.body.address || !req.body.products || !req.body.passwordUser)
//         return res.status(404).json({title:"missing name or price or image" ,message:"missing data" })
//     if( req.body.products.length<1)
//         return res.status(404).json({title:"the is no product " , message: "there is no products"})
    
//         let user = await userModel.findById(userId); //?
//         if(!user)
//             return res.status(404).json({title:"error by user id", message: "no user with such id"})
//         let arr = [];
//         products.forEach(async(item) => {
//             let p = await productModel.find({name:item.name});
//             if(!p)
//                 return res.status(404).json({title:"error order by user id",message:"wrong product id"})
//             arr.push(p);
//         });
//         let order = new orderModel({userId:userId,products:arr});
//         await order.save();
//         return res.json(order)
//     }catch (err){
//         res.status(400).json({title:"error cannot add order🤑",message:err.message})
//     }
// }
// export const addOrder = async(req,res) => {
//     try{
//         let {userId,products} = req.body;
//     if(!req.body.address || !req.body.products || !req.body.passwordUser)
//         return res.status(404).json({title:"missing name or price or image" ,message:"missing data" })
//     if(req.body.products.length<1)
//         return res.status(404).json({title:"the is no product " , message: "there is no products"})
    
//         let user = await userModel.findById(userId); //?
//         if(!user)
//             return res.status(404).json({title:"error by user id", message: "no user with such id"})
//         let newOrder = new orderModel(req.body)
//         let data = await newOrder.save();
//         res.json(data);
//     } catch (err) {
//         console.log("err");
//         res.status(400).json({title:"error cannot add🥲", message: err.message})
//     }
// }
//