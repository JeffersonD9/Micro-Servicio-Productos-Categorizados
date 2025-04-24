import { Router } from "express";
import { GetAllCategories, GetCategoryById, UpdateCategory, CreateCategory, DeleteCategory } from "../controllers/ControllerCategories.js";
import { verifyToken } from "../midedlewares/VerifyToken.js";
import { authorizeRoles } from "../midedlewares/AuthorizedRole.js";

const router = Router();

// Rutas para categorías
// Acceso permitido para admin y vendedor (lectura)
router.get('/categories', verifyToken, authorizeRoles('admin', 'vendedor'), GetAllCategories);
router.get('/categories/:id_category', verifyToken, authorizeRoles('admin', 'vendedor'), GetCategoryById);

// Solo admin puede modificar categorías (escritura)
router.post('/categories', verifyToken, authorizeRoles('admin'), CreateCategory);
router.put('/categories/:id_category', verifyToken, authorizeRoles('admin'), UpdateCategory);
router.delete('/categories/:id_category', verifyToken, authorizeRoles('admin'), DeleteCategory);

export default router;