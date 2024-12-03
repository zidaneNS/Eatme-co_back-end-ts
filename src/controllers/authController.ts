import { Request, Response } from "express";
import { UserType, RolesType } from "../types/type";
import bcrypt from "bcrypt";
import User from "../models/User"

type UserReqType = {
    user_name: string,
    password: string
}

type UserResType = {
    user_name: string,
    roles: RolesType
}

export const handleLogin = async (req: Request, res: Response): Promise<void> => {
    const UserReq: UserReqType = req.body;
    const user_name: string = UserReq.user_name;
    const password: string = UserReq.password;

    if (!user_name || !password) {
        res.status(400).json({ success: false, message: 'input field cannot empty' });
        return
    }

    try {
        const foundUser: UserType | null = await User.findOne({ user_name }).exec();
        
        if (!foundUser) {
            res.status(404).json({ success: false, message: 'user not found' });
            return
        }
    
        const match: boolean = await bcrypt.compare(password, foundUser.password);
    
        if (!match) {
            res.status(401).json({ success: false, message: 'unauthorized' });
            return
        }
    
        const result: UserResType = {
            user_name: foundUser.user_name,
            roles: foundUser.roles
        }

        res.json({ success: true, message: 'login successfully', data: result });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'server error' });
    }
}