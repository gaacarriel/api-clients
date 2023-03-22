import { Request, Response } from "express";
import { IUserRequest, IUserResponse } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";

export const createUserController = (req: Request, res: Response) => {
    const body: IUserRequest = req.body;
    const newUser: IUserResponse = createUserService(body);
    return res.status(201).json(newUser);
};

export const listUsersController = (req: Request, res: Response) => {
    const users: IUserResponse[] = listUsersService();
    return res.status(200).json(users);
};

export const updateUserController = (req: Request, res: Response) => {
    const userId = req.params.user_id;
    const body = req.body;
    const updatedUser = updateUserService(userId, body);
    return res.status(200).json(updatedUser);
};

export const deleteUserController = (req: Request, res: Response) => {
    const userId = req.params.user_id;
    const deletedUser = deleteUserService(userId);
    return res.status(204).json(deletedUser);
};
