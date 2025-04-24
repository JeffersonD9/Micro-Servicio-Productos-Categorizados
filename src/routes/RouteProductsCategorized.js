import { Router } from "express";
import { GetProductsByCategory, GetAllCategorizedProducts } from "../controllers/ControllerCategorizedProducts.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { authorizeRoles } from "../middlewares/authorizeRoles.js";

const router = Router();

// Rutas para productos categorizados
// Ambos roles pueden acceder a estas rutas (solo lectura)
router.get('/categorized-products', verifyToken, authorizeRoles('admin', 'vendedor'), GetAllCategorizedProducts);
router.get('/categories/:categoryId/products', verifyToken, authorizeRoles('admin', 'vendedor'), GetProductsByCategory);

export default router;