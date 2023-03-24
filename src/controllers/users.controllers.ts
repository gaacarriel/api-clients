import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
    const body: IUserRequest = req.body;
    const newUser = await createUserService(body);
    return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();
    return res.status(200).json(users);
};

export const retrieveUserController = async (req: Request, res: Response) => {
    const userId = req.params.user_id;
    const user = await retrieveUserService(userId);
    return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
    const userId = req.params.user_id;
    const body = req.body;
    const updatedUser = await updateUserService(userId, body);
    return res.status(200).json(updatedUser);
};

export const deleteUserController = (req: Request, res: Response) => {
    const userId = req.params.user_id;
    const deletedUser = deleteUserService(userId);
    return res.status(204).json(deletedUser);
};
