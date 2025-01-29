import { Router } from "express";
import {getAllProducts,getById,deleteById,updateById,addProduct} from "../Controller/product.js"
 
const router = Router();
router.get("/",getAllProducts)
router.get("/:id",getById)
router.delete("/:id",deleteById)
router.put("/:id",updateById)
router.post("/",addProduct)
 
export default router;

