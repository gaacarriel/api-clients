import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Contact from "../entities/contacts";
import AppError from "../errors/AppError";

const checkContactMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOne({
        where: { id: req.params.contact_id },
        relations: { user: true },
    });

    if (!contact) {
        throw new AppError("Contact not found", 404);
    }

    if (contact.user.id !== String(req.user.id)) {
        throw new AppError("Permission needed", 403);
    }

    return next();
};

export default checkContactMiddleware;
