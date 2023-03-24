import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entitie";
import AppError from "../errors/AppError";

const checkOnwerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepository = AppDataSource.getRepository(User);

    if (!await userRepository.findOneBy({ id: req.params.user_id })) {
        throw new AppError("User not found", 404);
    }

    if (String(req.user.id) !== req.params.user_id) {
        throw new AppError("Permission needed", 403);
    }

    return next();
};

export default checkOnwerMiddleware;
