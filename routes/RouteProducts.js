import { Router } from "express";

const router = Router()

router.get('/products');
router.get('/products/:id_product');
router.post('/products');
router.put('/products/:id_product');
router.delete('/products/:id_product');