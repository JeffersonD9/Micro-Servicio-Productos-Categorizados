import { Router } from "express";
import { GetAllProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct } from "../controllers/ControllerProducts.js";
import { verifyToken } from "../midedlewares/VerifyToken.js";
import { authorizeRoles } from "../midedlewares/AuthorizedRole.js";

const router = Router();

// Rutas para productos
// Acceso permitido para admin y vendedor (lectura)
router.get('/products', verifyToken, authorizeRoles(1, 2), GetAllProducts);
router.get('/products/:id_product', verifyToken, authorizeRoles(1, 2), GetProductById);

// Solo admin puede modificar productos (escritura)
router.post('/products', verifyToken, authorizeRoles(1), CreateProduct);
router.put('/products/:id_product', verifyToken, authorizeRoles(1), UpdateProduct);
router.delete('/products/:id_product', verifyToken, authorizeRoles(1), DeleteProduct);

export default router;