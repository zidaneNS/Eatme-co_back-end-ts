import { Router } from "express";
import { handleLogin } from "../controllers/authController";

const router: Router = Router();

router.route('/')
    .post(handleLogin);

export default router;