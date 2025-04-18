import { Router } from "express";
import { GetAllCategories, GetCategoryById, UpdateCategory, CreateCategory, DeleteCategory } from "../controllers/ControllerCategories.js";
const router = Router()

router.get('/categories', GetAllCategories);
router.get('/categories/:id_category', GetCategoryById);
router.post('/categories/create', CreateCategory);
router.put('/categories/update/:id_category', UpdateCategory);
router.delete('/categories/delete/:id_category', DeleteCategory);

export default router