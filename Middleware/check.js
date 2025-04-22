import jwt from "jsonwebtoken"

export function check(req,res,next){
    let token = req.headers.authorization;
    if(!token)
        return res.status(401).json({title:"user unauthorized", message:"Make a first login"})
    try{
        let data = jwt.verify(token,process.env.SECRET_KEY);//אימות תוקף הTOKEN
        req.u = data;
        next()
    }
    catch(err){
        return res.status(401).json({title:"user unauthorized", message:err.message})
    }
}

export function checkManager(req,res,next){
    let token = req.headers.authorization;
    if(!token)
        return res.status(401).json({title:"Make a first login",message:"unauthorized"})
    try{
        let data = jwt.verify(token,process.env.SECRET_KEY);
        req.user = data;
        if(data.role == "ADMIN")
            next()
        else
            return res.status(403).json({title:"You do not have permission."})
    }
    catch(err){
        return res.status(401).json({title:"Make a first login",message:"unauthorized"+err.message})
    }
}
