import { Router } from "express";
import {updateUser,updatePassword,getUserByUserNamePassword,addUserSignUp,getUserById,getAllUsers} from "../Controller/user.js"

const router = Router();

router.get("/",getAllUsers)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.put("/password/:id",updatePassword)
router.post("/",addUserSignUp)
router.post("/login/",getUserByUserNamePassword)

export default router;

