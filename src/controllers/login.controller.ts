import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";
import loginService from "../services/login/login.service";

export const loginController = async (req: Request, res: Response) => {
    const body: IUserLogin = req.body
    const response = await loginService(body)
    return res.status(200).json(response)
}