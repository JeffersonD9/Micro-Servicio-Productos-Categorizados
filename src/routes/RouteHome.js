import { Router } from "express";
import { getHome } from "../controllers/ControllerHome.js";
const router = Router()

router.get("/", getHome);

export default router;
