import { Router } from "express";
import { getAllFood, addFood } from "../../controllers/foodController";

const router: Router = Router();

router.route('/')
    .get(getAllFood)
    .post(addFood);

export default router;