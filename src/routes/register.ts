import { Router } from "express";
import { handleRegister } from "../controllers/registerController";

const router: Router = Router();

router.route('/')
    .post(handleRegister);

export default router;