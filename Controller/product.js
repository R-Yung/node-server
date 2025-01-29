import { productModel } from "../Models/product.js";
//✅
export const getAllProducts = async (req,res) => {
    try {
        let data = await productModel.find();
        res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title:"error cannot get all", message:"somthing wrong"})
    }
}
//✅
export const getById = async (req,res) => {
    let {id} = req.params;
    try{
        let data = await productModel.findById(id);
        if(!data)
            return res.status(404).json({title: "error cannot get product by id",message : "not valid id parameter found"})
    res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title: "error cannot get product by id" , message: "somthing wrong"})
    }
} 
//✅
export const deleteById = async(req,res) => {
    let {id} = req.params;
    try{
        let data = await productModel.findByIdAndDelete(id);
        if(!data)
            return res.status(404).json({title: "error cannot get by id", message: "not valid id parameter found"})
        res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title: " error cannot get by id", message: "somthing wrong"})
    }
}
//✅
export const updateById = async(req,res) => {
    let {id} = req.params;
    if(req.body.name && req.body.name.length < 2 )
        return res.status(404).json({title: "wrong name", message:"wrong data"})
    try{
        let data = await productModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!data)
            return res.status(404).json({title:"error cannot update by id", message: "not valid id parameter found"})
            res.json(data);
    } catch (err) {
        console.log("err"+ err)
        res.status(400).json({title: "error cannot update by id",message:"somthing wrong🥲"})
    }
}
//✅
export const addProduct = async(req,res) => {
    if(!req.body.name || !req.body.price || !req.body.imageUrl)
        return res.status(404).json({title:"missing name or price or image" ,message:"missing data" })
    if(req.body.name < 2)
        return res.status(404).json({title: "wrong name" , message: "wrong data"})
    try{
        let newProduct = new productModel(req.body)
        let data = await newProduct.save();
        res.json(data);
    } catch (err) {
        console.log("err"+err);
        res.status(400).json({title:"error cannot add🤑", message: "add is wrong"})
    }
}

