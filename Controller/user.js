import {userModel} from "../Models/user.js"
//✅
export const getAllUsers = async (req,res) => {
    try {
        let data = await userModel.find();
        res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title:"error cannot get all", message:"somthing wrong"})
    }
}
//✅
export const getUserById = async (req,res) => {
    let {id} = req.params;
    try{
        let data = await userModel.findById(id);
        if(!data)
            return res.status(404).json({title: "error cannot get user by id",message : "not valid id parameter found"})
    res.json(data);
    } catch (err) {
        console.log("err" + err);
        res.status(400).json({title: "error cannot get user by id" , message: "somthing wrong"})
    }
}
//✅
export const addUserSignUp = async(req,res) => {
    if(!req.body.userName || !req.body.phone || !req.body.email || !req.body.password )
        return res.status(404).json({title:"missing name or price or image" ,message:"missing data" })
    try{
        let newUser = new userModel(req.body)
        let data = await newUser.save();
        res.json(data);
    } catch (err) {
        console.log("err");
        res.status(400).json({title:"error cannot add", message: err.message})
    }
}
//✅
export const getUserByUserNamePassword = async (req,res) => {
    try{
        let{userName,password} = req.body;
        if(!userName || !password)
            return res.status(404).json({title:"missing user name or password",message: "missing details"})
        let data = await userModel.findOne({userName : userName, password : password},{new:true});
        if(!data)
            return res.status(404).json({title: "cannot login",message : "no user with such details"})
        res.json(data)
    } catch (err) {
        console.log("err")
        res.status(400).json({title:"cannot get user by password and user name", message: err.message})
    }
}

//✅
export const updatePassword = async(req,res) => {
    let {id} = req.params;
    if(!req.body.password || req.body.password.length<4)
        return res.status(404).json({title: "wrong name", message:"wrong data"})
    try{
        let data = await userModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!data)
            return res.status(404).json({title:"error cannot update by id", message: "not valid id parameter found"})
            res.json(data);
    } catch (err) {
        console.log("err")
        res.status(400).json({title: "error cannot update by id",message:err.message})
    }
}
//✅
export const updateUser = async(req,res) => {
    let {id} = req.params;
    if(req.body.userName && req.body.userName.length < 2 )
        return res.status(404).json({title: "wrong name", message:"wrong data"})
    try{
        let data = await userModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!data)
            return res.status(404).json({title:"error cannot update by id", message: "not valid id parameter found"})
            res.json(data);
    } catch (err) {
        console.log("err")
        res.status(400).json({title: "error cannot update by id",message:err.message})
    }
}
// אין צורך 
// export const deleteById = async(req,res) => {
//     let {_id} = req.params;
//     try{
//         let data = await userModel.findByIdAndDelete(_id);
//         if(!data)
//             return res.status(404).json({title: "error cannot get by id", message: "not valid id parameter found"})
//         res.json(data);
//     } catch (err) {
//         console.log("err" + err);
//         res.status(400).json({title: " error cannot get by id", message: "somthing wrong"})
//     }
// }