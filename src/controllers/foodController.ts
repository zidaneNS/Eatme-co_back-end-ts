import { Request, Response } from "express";
import { FoodType } from "../types/type";
import Food from "../models/Food";

export const getAllFood = async (req: Request, res: Response): Promise<void> => {
    try {
        const result: FoodType[] = await Food.find().exec();

        res.json({ success: true, message: 'success retrieving all datas', data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'server error' });
    }
}

export const addFood = async (req: Request, res: Response): Promise<void> => {
    const FoodReq: FoodType = req.body;
    const name: string = FoodReq.name;
    const description: string = FoodReq.description;
    const price: number = FoodReq.price;

    if (!name || !description || !price) {
        res.status(400).json({ success: false, message: 'input field cannot empty' });
        return
    }

    if (typeof price !== 'number') {
        res.status(400).json({ success: false, message: 'price must be a number' });
        return
    }

    try {
        const foundFood: FoodType | null = await Food.findOne({ name }).exec();

        if (foundFood) {
            res.status(409).json({ success: false, message: `food with name ${name} already exists` });
            return
        }

        const result: FoodType = await Food.create<FoodType>(
            {
                name,
                description,
                price
            }
        )

        res.status(201).json({ success: true, message: `${name} successfully added`, data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'server error' });
    }
}