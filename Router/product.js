import { Router } from "express";
import { getAllProducts, getById, deleteById, updateById, addProduct, getTotalCount } from "../Controller/product.js"
import { checkManager } from "../Middleware/check.js";

const router = Router();
router.get("/", getAllProducts)
router.get("/cntPages", getTotalCount)
router.get("/:id", getById)
router.delete("/:id", checkManager, deleteById)
router.put("/:id", checkManager, updateById)
router.post("/", checkManager, addProduct)

export default router;

