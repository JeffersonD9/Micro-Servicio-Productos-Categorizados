import { Router } from "express";
import { GetAllProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct } from "../controllers/ControllerProducts.js";
const router = Router()

router.get('/products', GetAllProducts);
router.get('/products/:id_product', GetProductById);
router.post('/products/create', CreateProduct);
router.put('/products/update/id:id_product', UpdateProduct);
router.delete('/products/delete/:id_product', DeleteProduct);

export default router