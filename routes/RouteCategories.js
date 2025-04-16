import { Router } from "express";

const router = Router()

router.get('/categories');
router.get('/categories/:id_category');
router.post('/categories');
router.put('/categories/:id_category');
router.delete('/categories/:id_category');