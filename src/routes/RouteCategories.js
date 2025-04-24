import { Router } from "express";
import { GetAllCategories, GetCategoryById, UpdateCategory, CreateCategory, DeleteCategory } from "../controllers/ControllerCategories.js";
import { verifyToken } from "../midedlewares/VerifyToken.js";
import { authorizeRoles } from "../midedlewares/AuthorizedRole.js";

const router = Router();

// Rutas para categorías
// Acceso permitido para admin y vendedor (lectura)
router.get('/categories', verifyToken, authorizeRoles(1, 2), GetAllCategories);
router.get('/categories/:id_category', verifyToken, authorizeRoles(1, 2), GetCategoryById);

// Solo admin puede modificar categorías (escritura)
router.post('/categories', verifyToken, authorizeRoles(1), CreateCategory);
router.put('/categories/:id_category', verifyToken, authorizeRoles(1), UpdateCategory);
router.delete('/categories/:id_category', verifyToken, authorizeRoles(1), DeleteCategory);

export default router;