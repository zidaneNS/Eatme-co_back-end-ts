import { Schema, model } from "mongoose";
import { FoodType } from "../types/type";

const foodSchema = new Schema<FoodType>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default model<FoodType>('Food', foodSchema);