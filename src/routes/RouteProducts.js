import { Router } from "express";
import { GetAllProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct } from "../controllers/ControllerProducts.js";
import { verifyToken } from "../midedlewares/VerifyToken.js";
import { authorizeRoles } from "../midedlewares/AuthorizedRole.js";

const router = Router();

// Rutas para productos
// Acceso permitido para admin y vendedor (lectura)
router.get('/products', verifyToken, authorizeRoles('admin', 'vendedor'), GetAllProducts);
router.get('/products/:id_product', verifyToken, authorizeRoles('admin', 'vendedor'), GetProductById);

// Solo admin puede modificar productos (escritura)
router.post('/products', verifyToken, authorizeRoles('admin'), CreateProduct);
router.put('/products/:id_product', verifyToken, authorizeRoles('admin'), UpdateProduct);
router.delete('/products/:id_product', verifyToken, authorizeRoles('admin'), DeleteProduct);

export default router;