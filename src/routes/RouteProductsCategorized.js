import { Router } from "express";
import { GetProductsByCategory, GetAllCategorizedProducts } from "../controllers/ControllerProductsCategorized.js";
import { verifyToken } from "../midedlewares/VerifyToken.js";
import { authorizeRoles } from "../midedlewares/AuthorizedRole.js";

const router = Router();

// Rutas para productos categorizados
// Ambos roles pueden acceder a estas rutas (solo lectura)
router.get('/categorized-products', verifyToken, authorizeRoles(1, 2), GetAllCategorizedProducts);
router.get('/categories/:categoryId/products', verifyToken, authorizeRoles(1, 2), GetProductsByCategory);

export default router;