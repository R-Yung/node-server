import { Router } from "express";
import {updateSentOrder,getOrdersByUserId,deleteOreder,addOrder,getAllOrders} from "../Controller/order.js"

const router = Router();
 
router.get("/",getAllOrders)
router.get("/:userId",getOrdersByUserId)
router.put("/:id",updateSentOrder)
router.delete("/:id",deleteOreder)
router.post("/",addOrder)
 
export default router ;