import { Request, Response } from "express";
import { UserType, RolesType } from "../types/type";
import bcrypt from "bcrypt";
import validRoles from "../config/validRoles";
import User from "../models/User"

export const handleRegister = async (req: Request, res: Response) => {
    const userReq: UserType = req.body;
    const roles: RolesType = userReq.roles;
    const password: string = userReq.password;
    const user_name: string = userReq.user_name;

    if (!user_name || !roles || !password) {
        res.status(400).json({ success: false, message: 'input field cannot empty' });
        return
    }

    if (!validRoles.includes(roles)) {
        res.status(400).json({ success: false, message: 'roles invalid' });
        return
    }

    const foundUser: UserType[] = await User.find({ user_name }).exec();

    if (foundUser.length > 0) {
        res.status(409).json({ success: false, message: `user with username ${user_name} already exists` });
        return
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    try {
        const result = await User.create<UserType>({
            user_name,
            password: hashedPassword,
            roles
        })
    
        res.status(201).json({ success: true, message: `user ${user_name} created`, data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'server error' });
    }
}