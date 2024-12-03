import { Schema, model } from "mongoose";
import { UserType } from "../types/type";

const userSchema = new Schema<UserType>({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
    }
})

export default model<UserType>('User', userSchema)