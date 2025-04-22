import { Router } from "express";
import { updateUser, updatePassword, getUserByUserNamePassword, addUserSignUp, getUserById, getAllUsers } from "../Controller/user.js"
import { check } from "../Middleware/check.js";

const router = Router();

router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.put("/:id", check, updateUser)
router.put("/password/:id", check, updatePassword)
router.post("/", addUserSignUp)
router.post("/login", getUserByUserNamePassword)

export default router;

